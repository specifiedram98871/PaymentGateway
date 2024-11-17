import React, { useState } from "react";
import PriceSidebar from "./PriceSidebar";
import { useSelector } from "react-redux";
import axios from "axios";

const Payment = () => {
  const [checked, setChecked] = useState("Khalti");
  const cartItems = useSelector((state) => state.cart.items) || [];
  const user = useSelector((state) => state.user.user) || {};
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity * 100,
    0
  );
  const handleCheck = (e) => {
    setChecked(e.target.value);
  };
  const testData = {
    return_url: "http://localhost:5000/api/verify",
    amount: 10,
    order_id: "panyoendnddfand4545",
    order_name: "test",
    customerinfo: {
      username: user.username || "guest",
      email: user.email || "guest@example.com",
    },
    payment_method: checked,
  };
  const esewaCall = (formData: any) => {
    console.log(formData);
    const path = "https://rc-epay.esewa.com.np/api/epay/main/v2/form";

    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", path);

    for (const key in formData) {
      const hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", key);
      hiddenField.setAttribute("value", formData[key]);
      form.appendChild(hiddenField);
    }

    document.body.appendChild(form);
    form.submit();
  };

  const initiatePayment = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/pay",
        testData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      if (checked === "Khalti") {
        window.location.href = data.response.payment_url;
      } else if (checked === "Esewa") {
        esewaCall(data.formData);
      }
      console.log("response", data.formData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex sm:h-screen flex-col items-center mt-8">
      <PriceSidebar cartItems={cartItems} />
      <form
        onSubmit={initiatePayment}
        className="w-full flex flex-col items-center"
      >
        <div className="flex items-center justify-end gap-2 w-[80%] mt-4">
          <button
            type="submit"
            className="dark:bg-slate-200 dark:hover:bg-slate-50 text-red-500 font-bold py-2 px-4 rounded"
          >
            Pay {totalPrice}
          </button>
          <input
            type="radio"
            id="Khalti"
            name="payment"
            value="Khalti"
            onChange={handleCheck}
          />
          <label htmlFor="Khalti">
            <div>
              <img
                draggable="false"
                className="h-[3rem] w-[5rem] object-contain"
                src="https://web.khalti.com/static/img/logo1.png"
                alt="Khalti Logo"
              />
            </div>
          </label>
          <input
            type="radio"
            id="Esewa"
            name="payment"
            value="Esewa"
            onChange={handleCheck}
          />
          <label htmlFor="Esewa">
            <div>
              <img
                draggable="false"
                className="h-[3rem] w-[5rem] object-contain"
                src="https://esewa.com.np/common/images/esewa_logo.png"
                alt="Esewa Logo"
              />
            </div>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Payment;
