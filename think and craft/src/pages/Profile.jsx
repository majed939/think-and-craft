import React from "react";

import { useAuth } from "../context/AuthContext";
import { useLanguage } from "../context/LanguageContext";


export default function Profile() {


  const {
    user
  } = useAuth();



  const {
    language
  } = useLanguage();




  return (


    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-amber-50 flex justify-center items-center p-6"
    >



      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8 text-center">



        <div className="text-6xl mb-4">

          👤

        </div>




        <h1 className="text-3xl font-bold text-amber-900 mb-6">

          {
            language === "ar"
            ? "حسابي"
            : "My Account"
          }

        </h1>




        <div className="bg-gray-100 rounded-xl p-4 text-left">


          <p className="text-gray-500">

            {
              language === "ar"
              ? "البريد الإلكتروني"
              : "Email"
            }

          </p>



          <p className="font-bold text-gray-800">

            {user?.email}

          </p>


        </div>




        <div className="mt-4 bg-amber-100 rounded-xl p-4">


          <p className="font-bold text-amber-900">

            {
              language === "ar"
              ? "الطلبات"
              : "Orders"
            }

          </p>


          <p className="text-gray-600">

            {
              language === "ar"
              ? "لا توجد طلبات حالياً"
              : "No orders yet"
            }

          </p>


        </div>




        <div className="mt-4 bg-amber-100 rounded-xl p-4">


          <p className="font-bold text-amber-900">

            {
              language === "ar"
              ? "الدورات"
              : "Courses"
            }

          </p>


          <p className="text-gray-600">

            {
              language === "ar"
              ? "لا توجد دورات مسجلة"
              : "No courses yet"
            }

          </p>


        </div>




      </div>


    </div>


  );


}