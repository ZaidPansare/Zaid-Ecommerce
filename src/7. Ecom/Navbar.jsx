import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from './AMZN_BIG.D-8fb0be81.png'

const Navbar = ({setSearch,size,data,setData}) => {

  const filterResult =  (catItem)=>{
    const result = data.filter((curData)=>{
      return curData.category===catItem
    })
    console.log(result);
    setData(result)
  }

  const filterResult2 =  (catItem)=>{
    const result = data.filter((curData)=>{
      return curData.category===catItem
    })
    setData(result)
  }

  const filterResult3 =  (catItem)=>{
    const result = data.filter((curData)=>{
      return curData.category===catItem
    })
    setData(result)
  }

  const filterResult4 =  (catItem)=>{
    const result = data.filter((curData)=>{
      return curData.category===catItem
    })
    setData(result)
  }

  const sortByPrice = () => {
    const Newdata = [...data]
    Newdata.sort((a, b) => a.price - b.price);
    setData(Newdata);
  };

  return (
    <div className='navecom'>
      <nav>
        <article className='navart'>
        <div className='navdiv'><Link style={{color:'white', textDecoration:'none'}} to={'/cover'}>
          <img src={logo} alt="" /></Link>
        </div>
        <div className='navdiv'><input
        onChange={(e)=>setSearch(e.target.value)}
        type="search" placeholder='Search your products'/></div>
        <div className='navdiv'><Link style={{color:'white', textDecoration:'none'}} to={'/cart'}>
          🛒<sup style={{fontSize:"20px"}}>{size}</sup></Link></div>
        </article>
        <br/>
        <article className="Artbtn">
          <button onClick={()=>filterResult(`men's clothing`)}>Men</button>
          <button onClick={()=>filterResult2(`women's clothing`)}>Women</button>
          <button onClick={()=>filterResult3(`electronics`)}>Electronics</button>
          <button onClick={()=>filterResult4(`jewelery`)}>Jewellery</button>
          <button onClick={()=>sortByPrice}>Sort by price</button>
        </article>
        </nav>
    </div>
  )
}

export default Navbar