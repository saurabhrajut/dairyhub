"use client";

import { useState } from "react";
import Script from "next/script";

export default function PaymentPage() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      console.log("[FRONTEND] Creating order...");

      // Backend call
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 499 }),
      });

      const data = await res.json();
      console.log("[FRONTEND] Backend response:", data);

      if (!data.order || !data.order.id) {
        alert("Order creation failed: " + data.error);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: "INR",
        name: "Dairy Hub",
        description: "Premium Subscription",
        order_id: data.order.id,
        handler: function (response: any) {
          console.log("✅ Payment Success:", response);
          alert("Payment successful!");
        },
        prefill: {
          name: "Saurabh Rajput",
          email: "saurabh@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      console.log("[FRONTEND] Razorpay options:", options);

      const rzp = new (window as any).Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response: any) {
        console.error("❌ Payment Failed:", response.error);
        alert("Payment failed! Try again.");
      });
    } catch (err) {
      console.error("❌ Payment Error:", err);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Razorpay script */}
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />

      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Dairy Hub Payment</h1>
        <button
          onClick={handlePayment}
          disabled={loading}
          className="px-5 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {loading ? "Processing..." : "Pay ₹499"}
        </button>
      </div>
    </>
  );
}
