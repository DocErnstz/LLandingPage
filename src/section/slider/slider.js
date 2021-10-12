import React, { useState, useEffect } from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import PararF from "../../img/PararF.png";
import PararB from "../../img/PararB.png";
import PensarF from "../../img/PensarF.png";
import PensarB from "../../img/PensarB.png";
import ActuarF from "../../img/ActuarF.png";
import ActuarB from "../../img/ActuarB.png";
import file from "../../files/AboutUs.pdf";

function Slider() {
  
  const [stateSrc, setStateSrc] = useState(["Actuar", "Pensar", "Parar"])
useScrollPosition(
  ({ prevPos, currPos }) => {
    var maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if(Math.abs(currPos.y) > (maxY/10)){
      if(!document.getElementById("title").classList.contains("bluranim")){
        document.getElementById("title").classList.add("bluranim");
      }
      
      if(!document.getElementById("textTitle").classList.contains("bluranim2")){
        document.getElementById("textTitle").classList.add("bluranim2");
      }
    }
    if(Math.abs(currPos.y) > (maxY/4)){
       if(!document.getElementById("fballcontainer").classList.contains("SUUC")){
        document.getElementById("fballcontainer").classList.add("SUUC");
      }
      if(!document.getElementById("mainballcontainer").classList.contains("SUUC")){
        document.getElementById("mainballcontainer").classList.add("SUUC");
      }
      if(!document.getElementById("lballcontainer").classList.contains("SUUC")){
        document.getElementById("lballcontainer").classList.add("SUUC");
      }
      
       if(!document.getElementById("descrubicomo").classList.contains("SUUC")){
        document.getElementById("descrubicomo").classList.add("SUUC");
     }
    
    }  
  },
  []
)
  
  
  
  //#FFDD00
  //#C4C4C4
  //#whimte
 

  return (
     <section id="SliderSection">
        <div className="content">
            <h2 id="title">La vida te pide desiciones</h2>
            <p id="textTitle">te damos un <span>espacio</span> y un <span>método</span> para...</p>
        </div>
        <div className="slider query">
          <div id="fballcontainer" className="fball">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                 <img src={require(`../../img/${stateSrc[2] + "F.png"}`).default} alt="Avatar" />
              </div>
               <div className="flip-card-back">
                 <img src={require(`../../img/${stateSrc[2] + "B.png"}`).default} alt="Avatar" />
              </div>
            </div>
           
          </div>
            <div className="mainball" id="mainballcontainer">     
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={require(`../../img/${stateSrc[1] + "F.png"}`).default} alt="Avatar" />
              </div>
              <div className="flip-card-back">
                <img src={require(`../../img/${stateSrc[1] + "B.png"}`).default} alt="Avatar" />
              </div>
               
              </div>    
           </div>
           <div className="lball" id="lballcontainer">
             <div className="flip-card-inner">
               <div className="flip-card-front">
                   <img src={require(`../../img/${stateSrc[0] + "F.png"}`).default} alt="Avatar" />
               </div>
               <div className="flip-card-back">
                   <img src={require(`../../img/${stateSrc[0] + "B.png"}`).default} alt="Avatar" />
               </div>
                 
             </div>  
        </div>
            
           </div>
           
        <div className="actions">
         <button id="descrubicomo"><a href={file} download="AboutTW" id="button">Descubre Como</a></button>

        </div>
    </section>
    
  );
}

export default Slider;