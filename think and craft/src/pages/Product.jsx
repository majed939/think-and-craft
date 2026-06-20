import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";
import products from "../data/products";


export default function Product() {


  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const { language } = useLanguage();



  useEffect(() => {

    window.scrollTo(0,0);

  }, []);




  const product = products.find(
    (item)=> item.id === Number(id)
  );




  if(!product){

    return(

      <div className="p-10 text-center">

        <h1 className="text-3xl font-bold">

          {
            language==="ar"
            ? "المنتج غير موجود"
            : "Product Not Found"
          }

        </h1>

      </div>

    );

  }





return(

<div className="p-6 bg-amber-50 min-h-screen">



<button

onClick={()=>navigate(-1)}

className="
fixed
top-24
left-6
z-50
bg-gray-300
px-5
py-2
rounded-lg
shadow
"

>

{
language==="ar"
?"← رجوع"
:"← Back"
}

</button>





<div className="
max-w-6xl
mx-auto
pt-16
">


<div className="
bg-white
rounded-2xl
shadow-xl
p-8
grid
md:grid-cols-2
gap-10
items-center
">





<div className="bg-white flex justify-center">


<img

src={product.image}

alt={
language==="ar"
? product.nameAr
: (product.nameEn || product.nameAr)
}

className="
w-full
max-w-md
h-96
object-contain
"

/>


</div>








<div className="text-right">



<h1 className="
text-4xl
font-bold
text-amber-900
mb-5
">

{
language==="ar"
? product.nameAr
: (product.nameEn || product.nameAr)
}

</h1>





<p className="text-xl mb-4">

{
language==="ar"
?"السعر:"
:"Price:"
}

{" "}

{product.price}

{" "}

{
language==="ar"
?"ر.ق"
:"QAR"
}

</p>







<p className="text-gray-500 mb-5">

{
language==="ar"
?"القسم:"
:"Category:"
}

{" "}

{product.category}

</p>







<p className="
text-gray-700
leading-8
mb-6
">

{
language==="ar"

?

"منتج عالي الجودة مناسب لأعمال النجارة والمشاريع المنزلية والاحترافية."

:

"High quality product suitable for woodworking and professional projects."

}

</p>








<button

onClick={()=>addToCart(product)}

className="
bg-green-700
hover:bg-green-800
text-white
px-8
py-3
rounded-xl
"

>

{
language==="ar"
?"أضف إلى السلة 🛒"
:"Add To Cart 🛒"
}

</button>




</div>



</div>



</div>



</div>


);


}