import React, { useState, useRef, useEffect } from "react";
import {
  Upload,
  ImagePlus,
  Trash2,
  Star,
  Save,
  Eye,
  Package,
  RefreshCw,
  AlertTriangle,
} from "lucide-react";

export default function EditProduct() {
  const fileInputRef = useRef(null);

  const MAX_IMAGES = 5;

  const [dragging, setDragging] = useState(false);

  const [images, setImages] = useState([]);

  const [coverImage, setCoverImage] = useState(0);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [product, setProduct] = useState({
    productName: "",
    description: "",
    category: "",
    subCategory: "",
    price: "",
    discount: "",
    stock: "",
    sku: "",
    material: "",
    dimensions: "",
    weight: "",
    color: "",
    tags: "",
    shippingCharge: "",
    estimatedDelivery: "",
    status: "Published",
  });

  useEffect(() => {
    const sampleProduct = {
      productName: "Handmade Ceramic Vase",
      description:
        "Beautiful handcrafted ceramic vase made by skilled artisans.",
      category: "Home Decor",
      subCategory: "Vases",
      price: "2499",
      discount: "10",
      stock: "18",
      sku: "ART1001",
      material: "Ceramic",
      dimensions: "12 x 8 Inches",
      weight: "700 g",
      color: "Ivory White",
      tags: "ceramic, handmade, vase",
      shippingCharge: "120",
      estimatedDelivery: "3-5 Days",
      status: "Published",
    };

    setProduct(sampleProduct);

    setImages([
      {
        preview:
          "https://images.unsplash.com/photo-1612196808214-b8e1d6145a54?w=600",
      },
      {
        preview:
          "https://images.unsplash.com/photo-1616628182509-6a5f3386d2dd?w=600",
      },
    ]);
  }, []);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleFiles = (files) => {
    const selected = Array.from(files);

    if (images.length + selected.length > MAX_IMAGES) {
      alert(`Maximum ${MAX_IMAGES} images allowed.`);
      return;
    }

    const previews = selected.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...previews]);
  };

  const replaceImage = (index, file) => {
    const updated = [...images];

    updated[index] = {
      file,
      preview: URL.createObjectURL(file),
    };

    setImages(updated);
  };

  const deleteImage = (index) => {
    const updated = [...images];

    updated.splice(index, 1);

    setImages(updated);

    if (coverImage >= updated.length) {
      setCoverImage(0);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-8">

          <RefreshCw
            className="text-[#4B2E20]"
            size={34}
          />

          <div>

            <h1 className="text-4xl font-bold text-[#4B2E20]">
              Edit Product
            </h1>

            <p className="text-gray-500">
              Update your product information.
            </p>

          </div>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
              Product Images
            </h2>

            <div
              onDragOver={(e) => {
                e.preventDefault();
                setDragging(true);
              }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                handleFiles(e.dataTransfer.files);
              }}
              onClick={() => fileInputRef.current.click()}
              className={`border-2 border-dashed rounded-2xl p-10 text-center cursor-pointer transition ${
                dragging
                  ? "border-[#4B2E20] bg-[#FFF2E8]"
                  : "border-gray-300"
              }`}
            >
              <Upload
                className="mx-auto text-[#4B2E20]"
                size={45}
              />

              <h3 className="text-xl font-bold mt-4">
                Upload New Images
              </h3>

              <p className="text-gray-500 mt-2">
                Drag & Drop or Click Here
              </p>

              <input
                ref={fileInputRef}
                hidden
                type="file"
                multiple
                accept="image/*"
                onChange={(e) =>
                  handleFiles(e.target.files)
                }
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5 mt-8">

              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl overflow-hidden border"
                >
                  <img
                    src={img.preview}
                    alt=""
                    className="w-full h-48 object-cover"
                  />

                  {coverImage === index && (
                    <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                      Cover
                    </span>
                  )}

                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3">

                    <button
                      onClick={() => setCoverImage(index)}
                      className="bg-white p-2 rounded-full shadow"
                    >
                      <Star
                        size={18}
                        className="text-yellow-600"
                      />
                    </button>

                    <label className="bg-white p-2 rounded-full shadow cursor-pointer">

                      <RefreshCw
                        size={18}
                        className="text-blue-600"
                      />

                      <input
                        hidden
                        type="file"
                        accept="image/*"
                        onChange={(e) =>
                          replaceImage(
                            index,
                            e.target.files[0]
                          )
                        }
                      />

                    </label>

                    <button
                      onClick={() =>
                        deleteImage(index)
                      }
                      className="bg-white p-2 rounded-full shadow"
                    >
                      <Trash2
                        size={18}
                        className="text-red-600"
                      />
                    </button>

                  </div>

                </div>
              ))}

            </div>
                        <div className="mt-12">

              <h2 className="text-2xl font-bold text-[#4B2E20] mb-8">
                Product Information
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="block font-semibold mb-2">
                    Product Name
                  </label>

                  <input
                    type="text"
                    name="productName"
                    value={product.productName}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Category
                  </label>

                  <select
                    name="category"
                    value={product.category}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  >
                    <option>Home Decor</option>
                    <option>Pottery</option>
                    <option>Jewelry</option>
                    <option>Wall Decor</option>
                    <option>Paintings</option>
                    <option>Wood Crafts</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    Sub Category
                  </label>

                  <input
                    type="text"
                    name="subCategory"
                    value={product.subCategory}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2">
                    SKU
                  </label>

                  <input
                    type="text"
                    name="sku"
                    value={product.sku}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  />
                </div>

              </div>

              <div className="mt-8">

                <label className="block font-semibold mb-2">
                  Description
                </label>

                <textarea
                  rows={6}
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4 resize-none"
                />

              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">

                <div>

                  <label className="block font-semibold mb-2">
                    Price
                  </label>

                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  />

                </div>

                <div>

                  <label className="block font-semibold mb-2">
                    Discount %
                  </label>

                  <input
                    type="number"
                    name="discount"
                    value={product.discount}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  />

                </div>

                <div>

                  <label className="block font-semibold mb-2">
                    Stock
                  </label>

                  <input
                    type="number"
                    name="stock"
                    value={product.stock}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  />

                </div>

              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div>

                  <label className="block font-semibold mb-2">
                    Material
                  </label>

                  <input
                    type="text"
                    name="material"
                    value={product.material}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  />

                </div>

                <div>

                  <label className="block font-semibold mb-2">
                    Color
                  </label>

                  <input
                    type="text"
                    name="color"
                    value={product.color}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  />

                </div>

                <div>

                  <label className="block font-semibold mb-2">
                    Dimensions
                  </label>

                  <input
                    type="text"
                    name="dimensions"
                    value={product.dimensions}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  />

                </div>

                <div>

                  <label className="block font-semibold mb-2">
                    Weight
                  </label>

                  <input
                    type="text"
                    name="weight"
                    value={product.weight}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  />

                </div>

              </div>

              <div className="mt-8">

                <label className="block font-semibold mb-2">
                  Tags
                </label>

                <input
                  type="text"
                  name="tags"
                  value={product.tags}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-4"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">

                <div>

                  <label className="block font-semibold mb-2">
                    Shipping Charge
                  </label>

                  <input
                    type="number"
                    name="shippingCharge"
                    value={product.shippingCharge}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  />

                </div>

                <div>

                  <label className="block font-semibold mb-2">
                    Estimated Delivery
                  </label>

                  <input
                    type="text"
                    name="estimatedDelivery"
                    value={product.estimatedDelivery}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-4"
                  />

                </div>

              </div>

            </div>

          </div>
                    {/* RIGHT SIDE */}

          <div className="space-y-6">

            {/* Product Preview */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <div className="flex items-center gap-3 mb-6">

                <Eye className="text-[#4B2E20]" />

                <h2 className="text-2xl font-bold text-[#4B2E20]">
                  Product Preview
                </h2>

              </div>

              <div className="rounded-2xl overflow-hidden border">

                {images.length > 0 ? (

                  <img
                    src={images[coverImage]?.preview}
                    alt=""
                    className="w-full h-64 object-cover"
                  />

                ) : (

                  <div className="h-64 flex flex-col items-center justify-center bg-gray-100">

                    <ImagePlus
                      size={60}
                      className="text-gray-400"
                    />

                    <p className="mt-3 text-gray-500">
                      No Image Available
                    </p>

                  </div>

                )}

              </div>

              <div className="mt-6 space-y-4">

                <h3 className="text-2xl font-bold text-[#4B2E20]">

                  {product.productName}

                </h3>

                <p className="text-gray-500">

                  {product.category}

                </p>

                <div className="flex justify-between">

                  <span>Price</span>

                  <span className="font-bold text-[#4B2E20]">

                    ₹ {product.price}

                  </span>

                </div>

                <div className="flex justify-between">

                  <span>Stock</span>

                  <span>{product.stock}</span>

                </div>

                <div className="flex justify-between">

                  <span>Status</span>

                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">

                    {product.status}

                  </span>

                </div>

              </div>

            </div>

            {/* Product Statistics */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
                Product Statistics
              </h2>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Total Views</span>
                  <span className="font-bold">1,248</span>
                </div>

                <div className="flex justify-between">
                  <span>Total Sales</span>
                  <span className="font-bold">164</span>
                </div>

                <div className="flex justify-between">
                  <span>Wishlist</span>
                  <span className="font-bold">92</span>
                </div>

                <div className="flex justify-between">
                  <span>Rating</span>
                  <span className="font-bold text-yellow-500">
                    ⭐ 4.8 / 5
                  </span>
                </div>

              </div>

            </div>

            {/* Action Buttons */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
                Actions
              </h2>

              <div className="space-y-4">

                <button
                  className="w-full bg-[#4B2E20] hover:bg-[#6B4226] text-white py-4 rounded-xl font-semibold flex justify-center items-center gap-2"
                >
                  <Save size={20} />
                  Update Product
                </button>

                <button
                  className="w-full bg-gray-200 hover:bg-gray-300 py-4 rounded-xl font-semibold"
                >
                  Save Draft
                </button>

                <button
                  onClick={() => setShowDeleteModal(true)}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold"
                >
                  Delete Product
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Delete Confirmation Modal */}

      {showDeleteModal && (

        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white rounded-3xl p-8 w-[420px] max-w-[90%]">

            <div className="flex justify-center mb-5">

              <AlertTriangle
                size={60}
                className="text-red-600"
              />

            </div>

            <h2 className="text-2xl font-bold text-center text-[#4B2E20]">
              Delete Product?
            </h2>

            <p className="text-center text-gray-500 mt-4">
              This action cannot be undone. The product and all associated
              images will be permanently deleted.
            </p>

            <div className="flex gap-4 mt-8">

              <button
                onClick={() => setShowDeleteModal(false)}
                className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  alert("Product Deleted Successfully");
                  setShowDeleteModal(false);
                }}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold"
              >
                Delete
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}