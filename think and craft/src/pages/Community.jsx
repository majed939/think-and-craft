import React from "react";
import { useLanguage } from "../context/LanguageContext";


export default function Community() {


  const {
    language
  } = useLanguage();



  const projects = [

    {
      id: 1,

      titleAr: "طاولة خشبية يدوية",
      titleEn: "Handmade Wooden Table",

      descriptionAr:
        "مشروع صناعة طاولة من خشب البلوط.",

      descriptionEn:
        "A project to build an oak wooden table."
    },


    {
      id: 2,

      titleAr: "كرسي كلاسيكي",
      titleEn: "Classic Chair",

      descriptionAr:
        "تصميم كرسي بأسلوب حرفي تقليدي.",

      descriptionEn:
        "A chair design with traditional craftsmanship."
    },


    {
      id: 3,

      titleAr: "رفوف خشبية",
      titleEn: "Wooden Shelves",

      descriptionAr:
        "أرفف منزلية مصنوعة يدوياً.",

      descriptionEn:
        "Handmade wooden home shelves."
    }

  ];



  return (

    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="bg-amber-50 min-h-screen py-12 px-8"
    >



      <h1 className="text-5xl font-bold text-center text-amber-900 mb-5">

        {
          language === "ar"
          ? "مجتمع الحرفيين"
          : "Craftsmen Community"
        }

      </h1>



      <p className="text-center text-gray-600 text-lg mb-12">

        {
          language === "ar"
          ? "شارك مشاريعك واكتشف إبداعات الآخرين."
          : "Share your projects and discover others' creations."
        }

      </p>




      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">


        {
          projects.map((project)=>(


            <div

              key={project.id}

              className="bg-white rounded-xl shadow-lg p-6 border"

            >


              <div className="text-6xl text-center">
                🪵
              </div>



              <h2 className="text-2xl font-bold text-amber-900 mt-5">


                {
                  language === "ar"
                  ? project.titleAr
                  : project.titleEn
                }


              </h2>



              <p className="mt-4 text-gray-600">


                {
                  language === "ar"
                  ? project.descriptionAr
                  : project.descriptionEn
                }


              </p>



              <button

                className="mt-6 bg-amber-800 text-white px-6 py-2 rounded-lg"

              >

                {
                  language === "ar"
                  ? "مشاهدة المشروع"
                  : "View Project"
                }


              </button>



            </div>


          ))
        }


      </div>



    </div>

  );

}