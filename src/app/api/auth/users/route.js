import { userCollection } from "@/lib/dbConnection";
import { ObjectId } from "mongodb";

export async function GET(request) {
  try {
    // ✅ Correct cookie read in API route
    const userId = request.cookies.get("userId")?.value;

    if (!userId) {
      return Response.json({ user: null }, { status: 200 });
    }

    const collection = await userCollection;
    const user = await collection.findOne({ _id: new ObjectId(userId) });

    if (!user) {
      return Response.json({ user: null }, { status: 200 });
    }

    return Response.json(
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
  } catch (error) {
    console.error("CURRENT USER ERROR:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
