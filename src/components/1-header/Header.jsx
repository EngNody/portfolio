import React, { useState } from 'react'
import './header.css'



export default function Header() {

const [showModel, setshowModel] = useState(false);


  return (
    <header className='flex'>

        <button className='menu icon-menu' onClick={() => {
          setshowModel(true)
        }
        }/> 

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
      <button className='mode'>
        <span  className='icon-moon-o'></span>
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
