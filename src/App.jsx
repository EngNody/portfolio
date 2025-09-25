
import { useEffect, useState } from "react";
import Header from "./components/1-header/Header"
import Hero from './components/2-hero/Hero';
import Main from './components/3-main/Main';
import Contact from './components/4-contact/Contact';
import Footer from './components/5-footer/Footer';


function App() {


useEffect(() => {
  
  window.addEventListener("scroll" ,() => {
    // console.log(window.scrollY)
    if (window.scrollY > 300 ) {
      setshowscrollbtn(1)
    }else{
      setshowscrollbtn(0)
    }
  }
  )

}, []);

  const [showscrollbtn, setshowscrollbtn] = useState(0);

  return (
    <div id="up" className="container">

<Header/>
<div className="divider"/>
<Hero/>
<div className="divider"/>
<Main/>
<div className="divider"/>
<Contact/>
<div className="divider"/>
<Footer/>



  <a  style={{opacity:`${showscrollbtn}`,transition:"3s"}} href="#up">

  <button className="scroll2top icon-keyboard_arrow_up"></button>
  
</a>




    </div>
  )
}

export default App
