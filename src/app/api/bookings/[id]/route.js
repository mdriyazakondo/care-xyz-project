import { bookingCollection } from "@/lib/dbConnection";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const { id } = await params;
  const filter = { _id: new ObjectId(id) };
  const db = await bookingCollection;
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

export async function PATCH(request, { params }) {
  const { id } = await params;
  const filter = { _id: new ObjectId(id) };
  const body = await request.json();

  const updateDoc = {
    $set: {
      status: body.status,
    },
  };
  const db = await bookingCollection;

  const res = await db.updateOne(filter, updateDoc);
  return Response.json({
    success: true,
    message: "Status updated",
  });
}
