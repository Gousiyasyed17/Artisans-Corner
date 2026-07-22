import React, { useState, useRef } from "react";
import {
  Upload,
  ImagePlus,
  Trash2,
  Star,
  Save,
  Eye,
  Package,
  DollarSign,
  Truck,
  Tag,
} from "lucide-react";

export default function AddProduct() {
  const fileInputRef = useRef(null);

  const MAX_IMAGES = 5;

  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState(0);
  const [dragging, setDragging] = useState(false);

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
    status: "Draft",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleFiles = (files) => {
    const selectedFiles = Array.from(files);

    if (images.length + selectedFiles.length > MAX_IMAGES) {
      alert(`Maximum ${MAX_IMAGES} images allowed.`);
      return;
    }

    const validFiles = selectedFiles.filter((file) => {
      if (!file.type.startsWith("image/")) {
        alert(`${file.name} is not an image.`);
        return false;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert(`${file.name} exceeds 5MB.`);
        return false;
      }

      return true;
    });

    const previews = validFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...previews]);
  };

  const deleteImage = (index) => {
    const updated = [...images];

    URL.revokeObjectURL(updated[index].preview);

    updated.splice(index, 1);

    setImages(updated);

    if (coverImage >= updated.length) {
      setCoverImage(0);
    }
  };

  const openFilePicker = () => {
    fileInputRef.current.click();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const handleSubmit = (status) => {
    const finalData = {
      ...product,
      status,
      images,
      coverImage,
    };

    console.log(finalData);

    alert(`Product ${status} successfully!`);
  };

  return (
    <div className="min-h-screen bg-[#FFF8F2] py-10 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-3 mb-8">

          <Package className="text-[#4B2E20]" size={34} />

          <div>

            <h1 className="text-4xl font-bold text-[#4B2E20]">
              Add New Product
            </h1>

            <p className="text-gray-500">
              Create and publish a handcrafted product.
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
              onDrop={handleDrop}
              onClick={openFilePicker}
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

              <h3 className="font-bold text-xl mt-4">
                Drag & Drop Images
              </h3>

              <p className="text-gray-500 mt-2">
                or click to upload (Maximum 5 Images)
              </p>

              <input
                ref={fileInputRef}
                type="file"
                multiple
                hidden
                accept="image/*"
                onChange={(e) => handleFiles(e.target.files)}
              />
            </div>

            {images.length > 0 && (
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
                        type="button"
                        onClick={() => setCoverImage(index)}
                        className="bg-white p-2 rounded-full shadow hover:bg-yellow-100"
                      >
                        <Star
                          size={18}
                          className="text-yellow-600"
                        />
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteImage(index)}
                        className="bg-white p-2 rounded-full shadow hover:bg-red-100"
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
            )}
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
                    placeholder="Handmade Ceramic Vase"
                    className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#4B2E20]"
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
                    className="w-full border rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#4B2E20]"
                  >
                    <option value="">Select Category</option>
                    <option>Home Decor</option>
                    <option>Jewelry</option>
                    <option>Pottery</option>
                    <option>Paintings</option>
                    <option>Wood Crafts</option>
                    <option>Textiles</option>
                    <option>Candles</option>
                    <option>Wall Decor</option>
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
                    placeholder="Living Room"
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
                    placeholder="ART-1001"
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
                  placeholder="Describe your handmade product..."
                  className="w-full border rounded-xl p-4 resize-none"
                />

              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">

                <div>

                  <label className="block font-semibold mb-2 flex items-center gap-2">
                    <DollarSign size={18}/>
                    Price
                  </label>

                  <input
                    type="number"
                    name="price"
                    value={product.price}
                    onChange={handleChange}
                    placeholder="2500"
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
                    placeholder="10"
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
                    placeholder="25"
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
                    placeholder="Clay"
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
                    placeholder="White"
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
                    placeholder='10" × 5" × 8"'
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
                    placeholder="500 g"
                    className="w-full border rounded-xl p-4"
                  />

                </div>

              </div>

              <div className="mt-8">

                <label className="block font-semibold mb-2 flex items-center gap-2">
                  <Tag size={18}/>
                  Tags
                </label>

                <input
                  type="text"
                  name="tags"
                  value={product.tags}
                  onChange={handleChange}
                  placeholder="handmade, ceramic, premium, vase"
                  className="w-full border rounded-xl p-4"
                />

              </div>
                            <div className="mt-10">

                <h2 className="text-2xl font-bold text-[#4B2E20] mb-6 flex items-center gap-2">
                  <Truck size={24} />
                  Shipping Information
                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                  <div>

                    <label className="block font-semibold mb-2">
                      Shipping Charge
                    </label>

                    <input
                      type="number"
                      name="shippingCharge"
                      value={product.shippingCharge}
                      onChange={handleChange}
                      placeholder="100"
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
                      placeholder="3 - 5 Business Days"
                      className="w-full border rounded-xl p-4"
                    />

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-6">

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
                      No Cover Image
                    </p>

                  </div>

                )}

              </div>

              <div className="mt-6 space-y-4">

                <div>

                  <h3 className="text-xl font-bold text-[#4B2E20]">

                    {product.productName || "Product Name"}

                  </h3>

                  <p className="text-gray-500 mt-2">

                    {product.category || "Category"}

                  </p>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Price
                  </span>

                  <span className="font-bold text-[#4B2E20]">
                    ₹ {product.price || 0}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Stock
                  </span>

                  <span className="font-semibold">
                    {product.stock || 0}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-gray-500">
                    Status
                  </span>

                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">

                    {product.status}

                  </span>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold text-[#4B2E20] mb-6">
                Actions
              </h2>

              <div className="space-y-4">

                <button
                  onClick={() => handleSubmit("Draft")}
                  className="w-full bg-gray-200 hover:bg-gray-300 py-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                >
                  <Save size={20} />
                  Save Draft
                </button>

                <button
                  onClick={() => handleSubmit("Published")}
                  className="w-full bg-[#4B2E20] hover:bg-[#6B4226] text-white py-4 rounded-xl font-semibold"
                >
                  Publish Product
                </button>

                <button
                  type="button"
                  className="w-full border border-red-500 text-red-500 hover:bg-red-50 py-4 rounded-xl font-semibold"
                >
                  Cancel
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
          </div>

  );
}