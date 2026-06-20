import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";



export default function Checkout() {


  const { clearCart } = useCart();

  const { language } = useLanguage();


  const [submitted, setSubmitted] = useState(false);

  const [error, setError] = useState("");



  const [form, setForm] = useState({

    name: "",

    phone: "",

    address: ""

  });





  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]: e.target.value

    });

  };





  const handleSubmit = () => {


    const qatarPhoneRegex = /^[3567][0-9]{7}$/;

    const nameRegex = /^[\u0600-\u06FFa-zA-Z\s]+$/;




    if (

      !form.name.trim() ||

      !form.phone.trim() ||

      !form.address.trim()

    ) {

      setError(

        language === "ar"
        ? "يرجى تعبئة جميع البيانات"
        : "Please fill all fields"

      );

      return;

    }




    if (!nameRegex.test(form.name)) {

      setError(

        language === "ar"
        ? "الاسم يجب أن يحتوي على حروف فقط"
        : "Name must contain letters only"

      );

      return;

    }




    if (!qatarPhoneRegex.test(form.phone)) {

      setError(

        language === "ar"
        ? "رقم الهاتف غير صحيح"
        : "Invalid phone number"

      );

      return;

    }




    if (form.address.trim().length < 15) {

      setError(

        language === "ar"
        ? "يرجى كتابة عنوان كامل"
        : "Please enter a complete address"

      );

      return;

    }



    setError("");

    clearCart();

    setSubmitted(true);

  };






  if (submitted) {

    return (

      <div className="min-h-screen bg-amber-50 flex items-center justify-center p-6">

        <div className="bg-white rounded-2xl shadow-xl p-10 text-center">

          <div className="text-6xl mb-5">

            ✅

          </div>

          <h1 className="text-3xl font-bold text-green-700 mb-4">

            {
              language === "ar"
              ? "تم تأكيد الطلب"
              : "Order Confirmed"
            }

          </h1>

          <p className="text-gray-600">

            {
              language === "ar"
              ? "شكراً لتسوقك من Think & Craft"
              : "Thank you for shopping at Think & Craft"
            }

          </p>

        </div>

      </div>

    );

  }







  return (

    <div className="min-h-screen bg-amber-50 p-6">

      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-amber-900 mb-8">

          {
            language === "ar"
            ? "إتمام الطلب"
            : "Checkout"
          }

        </h1>





        {

        error &&

        <div className="bg-red-100 text-red-700 p-4 rounded-xl mb-5">

          {error}

        </div>

        }






        <div className="space-y-5">




          <input

            name="name"

            value={form.name}

            onChange={handleChange}

            placeholder={
              language === "ar"
              ? "الاسم الكامل"
              : "Full Name"
            }

            className="w-full border p-4 rounded-xl"

          />






          <input

            name="phone"

            value={form.phone}

            onChange={handleChange}

            type="tel"

            placeholder={
              language === "ar"
              ? "رقم الهاتف"
              : "Phone Number"
            }

            className="w-full border p-4 rounded-xl"

          />







          <textarea

            name="address"

            value={form.address}

            onChange={handleChange}

            placeholder={
              language === "ar"
              ? "العنوان الكامل"
              : "Full Address"
            }

            className="w-full border p-4 rounded-xl h-32"

          />







          <select className="w-full border p-4 rounded-xl">

            <option>

              {
                language === "ar"
                ? "الدفع عند الاستلام"
                : "Cash On Delivery"
              }

            </option>

            <option>

              {
                language === "ar"
                ? "بطاقة بنكية"
                : "Bank Card"
              }

            </option>

          </select>







          <button

            onClick={handleSubmit}

            className="
            w-full
            bg-green-700
            hover:bg-green-800
            text-white
            py-4
            rounded-xl
            text-xl
            "

          >

            {
              language === "ar"
              ? "تأكيد الطلب ✅"
              : "Confirm Order ✅"
            }

          </button>



        </div>

      </div>

    </div>

  );

}