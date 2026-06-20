import React, { useState } from "react";
import CourseCard from "../components/CourseCard";
import VideoPopup from "../components/VideoPopup";
import { useLanguage } from "../context/LanguageContext";


export default function Courses() {


  const {
    language
  } = useLanguage();



  const [selectedVideo, setSelectedVideo] = useState(null);



  const courses = [

    {
      id: 1,
      titleAr: "أساسيات النجارة",
      titleEn: "Woodworking Basics",

      descriptionAr:
        "تعلم الأدوات الأساسية وطريقة التعامل مع الخشب.",

      descriptionEn:
        "Learn basic tools and how to work with wood.",

      video: "/videos/basics.mp4"
    },


    {
      id: 2,
      titleAr: "تصميم الأثاث",
      titleEn: "Furniture Design",

      descriptionAr:
        "تعلم تصميم وصناعة قطع أثاث خشبية.",

      descriptionEn:
        "Learn to design and build wooden furniture.",

      video: "/videos/design.mp4"
    },


    {
      id: 3,
      titleAr: "احتراف النجارة",
      titleEn: "Professional Woodworking",

      descriptionAr:
        "انتقل لمستوى متقدم في صناعة المشاريع.",

      descriptionEn:
        "Move to advanced woodworking projects.",

      video: "/videos/pro.mp4"
    }

  ];



  return (

    <div
      dir={language === "ar" ? "rtl" : "ltr"}
      className="bg-amber-50 min-h-screen py-12 px-8"
    >


      <h1 className="text-5xl font-bold text-center text-amber-900 mb-4">

        {
          language === "ar"
          ? "دورات النجارة"
          : "Woodworking Courses"
        }

      </h1>



      <p className="text-center text-gray-600 text-lg mb-12">

        {
          language === "ar"
          ? "تعلم المهارات خطوة بخطوة مع Think & Craft."
          : "Learn skills step by step with Think & Craft."
        }

      </p>



      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">


        {
          courses.map((course)=>(

            <CourseCard

              key={course.id}

              course={{
                ...course,

                title:
                  language === "ar"
                  ? course.titleAr
                  : course.titleEn,


                description:
                  language === "ar"
                  ? course.descriptionAr
                  : course.descriptionEn

              }}

              onWatch={() =>
                setSelectedVideo(course.video)
              }

            />

          ))
        }


      </div>



      {
        selectedVideo && (

          <VideoPopup

            videoSrc={selectedVideo}

            onClose={() =>
              setSelectedVideo(null)
            }

          />

        )
      }


    </div>

  );

}