import { Route, Routes } from "react-router-dom"
import HomePage from "./component/page/HomePage"
import Login from "./component/page/Login"
import Register from "./component/page/Register"
import Cart from "./component/page/Cart/Cart"
import Menu from "./component/page/Menu/Menu"
import Pizza from "./component/page/Menu/Pizza/Pizza"
import SideDish from "./component/page/Menu/Pizza/SideDish"
import Dessert from "./component/page/Menu/Pizza/Dessert"
import Drinks from "./component/page/Menu/Pizza/Drinks"
import Checkout from "./component/page/Checkout/Checkout"
import OrderTracking from "./component/page/OrderTracking/OrderTracking"
import OrderTrackingDetail from "./component/page/OrderTracking/OrderTrackingDetail"
import About from "./component/page/About"
import Dashboard from "./component/page/AdminPage/Dashboard"


function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/menu" element={<Menu/>}>
        <Route path="pizza" element={<Pizza/>}/>
        <Route path="sides" element={<SideDish/>}/>
        <Route path="dessert" element={<Dessert/>}/>
        <Route path="drinks" element={<Drinks/>}/>
      </Route>
      <Route path="/checkout" element={<Checkout/>}/>
      <Route path="/order-tracking" element={<OrderTracking/>}/>
      <Route path="/order-tracking-details/:id" element={<OrderTrackingDetail/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      {/* <Route path="/user-management" element={<UserManagement/>}/> */}
      {/* <Route path="/product-management" element={<ProductManagement/>}/> */}
    </Routes>
    </>
  )
}

export default App
