import './Cover.css'
import { Link } from 'react-router-dom'
import phone from './51y+p7OA9lL._SR1236,1080_.jpg'
import ear from './51HUfCjoXIL._SR1236,1080_.jpg'
import img1 from './pexels-sebastiaan-stam-1311590.jpg'
import img2 from './pexels-marlene-leppänen-1183266.jpg'
import img3 from './pexels-malcolm-garret-10365597.jpg'
import img4 from './pexels-chloe-1043474.jpg'
import img5 from './pexels-jermaine-ulinwa-3193731.jpg'
import img6 from './pexels-hamann-la-1192609.jpg'
import img7 from './pexels-andrea-piacquadio-837140.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faWhatsapp,faInstagram,faLinkedinIn,faXTwitter} from '@fortawesome/free-brands-svg-icons'


const Cover = () => {
    
  return (
    <div className='main'>
        <header id='head-cov'>
        <div className='cover-nav'>
        <Link to={"/cover"} style={{color:'white', textDecoration:'none'}}><h3>Home</h3></Link>
            <Link to={"/"} style={{color:'white', textDecoration:'none'}}><h3>Products</h3></Link>
            <Link to={"/cart"} style={{color:'white', textDecoration:'none'}}><h3>Cart</h3></Link>    
    
        </div>
        </header>
        <div className="text2">
            <h1 style={{fontSize:"60px"}}>Shop Electronics</h1>
        </div>
        <div className="phone">
        <img src={phone} alt="" />
        </div>
        <div className="ear">
            <img src={ear} alt="" />
        </div>
        <div className="text1">
            <h1 style={{fontSize:"60px"}}>Shop By Style</h1>
        </div>
        <div className='caro' style={{height:"420px", width:"200vh",display:"inline-flex",gap:"20px", overflowX:"scroll",objectFit:"cover"}}>

            <img src={img1} style={{height:"400px",width:"300px", objectFit:"cover"}} alt="" />
            <img src={img2} style={{height:"400px",width:"300px", objectFit:"cover"}} alt="" />
            <img src={img7} style={{height:"400px",width:"300px", objectFit:"cover"}} alt="" />
            <img src={img4} style={{height:"400px",width:"300px", objectFit:"cover"}} alt="" />
            <img src={img5} style={{height:"400px",width:"300px", objectFit:"cover"}} alt="" />
            <img src={img6} style={{height:"400px",width:"300px", objectFit:"cover"}} alt="" />
        </div>
        <footer className="cover-foot">
            <div className="left">
                <a href="#"><FontAwesomeIcon icon={faPhone} />Call</a>
                <a href="#"><FontAwesomeIcon icon={faEnvelope} />Mail</a>
                <a href="#"><FontAwesomeIcon icon={faWhatsapp} />WhatsApp</a>
            </div>
            <div className="middle">
                <p>"Welcome to our vibrant online marketplace, where shopping meets convenience and quality! Discover a world of handpicked treasures, from trendy fashion essentials to cutting-edge electronics. Explore a curated collection of top-tier products, meticulously selected to cater to your every need. Experience seamless shopping with user-friendly navigation, secure transactions, and prompt delivery. Join us and embark on a shopping journey that combines the best of innovation, style, and unparalleled customer service. Start exploring your desires today, right at your fingertips."</p>
            </div>
            <div className="right">
                <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                <a href="#"><FontAwesomeIcon icon={faXTwitter} /></a>
            </div>
        </footer>
    </div>
  )
}

export default Cover