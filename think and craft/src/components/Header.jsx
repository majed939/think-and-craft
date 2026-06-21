import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";


export default function Header() {


const { language, changeLanguage } = useLanguage();

const { user, logout } = useAuth();

const { cartCount } = useCart();


const [menuOpen,setMenuOpen] = useState(false);

const [logoutModal,setLogoutModal] = useState(false);



const goTop = () => {
window.scrollTo(0,0);
};



const links = [

{path:"/",ar:"الرئيسية",en:"Home"},
{path:"/store",ar:"المتجر",en:"Store"},
{path:"/courses",ar:"الدورات",en:"Courses"},
{path:"/community",ar:"المجتمع",en:"Community"},
{path:"/orders",ar:"طلباتي",en:"Orders"}

];



return (

<>


<header className="
bg-amber-900
text-white
shadow-xl
sticky
top-0
z-50
">


<div className="
max-w-7xl
mx-auto
px-4
py-3
flex
items-center
justify-between
">


<Link
to="/"
onClick={goTop}
className="
text-xl
md:text-3xl
font-bold
whitespace-nowrap
"
>
🪵 Think & Craft
</Link>



{/* كمبيوتر */}

<nav className="
hidden
md:flex
items-center
gap-5
">


{
links.map(item=>(

<Link
key={item.path}
to={item.path}
onClick={goTop}
className="hover:text-yellow-400"
>

{
language==="ar"
?item.ar
:item.en
}

</Link>

))
}


<Link to="/favorites">
❤️ {language==="ar"?"المفضلة":"Favorites"}
</Link>


<Link 
to="/cart"
className="relative"
>

🛒 {language==="ar"?"السلة":"Cart"}

{
cartCount > 0 &&

<span className="
absolute
-top-3
-right-3
bg-red-600
rounded-full
w-5
h-5
text-xs
flex
items-center
justify-center
">

{cartCount}

</span>

}

</Link>


</nav>




<div className="flex items-center gap-2">


<button
onClick={changeLanguage}
className="
bg-yellow-500
text-black
px-3
py-2
rounded-lg
"
>

{
language==="ar"
?"EN"
:"عربي"
}

</button>




<button

onClick={()=>setMenuOpen(!menuOpen)}

className="
md:hidden
text-3xl
"

>

☰

</button>


</div>



</div>




{/* الجوال */}

{

menuOpen &&

<div className="
md:hidden
bg-amber-800
p-5
space-y-4
">


{
links.map(item=>(

<Link

key={item.path}

to={item.path}

onClick={()=>{

setMenuOpen(false);
goTop();

}}

className="block"

>

{
language==="ar"
?item.ar
:item.en
}

</Link>

))

}



<Link to="/favorites">
❤️ {language==="ar"?"المفضلة":"Favorites"}
</Link>



<Link to="/cart">

🛒 {language==="ar"?"السلة":"Cart"}

{
cartCount>0 &&
<span className="ml-2 bg-red-600 px-2 rounded-full">
{cartCount}
</span>
}

</Link>


</div>

}


</header>



</>

);

}
