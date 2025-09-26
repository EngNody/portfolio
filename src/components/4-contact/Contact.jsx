import React from 'react'
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';


export default function Contact() {

  const [state, handleSubmit] = useForm("mnngnrjq");

  //   if (state.succeeded) {
  //     return <h1>Thanks for joining!</h1>;
  // }

  return (
    <section className='contact-us'>
        <h1 className='title'>   
          <span className='icon-envelope'></span> 
          Contact us
       </h1>

       <p className='sub-title'>Contact us for more information and Get notified when i publish something new</p>

       <div className="flex">

        <form action=""  onSubmit={handleSubmit}>

       <div className="flex">
           <label htmlFor="email">Email Address:</label>
           <input
          //  لايقاف ترشيحات الايميلات السابقه
          //  autoComplete='off'  
           required type="email" id='email' placeholder='Your Name' name='email' />
              <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       </div>

       <div className='flex' style={{marginTop: '24px'}}>
  
            <label htmlFor="Message">your Message:</label>
            <textarea required name="Message" id="Message" placeholder='Your message:'></textarea> 
               <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
       </div>
          <button type="submit" disabled={state.submitting} className='submit'>
            {state.submitting?"Submitting......":"Submit"}
            </button>
          

          {state.succeeded && (<h1 style={{fontSize:"18px",marginTop:"1.7rem"}} >Thanks for joining!
            your message has been sent successfully
          </h1>)}
        </form>


        <div className="animation">animation</div>
       </div>
    </section>
  )
}
