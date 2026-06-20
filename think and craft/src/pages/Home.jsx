import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";


export default function Home() {


  const {
    language
  } = useLanguage();



  return (

    <div dir={language === "ar" ? "rtl" : "ltr"}>


      <section className="bg-amber-100 py-20">


        <div className="max-w-6xl mx-auto px-8 text-center">


          <h1 className="text-5xl font-bold text-amber-900">

            Think & Craft

          </h1>



          <h2 className="text-3xl font-bold mt-6">

            {
              language === "ar"
              ? "اصنع شيئاً بيديك"
              : "Create Something With Your Hands"
            }

          </h2>



          <p className="mt-6 text-xl text-gray-700">


            {
              language === "ar"
              ? "منصة النجارة والحرف اليدوية لتعلم المهارات وشراء الأدوات ومشاركة إبداعاتك."
              : "A woodworking and crafts platform to learn skills, buy tools, and share your creations."
            }


          </p>




          <div className="flex justify-center gap-5 mt-10">


            <Link
              to="/courses"
              className="bg-amber-800 text-white px-8 py-3 rounded-lg"
            >

              {
                language === "ar"
                ? "تعلم النجارة"
                : "Learn Woodworking"
              }

            </Link>




            <Link
              to="/store"
              className="bg-yellow-600 text-white px-8 py-3 rounded-lg"
            >

              {
                language === "ar"
                ? "متجر الأخشاب"
                : "Wood Store"
              }

            </Link>


          </div>


        </div>


      </section>



      <section className="py-16 px-8">


        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">

          {
            language === "ar"
            ? "ماذا نقدم؟"
            : "What We Offer?"
          }

        </h2>



        <div className="grid md:grid-cols-3 gap-8">


          <div className="bg-white shadow-xl rounded-xl p-8 text-center">

            <h3 className="text-2xl font-bold">

              🪚 {language === "ar" ? "الدورات" : "Courses"}

            </h3>

          </div>



          <div className="bg-white shadow-xl rounded-xl p-8 text-center">

            <h3 className="text-2xl font-bold">

              🪵 {language === "ar" ? "المتجر" : "Store"}

            </h3>

          </div>



          <div className="bg-white shadow-xl rounded-xl p-8 text-center">

            <h3 className="text-2xl font-bold">

              👥 {language === "ar" ? "المجتمع" : "Community"}

            </h3>

          </div>


        </div>


      </section>


    </div>

  );

}