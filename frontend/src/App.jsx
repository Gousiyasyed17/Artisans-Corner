import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";

import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Register from "./pages/Register";

import CustomerDashboard from "./pages/CustomerDashboard";
import CustomerOrders from "./pages/CustomerOrders";
import CustomerProfile from "./pages/CustomerProfile";
import CustomerReviews from "./pages/CustomerReviews";

import SellerDashboard from "./pages/SellerDashboard";
import SellerProducts from "./pages/SellerProducts";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import Inventory from "./pages/Inventory";
import SalesHistory from "./pages/SalesHistory";
import Earnings from "./pages/Earnings";
import SellerOrders from "./pages/SellerOrders";
import Coupons from "./pages/Coupons";
import StoreProfile from "./pages/StoreProfile";

import AdminDashboard from "./pages/AdminDashboard";
import ManageUsers from "./pages/ManageUsers";
import ManageVendors from "./pages/ManageVendors";
import ManageProducts from "./pages/ManageProducts";
import ManageOrders from "./pages/ManageOrders";
import Analytics from "./pages/Analytics";
import Reports from "./pages/Reports";

import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";

import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public */}

        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        <Route path="/product/:id" element={<ProductDetails />} />

        <Route path="/category/:name" element={<Category />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />

        <Route path="/wishlist" element={<Wishlist />} />

        <Route path="/login" element={<Login />} />

        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route path="/register" element={<Register />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/faq" element={<FAQ />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />

        <Route path="/terms" element={<TermsConditions />} />



        {/* Customer */}

        <Route
          path="/customer/dashboard"
          element={<CustomerDashboard />}
        />

        <Route
          path="/customer/orders"
          element={<CustomerOrders />}
        />

        <Route
          path="/customer/profile"
          element={<CustomerProfile />}
        />

        <Route
          path="/customer/reviews"
          element={<CustomerReviews />}
        />



        {/* Seller */}

        <Route
          path="/seller/dashboard"
          element={<SellerDashboard />}
        />

        <Route
          path="/seller/products"
          element={<SellerProducts />}
        />

        <Route
          path="/seller/add-product"
          element={<AddProduct />}
        />

        <Route
          path="/seller/edit-product/:id"
          element={<EditProduct />}
        />

        <Route
          path="/seller/inventory"
          element={<Inventory />}
        />

        <Route
          path="/seller/orders"
          element={<SellerOrders />}
        />

        <Route
          path="/seller/sales-history"
          element={<SalesHistory />}
        />

        <Route
          path="/seller/earnings"
          element={<Earnings />}
        />

        <Route
          path="/seller/coupons"
          element={<Coupons />}
        />

        <Route
          path="/seller/store-profile"
          element={<StoreProfile />}
        />



        {/* Admin */}

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/users"
          element={<ManageUsers />}
        />

        <Route
          path="/admin/vendors"
          element={<ManageVendors />}
        />

        <Route
          path="/admin/products"
          element={<ManageProducts />}
        />

        <Route
          path="/admin/orders"
          element={<ManageOrders />}
        />

        <Route
          path="/admin/analytics"
          element={<Analytics />}
        />

        <Route
          path="/admin/reports"
          element={<Reports />}
        />



        {/* 404 */}

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;