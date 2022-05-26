import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Blogs from "./Components/Blogs/Blogs";
import ErrorNotFound from "./Components/Error404/ErrorNotFound";
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login/Login';
import RequireAuth from './Components/Login/RequireAuth/RequireAuth';
import Signup from './Components/Login/Signup/Signup';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import AllProducts from './Components/AllProducts/AllProducts';
import MyOrders from './Components/MyOrders/MyOrders';
import Purchase from './Components/Purchase/Purchase';

function App() {
  return (
    <div className='bg-cyan-50'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/purchase/:itemId" element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>
        <Route path="/myorders" element={
          <RequireAuth>
            <MyOrders></MyOrders>
          </RequireAuth>
        }></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/allproducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path="*" element={<ErrorNotFound></ErrorNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
