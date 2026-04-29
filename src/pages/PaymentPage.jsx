import React, { useState,useEffect } from "react";
import axios from "axios";
import "./PaymentPage.css";
import { useLocation } from "react-router-dom";

function PaymentPage() {
const location = useLocation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    method: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    upiId: ""
  });
useEffect(() => {
  if (location.state?.amount) {
    setForm((prev) => ({
      ...prev,
      amount: location.state.amount
    }));
  }
}, [location.state]);

  const [status, setStatus] = useState("");
useEffect(() => {

  const token = localStorage.getItem("token");

  if (!token) {
    setStatus("Please login or register first to continue payment");
  }

}, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const handlePay = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    setStatus("Please login before making payment");
    return;
  }

  if (!form.name || !form.email || !form.amount || !form.method) {
    setStatus("Please fill all required fields");
    return;
  }

  if ((form.method === "Credit Card" || form.method === "Debit Card") &&
      (!form.cardNumber || !form.expiry || !form.cvv)) {
    setStatus("Please enter card details");
    return;
  }

  if (form.method === "UPI" && !form.upiId) {
    setStatus("Please enter UPI ID");
    return;
  }

  try {
    let paymentDetails = "";
    if (form.method === "UPI") {
      paymentDetails = form.upiId;
    } else {
      paymentDetails = `${form.cardNumber} | ${form.expiry} | ${form.cvv}`;
    }

    const res = await axios.post(
      "http://localhost:5000/api/payment/pay",
      {
        name: form.name,
        email: form.email,
        amount: form.amount,
        method: form.method,
        paymentDetails: paymentDetails
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    // Handle both success and error messages from backend
    if (res.data.success) {
      setStatus(res.data.message); // e.g., "Payment processed successfully."
      // Optionally reset form
      setForm({
        name: "",
        email: "",
        amount: "",
        method: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
        upiId: ""
      });
    } else {
      // Backend sent success: false
      setStatus(res.data.message || "Payment failed");
    }

  } catch (error) {
    // Catch network or server errors
    setStatus(error.response?.data?.message || "Payment failed due to server error");
  }
};
  
  return (

    <div className="pay-container">

      <div className="pay-card">

        <h2>Course Payment</h2>

        {status && <p className="status">{status}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="input-box"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="input-box"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount ₹"
          value={form.amount}
          readOnly
          className="input-box"
        />

        <select
          name="method"
          value={form.method}
          onChange={handleChange}
          className="input-box"
        >
          <option value="">Select Payment Method</option>
          <option value="Credit Card">Credit Card</option>
          <option value="Debit Card">Debit Card</option>
          <option value="UPI">UPI / PhonePe / GPay</option>
        </select>

        {(form.method === "Credit Card" || form.method === "Debit Card") && (
          <>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={form.cardNumber}
              onChange={handleChange}
              className="input-box"
              maxLength="16"
            />

            <div className="card-row">

              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={form.expiry}
                onChange={handleChange}
                className="small-input"
              />

              <input
                type="password"
                name="cvv"
                placeholder="CVV"
                value={form.cvv}
                onChange={handleChange}
                className="small-input"
                maxLength="3"
              />

            </div>
          </>
        )}

        {form.method === "UPI" && (
          <input
            type="text"
            name="upiId"
            placeholder="Enter UPI ID (example@upi)"
            value={form.upiId}
            onChange={handleChange}
            className="input-box"
          />
        )}

        <button className="pay-btn" onClick={handlePay}>
          Pay Now
        </button>

      </div>

    </div>
  );
}

export default PaymentPage;