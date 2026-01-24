import { userCollection } from "@/lib/dbConnection";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const cookieStore = request.cookies;
    const userId = cookieStore.get("userId")?.value;

    if (!userId) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    const users = await userCollection;
    const user = await users.findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return NextResponse.json({ user: null }, { status: 200 });
    }

    return NextResponse.json(
      {
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          image: user.image || null,
          coverImage: user.coverImage || null,
        },
      },
      { status: 200 },
    );
  } catch (err) {
    console.error("CurrentUser API error:", err);
    return NextResponse.json(
      { user: null, error: "Something went wrong" },
      { status: 500 },
    );
  }
}
