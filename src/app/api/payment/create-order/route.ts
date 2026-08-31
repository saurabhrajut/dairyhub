import Razorpay from "razorpay";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { amount, currency, receipt, notes } = await req.json();

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      return NextResponse.json(
        { ok: false, error: "Razorpay keys not configured" },
        { status: 500 }
      );
    }

    if (!amount || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json(
        { ok: false, error: "Invalid amount" },
        { status: 400 }
      );
    }

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await instance.orders.create({
      amount: Math.round(amount * 100), // paise mein
      currency: currency || "INR",
      receipt: receipt || `rcpt_${Date.now()}`,
      notes: notes || {},
    });

    return NextResponse.json({ ok: true, order }, { status: 200 });

  } catch (err: any) {
    console.error("Razorpay order error:", err);
    return NextResponse.json(
      { ok: false, error: err?.message || "Failed to create order" },
      { status: 500 }
    );
  }
}
