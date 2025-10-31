"use client";
import { useState } from "react";

export default function PaymentButton() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      // Backend se order create karte hain
      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 499 }),
      });

      const data = await res.json();

      if (!data.order) throw new Error("Order creation failed");

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: "INR",
        name: "Dairy Hub",
        description: "Premium Subscription",
        order_id: data.order.id,
        handler: function (response: any) {
          console.log("✅ Payment Successful:", response);
          alert("Payment successful!");
        },
        prefill: {
          name: "Saurabh Rajput",
          email: "saurabh@example.com",
          contact: "9999999999",
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new (window as any).Razorpay(options);
      rzp.open();

      rzp.on("payment.failed", function (response: any) {
        console.error("❌ Payment Failed:", response.error);
        alert("Payment failed! Try again.");
      });
    } catch (err) {
      console.error("❌ Payment Error:", err);
      alert("Something went wrong during payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="px-4 py-2 bg-blue-600 text-white rounded-md"
    >
      {loading ? "Processing..." : "Pay ₹499"}
    </button>
  );
}
