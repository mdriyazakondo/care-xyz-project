import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { userCollection } from "@/lib/dbConnection";

export async function POST(request) {
  try {
    const body = await request.json();
    const { action } = body;

    if (!action) {
      return NextResponse.json(
        { error: "Action is required" },
        { status: 400 },
      );
    }

    const users = await userCollection;

    /* ================= REGISTER ================= */
    if (action === "register") {
      let { name, email, password, image, coverImage } = body;

      if (!name || !email || !password) {
        return NextResponse.json(
          { error: "Name, email and password are required" },
          { status: 400 },
        );
      }

      email = email.toLowerCase(); // ✅ avoid duplicate emails

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
        {
          message: "User registered successfully",
          user: { id: result.insertedId.toString(), name, email },
        },
        { status: 201 },
      );

      response.cookies.set("userId", result.insertedId.toString(), {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });

      return response;
    }

    /* ================= LOGIN ================= */
    if (action === "login") {
      let { email, password } = body;

      if (!email || !password) {
        return NextResponse.json(
          { error: "Email and password are required" },
          { status: 400 },
        );
      }

      email = email.toLowerCase();

      const user = await users.findOne({ email });
      if (!user) {
        return NextResponse.json(
          { error: "Invalid email or password" },
          { status: 401 },
        );
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return NextResponse.json(
          { error: "Invalid email or password" },
          { status: 401 },
        );
      }

      const response = NextResponse.json(
        {
          message: "Login successful",
          user: { id: user._id.toString(), name: user.name, email: user.email },
        },
        { status: 200 },
      );

      // ✅ Set login cookie
      response.cookies.set("userId", user._id.toString(), {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });

      return response;
    }

    /* ================= LOGOUT ================= */
    if (action === "logout") {
      const response = NextResponse.json(
        { message: "Logged out successfully" },
        { status: 200 },
      );

      response.cookies.set("userId", "", {
        httpOnly: true,
        path: "/",
        maxAge: 0,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
      });

      return response;
    }

    // ❌ Unknown action
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  } catch (error) {
    console.error("USER API ERROR:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
