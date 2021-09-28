import React, { useState } from "react";
import BackGroun3 from "../../img/BackGroun3.png";
import BL from "../../img/BigLight.png";
import ML from "../../img/MiniLight.png";
import ReactPlayer from "react-player";
import video from "../../files/video.mp4";
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
   if(Math.abs(currPos.y) > 1150){
     if(!document.getElementById("titleContact").classList.contains("SUUC")){
        document.getElementById("titleContact").classList.add("SUUC");
      }
       if(!document.getElementById("nombre").classList.contains("SUUC")){
        document.getElementById("nombre").classList.add("SUUC");
      }
      if(!document.getElementById("email").classList.contains("SUUC")){
        document.getElementById("email").classList.add("SUUC");
      }
      if(!document.getElementById("Mensaje").classList.contains("SUUC")){
        document.getElementById("Mensaje").classList.add("SUUC");
      }
      if(!document.getElementById("compañia").classList.contains("SUUC")){
        document.getElementById("compañia").classList.add("SUUC");
      }
       if(!document.getElementById("consulta").classList.contains("SUUC")){
        document.getElementById("consulta").classList.add("SUUC");
      }

      if(!document.getElementById("images").children[0].classList.contains("sizeAppear")){
        document.getElementById("images").children[0].classList.add("sizeAppear");
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
    console.log(temParams);
  };
       const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
  const sendEmail = (e) => {
    e.preventDefault();
    
    e.target.classList.add("disabled");

    emailjs.sendForm("service_x04vuvd", "template_d9zpllb", e.target, "user_Hy82PGE5Z3eRCYvWWHAEi")
    .then((result) => {
      e.target.reset();
       e.target.classList.remove("disabled");
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
  }
  return (
     <section id="contactUs">
      
       <div className="img">
         <div className="imgcontainer" id="images">
           <div className="flexcontainer">
             <ReactPlayer url={video}   width={"50%"} height={"30%"} playing muted playbackRate={1.75}/>
           </div>
           <div className="flexcontainer">
             <img src={BL} alt="" />
           </div>
          <div className="flexcontainer">
             <img src={ML} alt="" />
           </div>
          
         </div>
          
       
       </div> 
        <div className="container">
          <div className="content">
            <div className="icontent">
              <h3 id="titleContact">Contact Us</h3>
             <form onSubmit={sendEmail}>
               <input type="name"  id="nombre" name="nombre" placeholder="Nombre Completo"  required onChange={handleChange}/>
               <input type="email" id="email" name="email" placeholder="Mail" required />
               <input type="name" id="compañia" name="compañia" placeholder="Nombre de compañia" onChange={handleChange} pattern="+54 9 11 [0-9]{4}-[0-9]{4}"/>
               <textarea type="text" rows="5" cols="50" id="Mensaje" maxlength="165" name="Mensaje" placeholder="Mensaje" required onChange={handleChange}/>
               <input 
               type="submit" id="consulta"  value="Consulta"/>
             </form>
            </div>
             
          </div>
           
        </div>
       
        
    </section>    
  );
}

export default Contact;