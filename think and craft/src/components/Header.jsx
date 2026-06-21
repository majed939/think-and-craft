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
sticky
top-0
z-40
">


<div className="
max-w-7xl
mx-auto
px-3
md:px-6
py-3
flex
justify-between
items-center
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
flex
items-center
gap-5
whitespace-nowrap
text-sm
md:text-base
flex-1
justify-start
md:justify-center
overflow-x-auto
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

onClick={goTop}

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
-top-3
-right-3
bg-red-600
rounded-full
text-xs
w-5
h-5
flex
items-center
justify-center
"

>

{cartCount}

</span>

}


</Link>


</nav>
<div className="flex items-center gap-2 whitespace-nowrap shrink-0">


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




{
user ?

<>


<Link

to="/profile"

onClick={goTop}

className="
hidden
lg:flex
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

onClick={goTop}

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

onClick={goTop}

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


</div>


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
shadow-2xl
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
