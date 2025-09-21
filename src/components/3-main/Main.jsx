import React from 'react'
import './main.css'


export default function Main() {
  return (
    <div>

<main className='flex'>
  <section className=' flex left-section'>
   <button className='active'>all projects</button>
   <button>Html & Css</button>
   <button>Java Script</button>
   <button>React & MUI</button>
   <button>Node & Express</button>
  </section>
  

    <section className='flex right-section'>
     
{["sessionStorage","ggg","lll",6,9].map((item) => {    
return(
 <article key={item} className='card'>
    <img width={266} src="./download.webp" alt="" />

    <div style={{width:"266px"}} className="box">
      <h1 className='title'>Landing page 2</h1>
      <p className='suptitle'>A simple landing page made with Html , Css and react. It is a responsive design and works on all devices.</p>
      
      <div className="flex icons">
      <div className='flex' style={{gap:"11px"}}>
          <div className="icon-link"></div>
          <div className="icon-github"></div>
      </div>
        <a className='link flex' href=""> 
          more
          <span className='icon-arrow-right'></span>
        </a>
      </div>
    </div>
      </article>

)})}

  




  </section>
</main>


    </div>
  )
}
