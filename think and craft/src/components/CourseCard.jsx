import React from "react";
import { useLanguage } from "../context/LanguageContext";


export default function CourseCard({
  course,
  onWatch
}) {


  const {
    language
  } = useLanguage();



  return (

    <div className="bg-white rounded-xl shadow-lg p-6 border">


      <div className="text-5xl text-center">
        🪚
      </div>



      <h2 className="text-2xl font-bold text-amber-900 mt-5">

        {course.title}

      </h2>



      <p className="mt-4 text-gray-600">

        {course.description}

      </p>



      <button

        onClick={onWatch}

        className="mt-6 w-full bg-amber-800 text-white py-3 rounded-lg"

      >

        ▶ {

          language === "ar"

          ? "مشاهدة الدورة"

          : "Watch Course"

        }


      </button>



    </div>

  );

}