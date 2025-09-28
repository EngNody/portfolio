import React, { useState } from "react";
import "./main.css";
import { myProjects } from "./MyProjects";
import { AnimatePresence, motion } from "framer-motion";


//  تم نقل المشاريع في ملف اخر باسم MyProjects للتنظيم



export default function Main() {
  const [currentActive, setcurrentActive] = useState("all");
  const [Arr, setArr] = useState(myProjects);


  const handleclick= (buttonCategory) => {
      setcurrentActive(buttonCategory);

                 const newArr = myProjects.filter((item) => {

                   // ======== Ali way 1 ========wrong with me =========

                  const zzz = item.category.filter((myItem) => {
                       return   myItem === buttonCategory ;             
                  })
                  //  لانها بترجع array
                  return zzz[0] === buttonCategory ;

                  // ======== Ali way 2 ========wrong with me =========

                  // const zzz = item.category.find((myItem) => {
                  //      return   myItem === buttonCategory ;             
                  // })
                  //   لانها بترجع عنصر
                  // return zzz ===  buttonCategory;


            //   ======================== chat Ai way ================

            // if (Array.isArray(item.category)) {
            //     // category is an array
            //     return item.category.includes(buttonCategory);
            //   } else {
            //     // category is a string
            //     return item.category === buttonCategory;
            //   }
            //  =======================================================
              })

              setArr(newArr)
            
    
  }
  


  return (
    <div>
      <main className="flex">

        <section className="flex left-section">
          <button
            className={currentActive === "all" ? "active" : null}
            onClick={() => {

            handleclick("all")
             setArr (myProjects);


            }}
          >
            all projects
          </button>

          <button
            onClick={() => {
             
            handleclick("css")

            }}
            className={currentActive === "css" ? "active" : null}
          >
            Html & Css
          </button>
          <button
            className={currentActive === "java" ? "active" : null}
            onClick={() => {
              handleclick("java")
            }}
          >
            Java Script
          </button>
          <button
            className={currentActive === "react" ? "active" : null}
            onClick={() => {

            handleclick("react")

            }}>
            React & MUI
          </button>
          <button
            className={currentActive === "node" ? "active" : null}
            onClick={() => {
             
            handleclick("node")

            }}
          >
            Node & Express
          </button>
        </section>

        <section className="flex right-section">

          {Arr.map((item) => {
            return (
              <motion.article
                layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              exit={{ transform: "scale(0)" }}
              transition={{damping:6,type:"spring",stiffness:50}}

              key={item.imgPath} className="card">
               <AnimatePresence>
                <img width={266} src={item.imgPath} alt="" />

                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="suptitle">
                    A simple landing page made with Html , Css and react. It is
                    a responsive design and works on all devices.
                  </p>

                  <div className="flex icons">
                    <div className="flex" style={{ gap: "11px" }}>
                      <div className="icon-link"></div>
                      <div className="icon-github"></div>
                    </div>
                    <a className="link flex" href="">
                      more
                      <span className="icon-arrow-right"></span>
                    </a>
                  </div>
                </div>
               </AnimatePresence>
              </motion.article>
            );
          })}
        </section>


      </main>
    </div>
  );
}
