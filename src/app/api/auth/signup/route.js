import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { userCollection } from "@/lib/dbConnection";

export async function POST(request) {
  try {
    const { name, email, password, image, coverImage } = await request.json();
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const users = await userCollection;

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await users.insertOne({
      name,
      email,
      password: hashedPassword,
      image: image || null,
      coverImage: coverImage || null,
      createdAt: new Date(),
    });

    const response = NextResponse.json(
      { message: "User created", user: { id: result.insertedId, name, email } },
      { status: 201 },
    );

    response.cookies.set("userId", result.insertedId.toString(), {
      httpOnly: true,
      path: "/", 
      maxAge: 60 * 60 * 24 * 7, 
    });

    return response;
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
