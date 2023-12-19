import Data from './Data'
import Card from './Card'
import './Home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Home = ({search,handleClick,data}) => {
  return (
    <div>
        <Carousel>
            {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
                return(
                    <header key={item.id} style={{height:'600px', width:'80%', margin:'auto'}}>
                        <div className='main'>
                            <img src={item.image} style={{width:'70%', height:"70%"}} alt="" />
                            <p className='desc'>
                                <h1>{item.title}</h1>
                                <p>{item.description}</p>
                                <p>{item.price}Rs</p>
                                <p>{item.rating.rate}⭐</p>
                                <button onClick={()=>handleClick(item)}>Add cart</button>
                            </p>
                        </div>
                    </header>
                )
            })}
        </Carousel>
        
        <div className="sec">
        {data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
            return(
                <Card  handleClick={handleClick} key={item.id} item={item}/>
            )
        })}
        </div>
    </div>
  )
}

export default Home