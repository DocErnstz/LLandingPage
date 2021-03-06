import React, { useState } from "react";
import BackGroun3 from "../../img/BackGroun3.png";
import BL from "../../img/BigLight.png";
import ML from "../../img/MiniLight.png";
import SL from "../../img/ShadowLight.png";
import background from "../../img/BackGroun3.png";
import ReactPlayer from "react-player";
import emailjs from "emailjs-com";

import { useForm } from "react-hook-form";
import { useScrollPosition } from '@n8tb1t/use-scroll-position'



function Contact() {
  const [temParams, settemParams] = useState({
  name: "",
  email: "",
  Mensaje: "",
  compañia: "",
});
useScrollPosition(
  ({ prevPos, currPos }) => {
    var maxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;

   if(Math.abs(currPos.y) > (maxY/2)){
     if(!document.getElementById("titleContact").classList.contains("comeandback")){
        document.getElementById("titleContact").classList.add("comeandback");
      }
       if(!document.getElementById("nombre").classList.contains("bluranim2")){
        document.getElementById("nombre").classList.add("bluranim2");
      }
      if(!document.getElementById("email").classList.contains("bluranim2")){
        document.getElementById("email").classList.add("bluranim2");
      }
      if(!document.getElementById("Mensaje").classList.contains("bluranim2")){
        document.getElementById("Mensaje").classList.add("bluranim2");
      }
      if(!document.getElementById("compañia").classList.contains("bluranim2")){
        document.getElementById("compañia").classList.add("bluranim2");
      }
       if(!document.getElementById("consulta").classList.contains("bluranim2")){
        document.getElementById("consulta").classList.add("bluranim2");
      }
         if(!document.getElementById("images").children[0].classList.contains("videoAppear")){
        document.getElementById("images").children[0].classList.add("videoAppear");
      }
      if(!document.getElementById("images").children[1].classList.contains("sizeAppear")){
        document.getElementById("images").children[1].classList.add("sizeAppear");
      }
      if(!document.getElementById("images").children[2].classList.contains("sizeAppear")){
        document.getElementById("images").children[2].classList.add("sizeAppear");
      }
   }
    
  },
  []
)

   const handleChange = (e) => {
    settemParams({ ...temParams, [e.target.name]: e.target.value });
    
  };
       const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    e.target.classList.add("disabled");

    
  }
  return (
     <section id="contactUs">
        <img src={background} alt="" />
      
        <div className="container">
          <div className="content">
            
            <div className="icontent">
              <h3 id="titleContact">Contact Us!</h3>
             <form onSubmit={sendEmail}>
               <input type="name"  id="nombre" name="nombre" placeholder="Nombre Completo"  required onChange={handleChange}/>
               <input type="name" id="compañia" name="compañia" placeholder="Nombre de compañia" onChange={handleChange} />
               <input type="email" id="email" name="email" placeholder="Email" required />
               <textarea type="text" rows="5" cols="50" id="Mensaje" maxlength="165" name="Mensaje" placeholder="Mensaje" required onChange={handleChange}/>
               <input 
               type="submit" id="consulta"  value="Contáctanos"/>
             </form>
            </div>
            <div className="img" id="images">
              <ReactPlayer url="" loop={true} width={"26vw"} height={"26vw"} playing muted playbackRate={1.75}/>
             <img src={BL} alt="" />
             <img src={SL} alt="" />
            </div>
             
          </div>
           
        </div>
       
        
    </section>    
  );
}

export default Contact;
