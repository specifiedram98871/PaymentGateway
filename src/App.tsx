import "./App.css";
// import { useTheme } from "@/components/theme-provider";
import { Routes, Route } from "react-router-dom";
import Home from "./components/menu/Home";
import Header from "./components/ui/header/Header";
import Product from "./components/products/Product";
import ProductDetails from "./components/products/ProductDetails";
import CategoryProduct from "./components/products/CategoryProduct";
import Cart from "./components/cart/cart";
import Footer from "./components/ui/Footer/Footer";
import Login from "./components/Users/Login";
import Signin from "./components/Users/Signin";
import Payment from "./components/cart/Payment";
import ProtectedRoute from "./routes/protectedRoutes";
import OrderSuccess from "./components/cart/OrderSuccess";
import AdminDashboard from "./admin/AdminDashboard";
import { Carousel } from "./components/ui/carousel";
import { CarouselDemo } from "./components/menu/carousel/Carousel";
function App() {
  
  // const [theme,setTheme] = useState(true)
  // const { setTheme } = useTheme();
  return (
    <div className=" bg-slate-300 dark:bg-slate-800">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/category/:name" element={<CategoryProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/order/success" element={<OrderSuccess />} />
        <Route
          path="/process/payment"
          element={
            <ProtectedRoute isAdmin={false}>
              <Payment />
            </ProtectedRoute>
          }
        ></Route>
        <Route path="/admin/dashboard" element={
          <ProtectedRoute isAdmin={true}>
            <AdminDashboard/>
          </ProtectedRoute> 
        }></Route>
        
      </Routes>
      <CarouselDemo/>
      <Footer />
    </div>
  );
}

export default App;
