import { NextRequest, NextResponse } from "next/server";
import connectDb from "@/lib/db";
import Booking from "@/models/booking.model";

export async function POST(req: NextRequest, context: any) {
  const { id } = context.params; // ❗ no await

  await connectDb();

  const booking = await Booking.findById(id);

  if (!booking) {
    return NextResponse.json({ message: "Booking not found" });
  }

  booking.status = "arrived";
  booking.arrivedAt = new Date();

  await booking.save();

  return NextResponse.json({ success: true });
}
// test fix