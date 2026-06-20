import React from "react";
import { useLanguage } from "../context/LanguageContext";


export default function Blog() {


  const {
    language
  } = useLanguage();



  const articles = [

    {
      id: 1,

      titleAr: "كيف تبدأ تعلم النجارة؟",
      titleEn: "How to Start Learning Woodworking?",

      descriptionAr:
        "دليل للمبتدئين لمعرفة الأدوات الأساسية وأول خطوات العمل بالخشب.",

      descriptionEn:
        "A beginner guide to learn basic tools and first woodworking steps."

    },


    {
      id: 2,

      titleAr: "اختيار الخشب المناسب للمشروع",
      titleEn: "Choosing The Right Wood For Your Project",

      descriptionAr:
        "تعرف على الفرق بين أنواع الأخشاب وكيف تختار النوع الأفضل.",

      descriptionEn:
        "Learn the differences between woods and choose the best one."

    },


    {
      id: 3,

      titleAr: "أخطاء يجب تجنبها في النجارة",
      titleEn: "Woodworking Mistakes To Avoid",

      descriptionAr:
        "أهم الأخطاء التي يقع فيها المبتدئون وكيف تتجنبها.",

      descriptionEn:
        "Common beginner mistakes and how to avoid them."

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
          ? "مدونة النجارة"
          : "Woodworking Blog"
        }

      </h1>



      <p className="text-center text-gray-600 text-lg mb-12">

        {
          language === "ar"
          ? "تعلم نصائح وتقنيات جديدة في عالم الحرف اليدوية."
          : "Learn new tips and techniques in the world of crafts."
        }

      </p>




      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">


        {
          articles.map((article)=>(


            <div

              key={article.id}

              className="bg-white rounded-xl shadow-lg p-8 border"

            >


              <div className="text-6xl text-center">
                📖
              </div>



              <h2 className="text-2xl font-bold text-amber-900 mt-5">


                {
                  language === "ar"
                  ? article.titleAr
                  : article.titleEn
                }


              </h2>



              <p className="mt-4 text-gray-600">


                {
                  language === "ar"
                  ? article.descriptionAr
                  : article.descriptionEn
                }


              </p>



              <button

                className="mt-6 bg-amber-800 text-white px-6 py-2 rounded-lg"

              >

                {
                  language === "ar"
                  ? "قراءة المزيد"
                  : "Read More"
                }


              </button>



            </div>


          ))
        }


      </div>



    </div>

  );

}