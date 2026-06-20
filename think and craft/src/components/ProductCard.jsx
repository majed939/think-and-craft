import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";


export default function ProductCard({
  product
}) {


  const {
    addToCart
  } = useCart();



  const {
    language
  } = useLanguage();



  const [favorite, setFavorite] = useState(false);



  return (

    <div className="
      bg-white
      rounded-xl
      shadow-lg
      overflow-hidden
      border
      hover:shadow-2xl
      transition
      duration-300
    ">



      <div className="
        relative
        h-48
        flex
        items-center
        justify-center
        bg-white
      ">


        <img

          src={product.image}

          alt={
            language === "ar"
            ? product.nameAr
            : product.nameEn
          }

          className="
          w-full
          h-full
          object-contain
          p-4
          "

        />



        <button

          onClick={() => setFavorite(!favorite)}

          className="
          absolute
          top-3
          right-3
          bg-white
          rounded-full
          w-10
          h-10
          shadow
          text-xl
          "

        >

          {favorite ? "❤️" : "🤍"}

        </button>



      </div>






      <div className="p-6">



        <p className="text-sm text-amber-700 mb-2">

          {
            language === "ar"
            ? product.category
            : product.category
          }

        </p>





        <h2 className="
        text-2xl
        font-bold
        text-amber-900
        ">

          {
            language === "ar"
            ? product.nameAr
            : product.nameEn
          }

        </h2>






        <p className="text-gray-600 mt-3">

          {
            language === "ar"

            ? "منتج عالي الجودة مناسب لمشاريع النجارة والحرف."

            : "High quality product suitable for woodworking projects."

          }

        </p>







        <div className="
        flex
        justify-between
        items-center
        mt-4
        ">


          <p className="text-xl font-bold">

            {product.price}

            {" "}

            {
              language === "ar"
              ? "ر.ق"
              : "QAR"
            }

          </p>





          <span className="text-yellow-500">

            ⭐ 4.8

          </span>



        </div>









        <button

          onClick={() => addToCart(product)}

          className="
          mt-5
          w-full
          bg-amber-800
          hover:bg-amber-900
          text-white
          py-3
          rounded-lg
          transition
          "

        >

          🛒

          {" "}

          {
            language === "ar"
            ? "أضف للسلة"
            : "Add to Cart"
          }


        </button>




      </div>



    </div>

  );

}