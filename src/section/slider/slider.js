import React, { useState, useEffect } from "react";
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import PararF from "../../img/PararF.png";
import PararB from "../../img/PararB.png";
import PensarF from "../../img/PensarF.png";
import PensarB from "../../img/PensarB.png";
import ActuarF from "../../img/ActuarF.png";
import ActuarB from "../../img/ActuarB.png";
import file from "../../files/AboutUs.pdf";
const initialStateSrc = ["Actuar", "Pensar", "Parar"];
function Slider() {
  const [index, setIndex] = useState(1);
  const [state, setState] = useState(["#FFDD00", "#C4C4C4", "white"]);
  const [statePoints, setStatePoints] = useState(["#C4C4C4", "#FFDD00", "#C4C4C4"]);
  const [stateSrc, setStateSrc] = useState(["Actuar", "Pensar", "Parar"])
useScrollPosition(
  ({ prevPos, currPos }) => {
    if(Math.abs(currPos.y) > 300){
      if(!document.getElementById("title").classList.contains("bluranim")){
        document.getElementById("title").classList.add("bluranim");
      }
      
      if(!document.getElementById("textTitle").classList.contains("bluranim2")){
        document.getElementById("textTitle").classList.add("bluranim2");
      }
    }
    if(Math.abs(currPos.y) > 550){
       if(!document.getElementById("fballcontainer").classList.contains("SUUC")){
        document.getElementById("fballcontainer").classList.add("SUUC");
      }
      if(!document.getElementById("mainballcontainer").classList.contains("SUUC")){
        document.getElementById("mainballcontainer").classList.add("SUUC");
      }
      if(!document.getElementById("lballcontainer").classList.contains("SUUC")){
        document.getElementById("lballcontainer").classList.add("SUUC");
      }
       if(!document.getElementById("options").classList.contains("SUUC")){
        document.getElementById("options").classList.add("SUUC");
     }
       if(!document.getElementById("descrubicomo").classList.contains("SUUC")){
        document.getElementById("descrubicomo").classList.add("SUUC");
     }
    
    }
   if(Math.abs(currPos.y) > 950){
     console.log("s3");
   }
    
  },
  []
)
  useEffect(() => {
     //console.log(state);
  
   document.getElementById("pointf").style["color"] = "#C4C4C4";
  document.getElementById("pointm").style["color"] = "#FFDD00";
  document.getElementById("pointl").style["color"] = "#C4C4C4";
  }, []);
 
  const next = (e) => {
    
    let findex = index;
    
    //console.log(findex);
   if(e == "p"){
     setIndex(index + 1);
     findex = findex + 1;
     
   
     if(findex > 2){
       setIndex(0);
       findex = 0;
        //console.log(findex);
     }
     
   } else {
     //console.log("naa");
     setIndex(index - 1);
     findex = findex - 1;
    // console.log(findex);
     if(findex < 0){
       
       setIndex(2);
       findex = 2;
        //console.log(findex);    
     }
      
   }
   let Left = findex + 2;
   let Right = findex + 1;
   
   if(Left > 2){
     Left = Left - 3;
   }
   if(Right > 2){
     Right = Right - 3;
   }
    console.log([Left, findex, Right]);
  
  
 document.getElementById("pointf").style["color"] = statePoints[Left];
  document.getElementById("pointm").style["color"] = statePoints[findex];
  document.getElementById("pointl").style["color"] = statePoints[Right];
  setStateSrc([initialStateSrc[Left], initialStateSrc[findex], initialStateSrc[Right]])
  };
 
  
  //#FFDD00
  //#C4C4C4
  //#whimte
 

  return (
     <section id="SliderSection">
        <div className="content">
            <h2 id="title">La vida te pide desiciones</h2>
            <p id="textTitle">te damos un <span>espacio</span> y un <span>metodo</span> para...</p>
        </div>
        <div className="slider">
          <div id="fballcontainer" className="fball">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                 <img src={require(`../../img/${stateSrc[0] + "F.png"}`).default} alt="Avatar" />
              </div>
               <div className="flip-card-back">
                 <img src={require(`../../img/${stateSrc[0] + "B.png"}`).default} alt="Avatar" />
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
                   <img src={require(`../../img/${stateSrc[2] + "F.png"}`).default} alt="Avatar" />
               </div>
               <div className="flip-card-back">
                   <img src={require(`../../img/${stateSrc[2] + "B.png"}`).default} alt="Avatar" />
               </div>
                 
             </div>  
        </div>
            
           </div>
           
        <div className="actions">
          <div className="options" id="options">
           <svg  onClick={() => next("p")} id="buttonp" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd"  clip-rule="evenodd" d="M21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.878681 23.1213C0.316071 22.5587 0 21.7956 0 21V3C0 2.20435 0.316071 1.44129 0.878681 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0ZM11.469 15.969C11.3282 16.1098 11.2491 16.3008 11.2491 16.5C11.2491 16.6992 11.3282 16.8902 11.469 17.031C11.6098 17.1718 11.8008 17.2509 12 17.2509C12.1992 17.2509 12.3902 17.1718 12.531 17.031L17.031 12.531C17.1008 12.4613 17.1563 12.3786 17.1941 12.2874C17.2319 12.1963 17.2513 12.0987 17.2513 12C17.2513 11.9013 17.2319 11.8037 17.1941 11.7125C17.1563 11.6214 17.1008 11.5387 17.031 11.469L12.531 6.969C12.4613 6.89927 12.3785 6.84395 12.2874 6.80621C12.1963 6.76848 12.0986 6.74905 12 6.74905C11.9014 6.74905 11.8037 6.76848 11.7126 6.80621C11.6215 6.84395 11.5387 6.89927 11.469 6.969C11.3993 7.03873 11.344 7.12152 11.3062 7.21262C11.2685 7.30373 11.2491 7.40138 11.2491 7.5C11.2491 7.59862 11.2685 7.69627 11.3062 7.78738C11.344 7.87848 11.3993 7.96127 11.469 8.031L14.6895 11.25H7.5C7.30109 11.25 7.11032 11.329 6.96967 11.4697C6.82902 11.6103 6.75 11.8011 6.75 12C6.75 12.1989 6.82902 12.3897 6.96967 12.5303C7.11032 12.671 7.30109 12.75 7.5 12.75H14.6895L11.469 15.969Z" fill="#FFDD00"/>
</svg>
           <svg width="14" id="pointf" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="7" cy="7" r="7" fill="currentColor"/>
            </svg>
            <svg width="14" id="pointm" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="7" cy="7" r="7" fill="currentColor"/>
            </svg>
            <svg width="14" id="pointl" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
             <circle cx="7" cy="7" r="7" fill="currentColor"/>
            </svg>
           <svg  onClick={() => next("n")}  id="buttonn" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 0C21.7956 0 22.5587 0.316071 23.1213 0.87868C23.6839 1.44129 24 2.20435 24 3V21C24 21.7956 23.6839 22.5587 23.1213 23.1213C22.5587 23.6839 21.7956 24 21 24H3C2.20435 24 1.44129 23.6839 0.878681 23.1213C0.316071 22.5587 0 21.7956 0 21V3C0 2.20435 0.316071 1.44129 0.878681 0.87868C1.44129 0.316071 2.20435 0 3 0L21 0ZM11.469 15.969C11.3282 16.1098 11.2491 16.3008 11.2491 16.5C11.2491 16.6992 11.3282 16.8902 11.469 17.031C11.6098 17.1718 11.8008 17.2509 12 17.2509C12.1992 17.2509 12.3902 17.1718 12.531 17.031L17.031 12.531C17.1008 12.4613 17.1563 12.3786 17.1941 12.2874C17.2319 12.1963 17.2513 12.0987 17.2513 12C17.2513 11.9013 17.2319 11.8037 17.1941 11.7125C17.1563 11.6214 17.1008 11.5387 17.031 11.469L12.531 6.969C12.4613 6.89927 12.3785 6.84395 12.2874 6.80621C12.1963 6.76848 12.0986 6.74905 12 6.74905C11.9014 6.74905 11.8037 6.76848 11.7126 6.80621C11.6215 6.84395 11.5387 6.89927 11.469 6.969C11.3993 7.03873 11.344 7.12152 11.3062 7.21262C11.2685 7.30373 11.2491 7.40138 11.2491 7.5C11.2491 7.59862 11.2685 7.69627 11.3062 7.78738C11.344 7.87848 11.3993 7.96127 11.469 8.031L14.6895 11.25H7.5C7.30109 11.25 7.11032 11.329 6.96967 11.4697C6.82902 11.6103 6.75 11.8011 6.75 12C6.75 12.1989 6.82902 12.3897 6.96967 12.5303C7.11032 12.671 7.30109 12.75 7.5 12.75H14.6895L11.469 15.969Z" fill="#FFDD00"/>
</svg>  
          </div>
          <button id="descrubicomo"><a href={file} download="true" id="button">Descubri Como</a></button>
        </div>
    </section>
    
  );
}

export default Slider;