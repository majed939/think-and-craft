import React, { useState } from "react";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase/config";
import { useLanguage } from "../context/LanguageContext";

export default function Login() {

  const { language } = useLanguage();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    setMessage("");
    setError("");

    try {

      await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      setMessage(
        language === "ar"
          ? "تم تسجيل الدخول بنجاح"
          : "Login successful"
      );

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (err) {

      setError(
        language === "ar"
          ? "البريد الإلكتروني أو كلمة المرور غير صحيحة"
          : "Invalid email or password"
      );

    }

  };

  const resetPassword = async () => {

    setMessage("");
    setError("");

    if (!email) {

      setError(
        language === "ar"
          ? "اكتب البريد الإلكتروني أولاً"
          : "Enter your email first"
      );

      return;

    }

    try {

      await sendPasswordResetEmail(
        auth,
        email
      );

      setMessage(
        language === "ar"
          ? "تم إرسال رابط إعادة تعيين كلمة المرور"
          : "Password reset link sent"
      );

    } catch (err) {

      setError(
        language === "ar"
          ? "حدث خطأ أثناء إرسال الرابط"
          : "Failed to send reset link"
      );

    }

  };

  return (

    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="flex justify-center items-center min-h-screen bg-amber-50 px-4"
    >

      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md"
      >

        <h2 className="text-3xl font-bold text-amber-900 text-center mb-6">

          {
            language === "ar"
              ? "تسجيل الدخول"
              : "Login"
          }

        </h2>

        {message && (

          <div className="bg-green-100 border border-green-300 text-green-700 p-3 rounded-lg mb-4 text-center">

            {message}

          </div>

        )}

        {error && (

          <div className="bg-red-100 border border-red-300 text-red-700 p-3 rounded-lg mb-4 text-center">

            {error}

          </div>

        )}

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
          className="bg-amber-800 hover:bg-amber-900 text-white w-full py-3 rounded-lg font-bold"
        >

          {
            language === "ar"
              ? "دخول"
              : "Login"
          }

        </button>

        <button
          type="button"
          onClick={resetPassword}
          className="mt-4 text-blue-600 w-full text-center"
        >

          {
            language === "ar"
              ? "نسيت كلمة المرور؟"
              : "Forgot Password?"
          }

        </button>

      </form>

    </div>

  );

}