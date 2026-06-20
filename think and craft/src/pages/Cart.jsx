import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";


export default function Cart() {


  const {

    cart,

    removeFromCart,

    increaseQuantity,

    decreaseQuantity,

    clearCart,

    totalPrice

  } = useCart();




  const {

    language

  } = useLanguage();





  return (


    <div

      dir={language === "ar" ? "rtl" : "ltr"}

      className="min-h-screen bg-amber-50 p-6"

    >



      <div className="max-w-5xl mx-auto">



        <h1 className="text-4xl font-bold text-amber-900 mb-8">

          🛒

          {
            language === "ar"
            ? "سلة المشتريات"
            : "Shopping Cart"
          }

        </h1>





        {
          cart.length === 0 ?


          (

            <div className="bg-white rounded-2xl shadow p-10 text-center">

              <p className="text-xl text-gray-600">

                {
                  language === "ar"
                  ? "السلة فارغة"
                  : "Your cart is empty"
                }

              </p>

            </div>

          )


          :


          (

            <>


              <div className="space-y-5">


                {

                  cart.map(item => (


                    <div

                      key={item.id}

                      className="
                      bg-white
                      rounded-2xl
                      shadow
                      p-5
                      flex
                      flex-col
                      md:flex-row
                      items-center
                      justify-between
                      gap-5
                      "

                    >




                      <div className="flex items-center gap-4">


                        <img

                          src={item.image}

                          alt={item.name}

                          className="
                          w-24
                          h-24
                          object-cover
                          rounded-xl
                          "

                        />



                        <div>


                          <h2 className="text-xl font-bold text-amber-900">

                            {item.name}

                          </h2>


                          <p className="text-gray-600">

                            {(item.price / 3.64).toFixed(2)} $

                            {" "}

                            {
                              language === "ar"
                              ? "ر.ق"
                              : "QAR"
                            }

                          </p>


                        </div>


                      </div>







                      <div className="flex items-center gap-3">


                        <button

                          onClick={() =>
                            decreaseQuantity(item.id)
                          }

                          className="
                          bg-gray-200
                          px-3
                          py-1
                          rounded
                          "

                        >

                          -

                        </button>




                        <span className="font-bold">

                          {item.quantity}

                        </span>





                        <button

                          onClick={() =>
                            increaseQuantity(item.id)
                          }

                          className="
                          bg-gray-200
                          px-3
                          py-1
                          rounded
                          "

                        >

                          +

                        </button>


                      </div>






                      <div className="font-bold">


                        {

                          ((item.price / 3.64) * item.quantity).toFixed(2)

                        }

                        {" "}

                        {
                          language === "ar"
                          ? "ر.ق"
                          : "QAR"
                        }


                      </div>







                      <button

                        onClick={() =>
                          removeFromCart(item.id)
                        }

                        className="
                        bg-red-600
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        "

                      >

                        {
                          language === "ar"
                          ? "حذف"
                          : "Remove"
                        }

                      </button>



                    </div>


                  ))

                }


              </div>







              <div className="bg-white rounded-2xl shadow p-6 mt-8">


                <h2 className="text-2xl font-bold text-amber-900">


                  {
                    language === "ar"
                    ? "الإجمالي"
                    : "Total"
                  }


                  :

                  {" "}

                  {(totalPrice / 3.64).toFixed(2)} $

                  {" "}

                  {
                    language === "ar"
                    ? "ر.ق"
                    : "QAR"
                  }


                </h2>
<Link
  to="/checkout"
  className="
  mt-5
  bg-green-700
  text-white
  px-8
  py-3
  rounded-xl
  w-full
  block
  text-center
  "
>
  {
    language === "ar"
    ? "إتمام الطلب"
    : "Checkout"
  }
</Link>







               




                <button

                  onClick={clearCart}

                  className="
                  mt-3
                  bg-gray-300
                  px-8
                  py-3
                  rounded-xl
                  w-full
                  "

                >

                  {
                    language === "ar"
                    ? "تفريغ السلة"
                    : "Clear Cart"
                  }


                </button>



              </div>




            </>

          )

        }



      </div>


    </div>


  );


}