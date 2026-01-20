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

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const filter = { _id: new ObjectId(id) };

    const data = await request.json();

    const updateDoc = {
      $set: {
        ...data,
        update_date: new Date(),
      },
    };

    const db = await serviceCollection;
    const result = await db.updateOne(filter, updateDoc);

    return Response.json({ modified: result.modifiedCount }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const filter = { _id: new ObjectId(id) };
  const db = await serviceCollection;
  const result = await db.deleteOne(filter);
  return Response.json(
    { deleted: result.deletedCount, message: "successfully delete" },
    { status: 200 },
  );
}
