import { bookingCollection } from "@/lib/dbConnection";

export async function GET() {
  try {
    const collection = await bookingCollection;
    const bookings = await collection.find({}).toArray();
    return Response.json({ bookings }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const newBooking = await request.json();
    const booking = { ...newBooking, date: new Date(), status: "pending" };

    const collection = await bookingCollection;
    const result = await collection.insertOne(booking);

    return Response.json(
      { insertedId: result.insertedId, message: "Booking created" },
      { status: 201 },
    );
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
