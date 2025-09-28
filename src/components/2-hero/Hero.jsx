import React, { useRef } from "react";
import "./hero.css";
import Lottie from "lottie-react";
import developeranimation from "../../../public/animation/developer.json";
import { motion } from "motion/react"


export default function Hero() {
  const lottieRef = useRef(null);

  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="parent-avatar flex">

   <motion.img
initial={{transform:"scale(0)"}}
animate={{transform:"scale(1.1)"}}
transition={{damping:6,type:"spring",stiffness:100}}
 src="/myimg.png" alt="" className="avatar border" />        

   <div className="icon-verified" />
        </div>

        <div>
          <h1 className="title">
            Software designer, founder, and amateur astronaut.
          </h1>
          <p className="suptitle">
            I’m Spencer, a software designer and entrepreneur based in New York
            City. I’m the founder and CEO of Planetaria, where we develop
            technologies that empower regular people to explore space on their
            own terms.
          </p>

          <div className="all-icons flex">
            <div className="icon  icon-x"></div>
            <div className="icon  icon-instagram"></div>
            <div className="icon  icon-github"></div>
            <div className="icon  icon-linkedin-square"></div>
          </div>
        </div>
      </div>

      <div className="right-section animation">
        <Lottie lottieRef={lottieRef} animationData={developeranimation} onLoadedImages={() => {
        //  https://lottiereact.com/#setspeedspeed
         lottieRef.current.setSpeed(0.5)
        }}  />
      </div>
    </section>
  );
}
