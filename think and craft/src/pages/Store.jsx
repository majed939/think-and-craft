import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { useLanguage } from "../context/LanguageContext";


export default function Store() {


  const { addToCart } = useCart();

  const { language } = useLanguage();



  const [search, setSearch] = useState("");

  const [showSearch, setShowSearch] = useState(true);

  const [category, setCategory] = useState("all");

  const [scrolled, setScrolled] = useState(false);




  useEffect(()=>{

    const handleScroll = ()=>{

      setScrolled(window.scrollY > 300);

    };


    window.addEventListener("scroll", handleScroll);


    return ()=>{

      window.removeEventListener("scroll", handleScroll);

    };


  },[]);





  const normalize = (text)=>{

    return text
    .toLowerCase()
    .replaceAll("أ","ا")
    .replaceAll("إ","ا")
    .replaceAll("آ","ا")
    .replaceAll("ة","ه")
    .replaceAll("ى","ي")
    .replaceAll(" ","");

  };






  const filteredProducts = products.filter((product)=>{


    const searchText = normalize(search);



    const arabicName = normalize(product.nameAr || "");

    const englishName = normalize(product.nameEn || "");



    const matchSearch =

    arabicName.includes(searchText) ||

    englishName.includes(searchText);





    const matchCategory =

    category === "all" ||

    product.category === category;



    return matchSearch && matchCategory;


  });







return (

<div className="p-10 bg-amber-50 min-h-screen">





<h1 className="text-4xl font-bold text-amber-900 mb-8">

{
language === "ar"
? "المتجر"
: "Store"
}

</h1>







{
showSearch &&

<div className="sticky top-20 bg-white z-30 p-4 shadow rounded-lg mb-6">


<input

type="text"

placeholder={
language === "ar"
? "ابحث عن منتج..."
: "Search product..."
}

value={search}

onChange={(e)=>setSearch(e.target.value)}

className="border p-3 rounded-lg w-full"

/>


</div>

}







<div className="flex gap-3 flex-wrap mb-8">



{[
["all","الكل","All"],
["wood","أخشاب","Wood"],
["tools","أدوات","Tools"],
["electric","كهربائيات","Electric"],
["hardware","قطع تثبيت","Hardware"],
["finishing","تشطيب","Finishing"],
["safety","سلامة","Safety"]
].map((item)=>(


<button

key={item[0]}

onClick={()=>setCategory(item[0])}

className="
bg-amber-800
text-white
px-4
py-2
rounded
"

>

{
language==="ar"
? item[1]
: item[2]
}


</button>


))}



</div>










<div className="grid md:grid-cols-3 gap-6">



{

filteredProducts.map((product)=>(



<Link

key={product.id}

to={`/product/${product.id}`}

className="
border
rounded-xl
p-5
shadow
hover:shadow-xl
transition
bg-white
"



>






<div className="
h-44
flex
items-center
justify-center
bg-white
rounded-xl
mb-4
">


<img

src={product.image}

alt={
language==="ar"
?product.nameAr
:product.nameEn
}

className="
w-full
h-full
object-contain
p-3
"

/>


</div>









<h2 className="text-xl font-bold text-amber-900">

{
language==="ar"
?product.nameAr
:product.nameEn
}

</h2>







<p className="mt-3">

{
language==="ar"
? `السعر: ${product.price} ر.ق`
: `Price: ${product.price} QAR`
}

</p>







<p className="text-gray-500 mt-2">

{product.category}

</p>








<button

onClick={(e)=>{

e.preventDefault();

addToCart(product);

}}

className="
mt-5
bg-green-700
text-white
px-5
py-2
rounded-lg
w-full
"

>


🛒

{
language==="ar"
?"أضف إلى السلة"
:"Add to Cart"
}


</button>






</Link>


))


}



</div>









{

scrolled &&


<button

onClick={()=>setShowSearch(!showSearch)}

className="
fixed
bottom-5
right-5
bg-amber-800
text-white
px-5
py-3
rounded-full
shadow-lg
z-50
"

>

{
showSearch

?

language==="ar"
?"إخفاء البحث"
:"Hide Search"

:

language==="ar"
?"إظهار البحث"
:"Show Search"

}

</button>


}




</div>


);


}