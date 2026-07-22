import { Link } from "react-router-dom";


const categories = [

  {
    title: "Wall Decor",
    description: "Elegant paintings, frames & artistic pieces",
    image:
      "https://images.unsplash.com/photo-1583845112203-454c7c5e1e1c"
  },


  {
    title: "Luxury Lamps",
    description: "Handcrafted lamps for warm interiors",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c"
  },


  {
    title: "Handmade Vases",
    description: "Unique ceramic and clay creations",
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c"
  },


  {
    title: "Macrame Decor",
    description: "Bohemian handmade wall hangings",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0"
  },


  {
    title: "Candle Holders",
    description: "Beautiful festive home accents",
    image:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59"
  },


  {
    title: "Wooden Crafts",
    description: "Traditional wooden masterpieces",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2"
  }

];



export default function Categories(){


return (

<section className="
px-6 md:px-10
py-16
bg-[#fffaf3]
">


<div className="
max-w-7xl
mx-auto
">


<div className="mb-10">


<p className="
text-[#b8860b]
font-semibold
tracking-widest
text-sm
">

SHOP BY CATEGORY

</p>



<h2 className="
text-4xl
font-bold
text-[#4b2e20]
mt-3
">

Explore Handmade Collections

</h2>



<p className="
text-gray-600
mt-3
max-w-2xl
">



</p>


</div>
Browse timeless handcrafted collections created by talented artisans,
bringing warmth, elegance and authenticity to every home.




<div className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-3
gap-8
">



{
categories.map((category,index)=>(


<Link

to="/products"

key={index}

className="
group
bg-white
rounded-[30px]
overflow-hidden
shadow-md
hover:shadow-2xl
transition
duration-500
"


>


<div className="
relative
overflow-hidden
">


<img

src={category.image}

alt={category.title}

className="
h-64
w-full
object-cover
group-hover:scale-110
transition
duration-700
"

/>



<div className="
absolute
inset-0
bg-black/10
group-hover:bg-black/20
transition
">

</div>


</div>





<div className="
p-6
">


<h3 className="
text-2xl
font-bold
text-[#4b2e20]
">

{category.title}

</h3>



<p className="
text-gray-500
mt-2
">

{category.description}

</p>



<div className="
mt-5
text-[#b8860b]
font-semibold
">

View Collection →

</div>


</div>



</Link>


))

}



</div>


</div>


</section>


)

}