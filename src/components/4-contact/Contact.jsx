import React from 'react'
import './contact.css'


export default function Contact() {
  return (
    <section className='contact-us'>
        <h1 className='title'>   
          <span className='icon-envelope'></span> 
          Contact us
       </h1>

       <p className='sub-title'>Contact us for more information and Get notified when i publish something new</p>

       <div className="flex">

        <form action="">

       <div className="flex">
           <label htmlFor="email">Email Address:</label>
           <input required type="email" id='email' placeholder='Your Name' />
        
       </div>

       <div className='flex' style={{marginTop: '24px'}}>
  
            <label htmlFor="Message">your Message:</label>
            <textarea required name="" id="Message" placeholder='Your message:'></textarea> 
  
       </div>
          <button className='submit'>Submit</button>
        </form>


        <div className="animation">animation</div>
       </div>
    </section>
  )
}
