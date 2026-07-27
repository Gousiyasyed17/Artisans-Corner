import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById } from "../services/productService";
import { addToCart } from "../services/cartService";
import { addToWishlist } from "../services/wishlistService";
import {
  Heart,
  Share2,
  Star,
  Minus,
  Plus,
  Truck,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const handleAddToCart = async () => {
  try {
    await addToCart(product._id, quantity);

    alert("Product Added To Cart");
  } catch (error) {
  console.log(error);
  console.log(error.response);

  alert(error.response?.data?.message || error.message);
}
};
const handleBuyNow = async () => {
  try {
    await addToCart(product._id, quantity);
    navigate("/checkout");
  } catch (error) {
    console.log("Buy Now Error:", error);

    alert(
      error.response?.data?.message ||
      "Failed to continue with Buy Now"
    );
  }
};
const handleAddToWishlist = async () => {
  try {
    await addToWishlist(product._id);

    alert("Product Added To Wishlist");
  } catch (error) {
    console.log("Wishlist Error:", error);
    console.log(error.response);

    alert(
      error.response?.data?.message ||
        "Failed to add product to wishlist"
    );
  }
};
  useEffect(() => {
  const fetchProduct = async () => {
    try {
      const data = await getProductById(id);

      setProduct(data);

      if (data.images && data.images.length > 0) {
        setSelectedImage(data.images[0]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  fetchProduct();
}, [id]);
if (loading) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      Loading...
    </div>
  );
}

if (!product) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      Product Not Found
    </div>
  );
}

  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

        {/* LEFT */}

        <div>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

            <img
              src={selectedImage}
              alt="Product"
              className="w-full h-[600px] object-cover hover:scale-105 transition duration-500"
            />

          </div>

          {/* Thumbnails */}

          <div className="flex gap-4 mt-6">

            {product.images?.map((image, index) => (

              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`rounded-2xl overflow-hidden border-2 ${
                  selectedImage === image
                    ? "border-[#4B2E20]"
                    : "border-transparent"
                }`}
              >

                <img
                  src={image}
                  alt=""
                  className="w-24 h-24 object-cover"
                />

              </button>

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <span className="bg-[#4B2E20] text-white px-4 py-2 rounded-full">

            Handmade

          </span>

          <h1 className="text-5xl font-bold text-[#4B2E20] mt-6">

            {product.name}

          </h1>

          <p className="text-gray-500 mt-3">

            Product ID : {product._id}

          </p>

          {/* Rating */}

          <div className="flex items-center gap-2 mt-6">

            <div className="flex">

              {[1,2,3,4,5].map((star)=>(

                <Star
                  key={star}
                  size={20}
                  fill="#FFD700"
                  className="text-yellow-400"
                />

              ))}

            </div>

            <span className="font-semibold">

              {product.rating}

            </span>

            <span className="text-gray-500">

              ({product.numReviews || 0} Reviews)

            </span>

          </div>

          {/* Price */}

          <div className="mt-8">

            <div className="flex items-center gap-5">

              <span className="text-5xl font-bold text-[#4B2E20]">

                ₹{product.price}

              </span>

              <span className="text-2xl line-through text-gray-400">
                ₹{Math.round(product.price * 1.2)}
              </span>

              <span className="bg-green-100 text-green-700 px-3 py-2 rounded-full">
                20% OFF
              </span>

            </div>

          </div>

          {/* Description */}

          <p className="mt-8 text-gray-600 leading-8">
            {product.description}
          </p>

          {/* Stock */}

          <div className="mt-8">

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full">

              In Stock ({product.stock} Left)

            </span>

          </div>

          {/* Quantity */}

          <div className="mt-10">

            <h3 className="font-semibold mb-4">

              Quantity

            </h3>

            <div className="flex items-center gap-4">

              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
                className="w-12 h-12 rounded-xl bg-white shadow"
              >
                <Minus />
              </button>

              <span className="text-2xl font-bold">

                {quantity}

              </span>

              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-12 rounded-xl bg-white shadow"
              >
                <Plus />
              </button>

            </div>

          </div>

          {/* Buttons */}

          <div className="grid grid-cols-2 gap-4 mt-10">

            <button
              onClick={handleAddToCart}
              className="bg-[#4B2E20] text-white py-4 rounded-2xl hover:bg-[#6B4226]"
            >

              Add to Cart

            </button>

            <button
              onClick={handleBuyNow}
              className="bg-green-600 text-white py-4 rounded-2xl hover:bg-green-700"
            >
              Buy Now
            </button>

          </div>

          <div className="grid grid-cols-2 gap-4 mt-5">

            <button
              onClick={handleAddToWishlist}
              className="border py-4 rounded-2xl flex justify-center items-center gap-3 hover:bg-white"
            >
              <Heart size={20} />

              Wishlist
            </button>

            <button className="border py-4 rounded-2xl flex justify-center items-center gap-3 hover:bg-white">

              <Share2 size={20} />

              Share

            </button>

          </div>

          {/* Delivery */}

          <div className="bg-white rounded-3xl shadow mt-10 p-6 space-y-5">

            <div className="flex gap-4">

              <Truck className="text-[#4B2E20]" />

              <div>

                <h4 className="font-bold">

                  Free Delivery

                </h4>

                <p className="text-gray-500">

                  Delivery within 3-5 business days

                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <RotateCcw className="text-[#4B2E20]" />

              <div>

                <h4 className="font-bold">

                  Easy Returns

                </h4>

                <p className="text-gray-500">

                  7 Days Return Policy

                </p>

              </div>

            </div>

            <div className="flex gap-4">

              <ShieldCheck className="text-[#4B2E20]" />

              <div>

                <h4 className="font-bold">

                  Secure Payment

                </h4>

                <p className="text-gray-500">

                  100% Secure Transactions

                </p>

              </div>

            </div>

          </div>
          {/* Seller Information */}

<div className="bg-white rounded-3xl shadow-lg p-6 mt-10">

  <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
    Seller Information
  </h2>

  <div className="flex flex-col md:flex-row justify-between gap-6">

    <div className="flex items-center gap-5">

      <img
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300"
        alt="Seller"
        className="w-24 h-24 rounded-full object-cover border-4 border-[#4B2E20]"
      />

      <div>

        <h3 className="text-xl font-bold">
          {product.seller?.name}for 
        </h3>

        <p className="text-gray-500 mt-1">
          Verified Artisan
        </p>

        <div className="flex items-center gap-2 mt-2">

          <Star
            fill="#FFD700"
            className="text-yellow-400"
            size={18}
          />

          <span>4.9 Seller Rating</span>

        </div>

        <p className="text-sm text-gray-500 mt-2">
          1,248 Products Sold
        </p>

      </div>

    </div>

    <div className="flex flex-col gap-3">

      <button className="bg-[#4B2E20] text-white px-6 py-3 rounded-xl hover:bg-[#6B4226]">
        Visit Store
      </button>

      <button className="border border-[#4B2E20] text-[#4B2E20] px-6 py-3 rounded-xl hover:bg-[#FFF8F2]">
        Contact Seller
      </button>

    </div>

  </div>

</div>

{/* Product Specifications */}

<div className="bg-white rounded-3xl shadow-lg p-6 mt-10">

  <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
    Specifications
  </h2>

  <div className="grid md:grid-cols-2 gap-5">

    <div className="flex justify-between border-b pb-3">
      <span className="font-semibold">Material</span>
      <span>Ceramic</span>
    </div>

    <div className="flex justify-between border-b pb-3">
      <span className="font-semibold">Color</span>
      <span>Ivory White</span>
    </div>

    <div className="flex justify-between border-b pb-3">
      <span className="font-semibold">Height</span>
      <span>28 cm</span>
    </div>

    <div className="flex justify-between border-b pb-3">
      <span className="font-semibold">Width</span>
      <span>12 cm</span>
    </div>

    <div className="flex justify-between border-b pb-3">
      <span className="font-semibold">Weight</span>
      <span>1.3 kg</span>
    </div>

    <div className="flex justify-between border-b pb-3">
      <span className="font-semibold">Origin</span>
      <span>Jaipur, Rajasthan</span>
    </div>

  </div>

</div>

{/* Product Description */}

<div className="bg-white rounded-3xl shadow-lg p-6 mt-10">

  <h2 className="text-2xl font-bold text-[#4B2E20] mb-5">
    Product Description
  </h2>

  <p className="leading-8 text-gray-600">
    {product.description}
  </p>
</div>

{/* Product Features */}

<div className="bg-white rounded-3xl shadow-lg p-6 mt-10">

  <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
    Why You'll Love It
  </h2>

  <div className="grid md:grid-cols-2 gap-5">

    <div className="bg-[#FFF8F2] rounded-xl p-5">
      🌿 Eco-Friendly & Sustainable
    </div>

    <div className="bg-[#FFF8F2] rounded-xl p-5">
      🎨 Handmade by Skilled Indian Artisans
    </div>

    <div className="bg-[#FFF8F2] rounded-xl p-5">
      🎁 Perfect Gift for Every Occasion
    </div>

    <div className="bg-[#FFF8F2] rounded-xl p-5">
      🏡 Elegant Home Decor Piece
    </div>

  </div>

</div>

{/* Care Instructions */}

<div className="bg-white rounded-3xl shadow-lg p-6 mt-10">

  <h2 className="text-2xl font-bold text-[#4B2E20] mb-5">
    Care Instructions
  </h2>

  <ul className="list-disc ml-6 space-y-3 text-gray-600">

    <li>Clean gently using a soft dry cloth.</li>

    <li>Avoid dropping or rough handling.</li>

    <li>Keep away from harsh chemicals.</li>

    <li>Indoor decorative use recommended.</li>

    <li>Store in a dry place.</li>

  </ul>

</div>
{/* Customer Reviews */}

<div className="bg-white rounded-3xl shadow-lg p-6 mt-10">

  <div className="flex justify-between items-center">

    <h2 className="text-2xl font-bold text-[#4B2E20]">
      Customer Reviews
    </h2>

    <button className="bg-[#4B2E20] text-white px-5 py-2 rounded-xl hover:bg-[#6B4226]">
      Write Review
    </button>

  </div>

  {/* Overall Rating */}

  <div className="flex items-center gap-5 mt-8">

    <div className="text-center">

      <h1 className="text-5xl font-bold text-[#4B2E20]">
        4.9
      </h1>

      <div className="flex justify-center mt-2">

        {[1,2,3,4,5].map((item)=>(

          <Star
            key={item}
            fill="#FFD700"
            className="text-yellow-400"
          />

        ))}

      </div>

      <p className="text-gray-500 mt-2">
        Based on 248 Reviews
      </p>

    </div>

    <div className="flex-1">

      {[5,4,3,2,1].map((item)=>(

        <div
          key={item}
          className="flex items-center gap-3 mb-3"
        >

          <span>{item}★</span>

          <div className="w-full bg-gray-200 rounded-full h-3">

            <div
              className="bg-yellow-400 h-3 rounded-full"
              style={{
                width:
                  item===5
                    ? "82%"
                    : item===4
                    ? "12%"
                    : item===3
                    ? "4%"
                    : item===2
                    ? "1%"
                    : "1%"
              }}
            ></div>

          </div>

        </div>

      ))}

    </div>

  </div>

</div>
<div className="bg-white rounded-3xl shadow-lg p-6 mt-8">

  <div className="flex justify-between">

    <div className="flex gap-4">

      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt=""
        className="w-14 h-14 rounded-full"
      />

      <div>

        <h3 className="font-bold">
          Ananya Sharma
        </h3>

        <div className="flex mt-1">

          {[1,2,3,4,5].map((star)=>(

            <Star
              key={star}
              fill="#FFD700"
              className="text-yellow-400"
              size={18}
            />

          ))}

        </div>

      </div>

    </div>

    <span className="text-gray-500">
      2 Days Ago
    </span>

  </div>

  <p className="mt-5 text-gray-600 leading-7">

    Beautiful craftsmanship. The vase looks even better in person.
    Packaging was excellent and delivery was quick.

  </p>

  <div className="flex gap-3 mt-5">

    <img
      src="https://images.unsplash.com/photo-1517705008128-361805f42e86?w=400"
      className="w-24 h-24 rounded-xl object-cover"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400"
      className="w-24 h-24 rounded-xl object-cover"
      alt=""
    />

  </div>

  <button className="mt-6 border px-5 py-2 rounded-xl hover:bg-[#FFF8F2]">

    Helpful 👍 (18)

  </button>

</div>
<div className="mt-12">

<h2 className="text-3xl font-bold text-[#4B2E20] mb-8">
Related Products
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{[1,2,3,4].map((item)=>(

<div
key={item}
className="bg-white rounded-3xl shadow hover:shadow-xl transition overflow-hidden"
>

<img
src={`https://picsum.photos/400/40${item}`}
className="h-64 w-full object-cover"
alt=""
/>

<div className="p-5">

<h3 className="font-bold">
Handcrafted Product {item}
</h3>

<p className="text-gray-500 mt-2">
Premium Handmade Collection
</p>

<div className="flex justify-between items-center mt-5">

<span className="font-bold text-xl">
₹{1500+item*250}
</span>

<button className="bg-[#4B2E20] text-white px-4 py-2 rounded-xl">
View
</button>

</div>

</div>

</div>

))}

</div>

</div>
<div className="bg-white rounded-3xl shadow-lg p-8 mt-12">

<h2 className="text-2xl font-bold text-[#4B2E20] mb-8">

Frequently Bought Together

</h2>

<div className="grid md:grid-cols-3 gap-6">

{["Vase","Flowers","Table Decor"].map((item,index)=>(

<div
key={index}
className="text-center"
>

<img
src={`https://picsum.photos/300/30${index}`}
className="rounded-2xl h-52 w-full object-cover"
/>

<h3 className="font-semibold mt-4">

{item}

</h3>

<p className="text-[#4B2E20] font-bold mt-2">

₹{900+index*500}

</p>

</div>

))}

</div>

<button className="mt-8 bg-[#4B2E20] text-white px-8 py-3 rounded-xl hover:bg-[#6B4226]">

Add All To Cart

</button>

</div>
<div className="mt-12 mb-20">

<h2 className="text-3xl font-bold text-[#4B2E20] mb-8">

Recently Viewed

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

{[1,2,3,4].map((item)=>(

<div
key={item}
className="bg-white rounded-3xl shadow overflow-hidden"
>

<img
src={`https://picsum.photos/400/50${item}`}
className="h-56 w-full object-cover"
/>

<div className="p-5">

<h3 className="font-semibold">
Decor Item {item}
</h3>

<p className="text-[#4B2E20] font-bold mt-2">
₹{1200+item*200}
</p>

</div>

</div>

))}

</div>

</div>       

        </div>

      </div>

    </div>
  );
}