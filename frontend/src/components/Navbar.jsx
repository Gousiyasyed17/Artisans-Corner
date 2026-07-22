import {
Search,
ShoppingBag,
User
}
from "lucide-react"


export default function Navbar(){


return(

<nav className="
flex justify-between items-center
px-8 py-5
bg-[#fffaf3]
">


<h1 className="
text-3xl font-bold
text-[#4b2e20]
">

Artisan

<span className="text-[#b8860b]">
Corner
</span>

</h1>



<div className="
hidden md:flex gap-8
text-[#4b2e20]
font-medium
">

<p>Home</p>
<p>Explore</p>
<p>Categories</p>
<p>Sell</p>
<p>About</p>

</div>




<div className="
flex gap-5
">

<Search/>
<ShoppingBag/>
<User/>

</div>


</nav>

)

}