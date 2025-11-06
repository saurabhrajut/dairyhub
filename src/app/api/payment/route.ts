// app/api/payment/route.ts
import Razorpay from "razorpay";
import { NextResponse } from "next/server";

function mask(s?: string) {
  if (!s) return "(missing)";
  return s.length > 6 ? s.substring(0,3) + "..."+ s.substring(s.length-3) : "*****";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { amount } = body;

    console.log("[PAYMENT] Received create-order request, body:", body);

    if (!amount || isNaN(amount)) {
      console.log("[PAYMENT] Invalid amount:", amount);
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    // show whether envs are present (masked)
    console.log("[PAYMENT] env NEXT_PUBLIC_RAZORPAY_KEY_ID:", mask(process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID));
    console.log("[PAYMENT] env RAZORPAY_KEY_SECRET present?:", !!process.env.RAZORPAY_KEY_SECRET);

    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const options = {
      amount: Number(amount) * 100,
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    console.log("[PAYMENT] Razorpay order created:", { id: order.id, amount: order.amount, currency: order.currency });

    return NextResponse.json({ order });
  } catch (error: any) {
    console.error("❌ Razorpay Order Error:", error);
    // Return error details (for debug only). Remove details in prod.
    return NextResponse.json(
      { error: "Failed to create Razorpay order", details: error?.message || String(error) },
      { status: 500 }
    );
  }
}
