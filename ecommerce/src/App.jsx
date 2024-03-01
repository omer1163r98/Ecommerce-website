import { useState } from 'react'
import {Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/home/home';
import Products from './pages/products/products';
import Cart from './pages/cart/cart';
import Navbar from './pages/navbar/navbar';
import Details from './pages/products/details';
function App() {
const [input, setInput] = useState();
const [cartArr, setCartArr] = useState([]);
const [total, setTotal] = useState(0);

console.log(cartArr)
  return (
    <>
      <Navbar setInput={setInput} input={input}></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/products' element={<Products input={input} setInput={setInput} cartArr={cartArr} total={total} setTotal={setTotal}></Products>}></Route>
        <Route path='cart' element={<Cart cartArr={cartArr} setCartArr={setCartArr} total={total} setTotal={setTotal}></Cart>}></Route >
        <Route path='/details/:id' element={<Details cartArr={cartArr} setCartArr={setCartArr}total={total} setTotal={setTotal}></Details>}></Route>
      </Routes>
    </>
  )
}

export default App
