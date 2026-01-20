import { serviceCollection } from "@/lib/dbConnection";

export async function GET() {
  const db = await serviceCollection;
  const result = await db.find({}).toArray();

  return Response.json(result);
}

export async function POST(request) {
  const newService = await request.json();

  const service = {
    ...newService,
    date: new Date(),
  };

  const db = await serviceCollection;
  const result = await db.insertOne(service);

  return Response.json({
    success: true,
    insertedId: result.insertedId,
  });
}
