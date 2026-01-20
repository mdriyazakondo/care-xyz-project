import { dbConnect } from "./dbConnect";

export const userCollection = dbConnect("users");
export const serviceCollection = dbConnect("services");
export const bookingCollection = dbConnect("bookings");
