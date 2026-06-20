import React from "react";
import { useLanguage } from "../context/LanguageContext";


export default function Footer() {


  const {
    language
  } = useLanguage();



  return (

    <footer

      dir={language === "ar" ? "rtl" : "ltr"}

      className="bg-amber-950 text-white mt-16"

    >



      <div className="max-w-7xl mx-auto px-8 py-10 grid md:grid-cols-3 gap-8">



        <div>


          <h3 className="text-2xl font-bold mb-4">

            🪵 Think & Craft

          </h3>



          <p className="text-amber-100">


            {

              language === "ar"

              ? "منصة النجارة والحرف اليدوية لتعلم المهارات وصناعة الإبداع."

              : "A woodworking and crafts platform to learn skills and create amazing things."

            }


          </p>


        </div>





        <div>


          <h3 className="text-xl font-bold mb-4">


            {

              language === "ar"

              ? "روابط مهمة"

              : "Important Links"

            }


          </h3>



          <p>

            {
              language === "ar"
              ? "الدورات"
              : "Courses"
            }

          </p>



          <p>

            {
              language === "ar"
              ? "المتجر"
              : "Store"
            }

          </p>



          <p>

            {
              language === "ar"
              ? "المجتمع"
              : "Community"
            }

          </p>


        </div>





        <div>


          <h3 className="text-xl font-bold mb-4">


            {

              language === "ar"

              ? "تواصل معنا"

              : "Contact Us"

            }


          </h3>




          <p>

            {
              language === "ar"
              ? "البريد الإلكتروني"
              : "Email"
            }

          </p>




          <p>

            © 2026 Think & Craft

          </p>



        </div>



      </div>


    </footer>

  );

}