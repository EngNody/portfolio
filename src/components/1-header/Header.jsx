import React, { useEffect, useState } from 'react'
import './header.css'



export default function Header() {

const [showModel, setshowModel] = useState(false);
const [mytheme, setmytheme] = useState(
  localStorage.getItem("currentMode") ?? "light"
);

useEffect(() => {

  if (mytheme==="light") {
     document.body.classList.remove("dark")
     document.body.classList.add("light")

  }else{
     document.body.classList.add("dark")
     document.body.classList.remove("light")
  }

}, [mytheme]);


  return (
    <header className='flex'>

        <button  className="menu icon-menu " onClick={() => {
          setshowModel(true)
        }
        }></button> 

      <div/>

      <nav>
<ul className="flex">
  <li><a href="">About</a></li>
  <li><a href="">Article</a></li>
  <li><a href="">Projects</a></li>
  <li><a href="">Speaking</a></li>
  <li><a href="">Contact</a></li>
</ul>
      </nav>
      <button onClick={() => {
        // send value to local storage (LS)
         localStorage.setItem("currentMode",(mytheme === "dark" ? "light" : "dark"))

        // get value to local storage (LS)
         setmytheme(localStorage.getItem("currentMode"))

          // console.log(localStorage.getItem("currentMode"))
      }
      } className='mode'>
       
       {(mytheme === "dark") ?      
         <span  className='icon-moon-o'></span>:
         <span  className='icon-sun'></span>        
       }

      </button>

{showModel  && (

  <div className="fixed">
<ul className="modal">
  <li><button className='icon-close' onClick={() => {
              setshowModel(false)
  }
  }/></li>
  <li><a href="">About</a></li>
  <li><a href="">Articles</a></li>
  <li><a href="">Projects</a></li>
  <li><a href="">Speaking</a></li>
  <li><a href="">Users</a></li>
</ul>
</div>

)}

    </header>
  )
}
