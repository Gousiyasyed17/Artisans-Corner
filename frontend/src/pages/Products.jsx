import { Search, SlidersHorizontal, Star } from "lucide-react";


const products = [

{
name:"Royal Wooden Table Lamp",
price:"₹2499",
rating:"4.8",
style:"Vintage",
image:
"https://images.unsplash.com/photo-1513506003901-1e6a229e2d15"
},


{
name:"Hand Painted Wall Frame",
price:"₹1799",
rating:"4.7",
style:"Traditional",
image:
"https://images.unsplash.com/photo-1577083552431-6e5fd01988c5"
},


{
name:"Ceramic Designer Vase",
price:"₹999",
rating:"4.9",
style:"Modern",
image:
"https://images.unsplash.com/photo-1581783342308-f792dbdd27c5"
},


{
name:"Boho Macrame Hanging",
price:"₹799",
rating:"4.6",
style:"Bohemian",
image:
"https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
},


{
name:"Luxury Candle Holder",
price:"₹699",
rating:"4.5",
style:"Festive",
image:
"https://images.unsplash.com/photo-1603006905003-be475563bc59"
},


{
name:"Handcrafted Wooden Sculpture",
price:"₹2999",
rating:"4.8",
style:"Traditional",
image:
"https://images.unsplash.com/photo-1595428774223-ef52624120d2"
}


];



export default function Products(){


return(

<section className="
min-h-screen
bg-[#fffaf3]
px-6 md:px-10
py-10
">


{/* HEADER */}

<div className="
max-w-7xl
mx-auto
">


<h1 className="
text-4xl
font-bold
text-[#4b2e20]
">

Handmade Decoration Collection

</h1>


<p className="
text-gray-600
mt-3
">

Explore unique home decor products crafted by artisans.

</p>





{/* SEARCH */}


<div className="
mt-8
bg-white
rounded-full
shadow
flex
items-center
px-6
py-4
max-w-3xl
">


<Search
className="text-gray-400"
/>


<input

placeholder="Search lamps, wall decor, vases..."

className="
ml-4
outline-none
w-full
"

/>


</div>





<div className="
grid
lg:grid-cols-4
gap-8
mt-12
">



{/* FILTER */}


<aside className="
bg-white
rounded-3xl
p-6
h-fit
shadow
">


<div className="
flex
items-center
gap-2
font-bold
text-xl
text-[#4b2e20]
">

<SlidersHorizontal/>

Filters

</div>



<hr className="my-5"/>



<h3 className="font-semibold">
Price
</h3>


<div className="
mt-3
space-y-2
text-gray-600
">

<p>☐ Under ₹1000</p>

<p>☐ ₹1000 - ₹2000</p>

<p>☐ Above ₹2000</p>

</div>




<h3 className="
font-semibold
mt-6
">

Rating

</h3>


<div className="mt-3 text-gray-600">

<p>☐ 4★ & above</p>

<p>☐ 3★ & above</p>

</div>





<h3 className="
font-semibold
mt-6
">

Style

</h3>


<div className="
mt-3
space-y-2
text-gray-600
">

<p>☐ Vintage</p>

<p>☐ Traditional</p>

<p>☐ Modern</p>

<p>☐ Bohemian</p>

</div>



</aside>







{/* PRODUCTS */}


<div className="
lg:col-span-3
grid
sm:grid-cols-2
xl:grid-cols-3
gap-8
">



{
products.map((item,index)=>(


<div

key={index}

className="
bg-white
rounded-3xl
overflow-hidden
shadow-md
hover:shadow-xl
transition
"


>


<img

src={item.image}

className="
h-64
w-full
object-cover
"

/>



<div className="p-5">


<h2 className="
text-xl
font-bold
text-[#4b2e20]
">

{item.name}

</h2>



<div className="
flex
justify-between
mt-3
">


<p className="
text-[#b8860b]
font-bold
">

{item.price}

</p>



<div className="
flex
items-center
gap-1
">

<Star
size={18}
className="fill-yellow-500 text-yellow-500"
/>

{item.rating}

</div>


</div>




<span className="
inline-block
mt-4
bg-[#f3eadc]
px-4
py-2
rounded-full
text-sm
">

{item.style}

</span>



<button className="
mt-5
w-full
bg-[#4b2e20]
text-white
py-3
rounded-xl
">

Add To Cart

</button>


</div>


</div>


))

}


</div>



</div>


</div>


</section>

)

}