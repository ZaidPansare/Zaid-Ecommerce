import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Projects/7. Ecom/Home'
import Cart from './Projects/7. Ecom/Cart'
import Navbar from './Projects/7. Ecom/Navbar'
import About from './Projects/7. Ecom/About'
import Data from './Projects/7. Ecom/Data'
import Cover from './Projects/7. Ecom/Cover'
import { useState } from 'react'


const App = () => {
  const [data,setData]= useState(Data)
  const [search,setSearch] = useState("")
  const [cart, setCart] = useState([])

  function handleClick(item){
    setCart([...cart,item])
  }

  return (  
    <div>
        <BrowserRouter>
        <Navbar setSearch={setSearch} size={cart.length} data={data} setData={setData}/>
        <Routes>
            <Route path='/' element={<Home data={data} search={search} handleClick={handleClick}/>} ></Route>
            <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}></Route>
            <Route path='/about/:Id' element={<About Data={Data} handleClick={handleClick}/>}/>
            <Route path='/cover' element={<Cover/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App