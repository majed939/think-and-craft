import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useLanguage } from "../context/LanguageContext";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";


export default function Header() {


const {
language,
changeLanguage
} = useLanguage();


const {
user,
logout
} = useAuth();


const {
cartCount
} = useCart();


const [menuOpen,setMenuOpen] = useState(false);
const [logoutModal,setLogoutModal] = useState(false);



const goTop = () => {
window.scrollTo(0,0);
};



const links = [

{
path:"/",
ar:"الرئيسية",
en:"Home"
},

{
path:"/store",
ar:"المتجر",
en:"Store"
},

{
path:"/courses",
ar:"الدورات",
en:"Courses"
},

{
path:"/community",
ar:"المجتمع",
en:"Community"
},

{
path:"/orders",
ar:"طلباتي",
en:"Orders"
}

];



return (

<>


<header className="
bg-amber-900
text-white
shadow-xl
fixed
top-0
left-0
w-full
z-50
">

<div className="
max-w-7xl
mx-auto
px-3
md:px-6
py-3
flex
items-center
justify-between
gap-4
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



<nav className="
hidden
md:flex
items-center
gap-5
whitespace-nowrap
flex-1
justify-center
">


{
links.map((item)=>(

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



<Link
to="/favorites"
className="hover:text-yellow-400"
>

❤️ {language==="ar"?"المفضلة":"Favorites"}

</Link>



<Link

to="/cart"

onClick={goTop}

className="
relative
hover:text-yellow-400
"
>

🛒 {language==="ar"?"السلة":"Cart"}


{
cartCount > 0 &&

<span

className="
absolute
-top-2
-right-2
bg-red-600
rounded-full
w-5
h-5
text-xs
flex
items-center
justify-center
font-bold
"

>

{cartCount}

</span>

}


</Link>



</nav>


<div className="
flex
items-center
gap-2
whitespace-nowrap
">


<button

onClick={changeLanguage}

className="
bg-yellow-500
text-black
px-3
py-2
rounded-lg
font-bold
"

>

{
language==="ar"
?"EN"
:"عربي"
}

</button>
<div className="flex items-center gap-2">

{
user ?

<>

<Link

to="/profile"

onClick={goTop}

className="
flex
items-center
gap-2
bg-white/10
px-4
py-2
rounded-lg
"

>

👤 {language==="ar"?"حسابي":"My Account"}

</Link>



<button

onClick={()=>setLogoutModal(true)}

className="
bg-red-600
px-4
py-2
rounded-lg
"

>

{
language==="ar"
?"خروج"
:"Logout"
}

</button>


</>


:

<>

<Link

to="/login"

className="
bg-white
text-amber-900
px-4
py-2
rounded-lg
"

>

{
language==="ar"
?"دخول"
:"Login"
}

</Link>



<Link

to="/register"

className="
bg-yellow-500
text-black
px-4
py-2
rounded-lg
"

>

{
language==="ar"
?"حساب جديد"
:"Register"
}

</Link>


</>

}


</div>



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



{
menuOpen &&

<div className="
md:hidden
bg-amber-800
p-5
space-y-4
">


{
links.map((item)=>(

<Link

key={item.path}

to={item.path}

onClick={()=>setMenuOpen(false)}

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



<Link
to="/favorites"
onClick={()=>setMenuOpen(false)}
>

❤️ {language==="ar"?"المفضلة":"Favorites"}

</Link>



<Link
to="/cart"
onClick={()=>{
setMenuOpen(false);
goTop();
}}
>

🛒 {language==="ar"?"السلة":"Cart"}

{
cartCount > 0 &&

<span className="
bg-red-600
rounded-full
px-2
ml-2
">

{cartCount}

</span>

}

</Link>



{
user &&

<button

onClick={()=>setLogoutModal(true)}

className="
bg-red-600
px-4
py-2
rounded-lg
"

>

{
language==="ar"
?"خروج"
:"Logout"
}

</button>

}


</div>

}


</header>



{
logoutModal &&

<div className="
fixed
inset-0
bg-black/60
flex
items-center
justify-center
z-50
">


<div className="
bg-white
rounded-2xl
p-6
w-96
text-center
">


<h2 className="
text-2xl
font-bold
text-gray-800
mb-3
">

{
language==="ar"
?"تسجيل الخروج"
:"Logout"
}

</h2>



<p className="text-gray-600 mb-6">

{
language==="ar"
?"هل أنت متأكد أنك تريد تسجيل الخروج؟"
:"Are you sure you want to logout?"
}

</p>



<div className="flex gap-3">


<button

onClick={()=>setLogoutModal(false)}

className="
flex-1
bg-gray-300
py-3
rounded-lg
"

>

{
language==="ar"
?"إلغاء"
:"Cancel"
}

</button>



<button

onClick={()=>{

logout();

setLogoutModal(false);

}}

className="
flex-1
bg-red-600
text-white
py-3
rounded-lg
"

>

{
language==="ar"
?"خروج"
:"Logout"
}

</button>


</div>


</div>


</div>

}


</>

);

}
