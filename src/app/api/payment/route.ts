import Razorpay from "razorpay";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount } = body;

    if (!amount || isNaN(amount)) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    // ✅ Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_SECRET!,
    });

    // ✅ Order create
    const options = {
      amount: amount * 100, // convert to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);

    console.log("✅ Razorpay Order Created:", order);

    return NextResponse.json({ order });
  } catch (error: any) {
    console.error("❌ Razorpay Order Error:", error);
    return NextResponse.json(
      { error: "Failed to create Razorpay order", details: error.message },
      { status: 500 }
    );
  }
}
