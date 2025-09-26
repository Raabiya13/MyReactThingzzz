import React, { useState } from 'react';
import {useGSAP} from "@gsap/react"
import gsap from "gsap";


function App() {
  let [showContent, setShowContent]=useState(false);

  useGSAP(()=>{
    const tl= gsap.timeline();

    tl.to(".vi-mask-group",{
      rotate:10,
      duration:2,
      ease:"Power4.easeInOut",
      transformOrigin:"50% 50%",
    })
    .to(".vi-mask-group",{
      scale:10,
      duration: 2,
      delay:-1.8,
      ease:"Expo.easeInOut",
      transformOrigin:"50% 50%",
      opacity:0,
      onUpdate:function(){
        if(this.progress()>= .9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  });

  useGSAP(()=>{

    if(!showContent) return;

    gsap.to(".main",{
      scale:1,
      rotate:0,
      duration:2,
      delay:"-1",
      ease:"Expo.easeInOut",
    });

    gsap.to(".sky",{
      scale:1.2,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut",
    });

    gsap.to(".bg",{
      scale:1.2,
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut",
    });

    gsap.to(".spi",{
      scale:0.8,
      x:"-50%",
      bottom:"-15%",
      rotate:0,
      duration:2,
      delay:"-.8",
      ease:"Expo.easeInOut",
    });


    const main=document.querySelector(".main");

    main?.addEventListener("mousemove", function(e){
      const xMove= (e.clientX/window.innerWidth-0.5)*40;
      const yMove= (e.clientY/window.innerHeight-0.5)*40;
      gsap.to(".imagesdiv .text",{
        x:`${xMove*0.4}%`,
      });
      gsap.to(".sky",{
        x:xMove,
        y:yMove,
      });
      gsap.to(".bg",{
        x:xMove *1.7,
        y:yMove,
      });
    });
  },[showContent]);


  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="230"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                SM
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./spidyBg.jpg"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
      <div className='main w-full rotate-[-10deg] scale-[1.7]'>
        <div className="landing overflow-hidden relative w-full h-screen bg-black">
          <div className='navbar absolute top-0 left-0 w-full z-[10] py-2 px-5 '>
            <div className='logo flex gap-5 '>
              <div className='lines flex flex-col gap-[5px]' >
                <div className='line w-13 h-2 bg-white'></div>
                <div className='line w-8 h-2 bg-white'></div>
                <div className='line w-5 h-2 bg-white'></div>
              </div>
              <h3 className='text-4xl mt[-7px] leading-none text-white'>Spider-Man</h3>
            </div>
          </div>
          
          <div className="imagesdiv relative overflow-hidden w-full h-screen">
            <img
                className=" sky  absolute scale-[1.6] rotate-[-10deg] bg top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
            <img className='bg absolute scale-[1.8] rotate-[-15deg] top-0 left-0 w-full h-full object-cover ' src="./spii.png" alt="" />
            
          <div className='text text-white flex flex-col absolute gap-5 top-8 left-1/2 -translate-x-1/2'>
            <h1 className='text-[6rem] leading-none -ml-10'>The</h1> 
            <h1 className='text-[12rem] leading-none ml-1'>Amazing</h1> 
            <h1 className='text-[7.5rem] leading-none ml-33' >Spider-Man</h1>
          </div>
            <img className=' spi absolute to-0 left-1/2 -translate-x-1/2 bottom-[-150%] rotate-[-10deg] scale-[3]' src="./SpidyBoy.png" alt="" />
          </div>
          <div className='btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent'>
          </div>
        </div>
        </div>
      )}

    </>
    )
}

export default App
