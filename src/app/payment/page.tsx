"use client";
import { useState } from "react";

export default function PaymentButton() {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: 499 }), // ₹499 example
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
    <div className="flex justify-center items-center h-screen">
      <button
        onClick={handlePayment}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-md hover:bg-blue-700 transition"
      >
        {loading ? "Processing..." : "Pay ₹499"}
      </button>
    </div>
  );
}
