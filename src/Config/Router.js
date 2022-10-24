import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import Home from "../Containers/Home";
import Cart from "../Containers/Cart";
import Navbar from "../Components/Navbar";

function Router(){
    return(
        <>
        <BrowserRouter>
        <Navbar/>

        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>

        </Routes>
        </BrowserRouter>
        
        </>
    )
};

export default Router;