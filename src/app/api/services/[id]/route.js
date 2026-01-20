import { serviceCollection } from "@/lib/dbConnection";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const { id } = await params;
  const filter = { _id: new ObjectId(id) };
  const db = await serviceCollection;
  const result = await db.findOne(filter);

  if (!result) {
    return new Response(
      JSON.stringify({ success: false, message: "Service not found" }),
      {
        status: 404,
      },
    );
  }
  return new Response(JSON.stringify({ success: true, data: result }), {
    status: 200,
  });
}
