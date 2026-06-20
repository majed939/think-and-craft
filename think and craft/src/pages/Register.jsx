import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase/config";
import { useLanguage } from "../context/LanguageContext";

export default function Register() {

  const { language } = useLanguage();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {

    e.preventDefault();

    setMessage("");
    setError("");

    try {

      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setMessage(
        language === "ar"
          ? "تم إنشاء الحساب بنجاح"
          : "Account created successfully"
      );

      setTimeout(() => {
        navigate("/");
      }, 1200);

    } catch (err) {

      if (err.code === "auth/email-already-in-use") {

        setError(
          language === "ar"
            ? "هذا البريد الإلكتروني مستخدم بالفعل"
            : "This email is already registered"
        );

      } else if (err.code === "auth/weak-password") {

        setError(
          language === "ar"
            ? "كلمة المرور يجب أن تكون 6 أحرف أو أكثر"
            : "Password must be at least 6 characters"
        );

      } else if (err.code === "auth/invalid-email") {

        setError(
          language === "ar"
            ? "البريد الإلكتروني غير صحيح"
            : "Invalid email address"
        );

      } else {

        setError(
          language === "ar"
            ? "حدث خطأ أثناء إنشاء الحساب"
            : "Failed to create account"
        );

      }

    }

  };

  return (

    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="flex justify-center items-center min-h-screen bg-amber-50 px-4"
    >

      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >

        <h2 className="text-3xl font-bold text-amber-900 text-center mb-6">

          {
            language === "ar"
              ? "إنشاء حساب"
              : "Create Account"
          }

        </h2>

        {
          message && (

            <div className="bg-green-100 border border-green-300 text-green-700 p-3 rounded-lg mb-4 text-center">

              {message}

            </div>

          )
        }

        {
          error && (

            <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg mb-4 text-center">

              {error}

            </div>

          )
        }

        <input
          type="email"
          placeholder={
            language === "ar"
              ? "البريد الإلكتروني"
              : "Email"
          }
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 w-full mb-3 rounded-lg"
        />

        <input
          type="password"
          placeholder={
            language === "ar"
              ? "كلمة المرور"
              : "Password"
          }
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 w-full mb-4 rounded-lg"
        />

        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white w-full py-3 rounded-lg font-bold"
        >

          {
            language === "ar"
              ? "إنشاء الحساب"
              : "Register"
          }

        </button>

      </form>

    </div>

  );

}