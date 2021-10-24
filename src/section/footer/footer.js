import React from "react";
import IG from "../../img/Instagram.png";
import LI from "../../img/Linkedin.png";
import FB from "../../img/ThinkWeek.png";

function Footer() {
  return (
      
     <section id="Footer">
       <div class="footer1">
           <div class="container">
               <div className="array">
                   <div className="responsive">
                       <h3>Seguinos en redes</h3>
                    <div className="row">
                        <a href=""><img src={IG} alt="" /></a>
                        <a href=""><img src={LI} alt="" /></a>
                    </div>
                       
                   </div>
                    <div  className="responsive">
                       <h3>Contáctanos </h3>
                        <div className="column">
                           <div className="row">
                               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L13.06 12.34C12.41 12.75 11.59 12.75 10.94 12.34L4.4 8.25C4.29973 8.19371 4.21192 8.11766 4.14189 8.02645C4.07186 7.93525 4.02106 7.83078 3.99258 7.71937C3.96409 7.60796 3.9585 7.49194 3.97616 7.37831C3.99381 7.26468 4.03434 7.15581 4.09528 7.0583C4.15623 6.96079 4.23632 6.87666 4.33073 6.811C4.42513 6.74533 4.53187 6.69951 4.6445 6.6763C4.75712 6.65309 4.87328 6.65297 4.98595 6.67595C5.09863 6.69893 5.20546 6.74453 5.3 6.81L12 11L18.7 6.81C18.7945 6.74453 18.9014 6.69893 19.014 6.67595C19.1267 6.65297 19.2429 6.65309 19.3555 6.6763C19.4681 6.69951 19.5749 6.74533 19.6693 6.811C19.7637 6.87666 19.8438 6.96079 19.9047 7.0583C19.9657 7.15581 20.0062 7.26468 20.0238 7.37831C20.0415 7.49194 20.0359 7.60796 20.0074 7.71937C19.9789 7.83078 19.9281 7.93525 19.8581 8.02645C19.7881 8.11766 19.7003 8.19371 19.6 8.25Z" fill="white"/>
</svg>
                                <p>info@lorem.company</p>
                           </div>
                           <div className="row">
                               <svg className="responsive" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.23 15.26L16.69 14.97C16.3913 14.9349 16.0886 14.968 15.8046 15.0667C15.5205 15.1654 15.2625 15.3273 15.05 15.54L13.21 17.38C10.3712 15.9362 8.06379 13.6288 6.62001 10.79L8.47001 8.94001C8.90001 8.51001 9.11001 7.91001 9.04001 7.30001L8.75001 4.78001C8.69332 4.29219 8.4592 3.84225 8.09225 3.51586C7.72529 3.18947 7.25112 3.00943 6.76001 3.01001H5.03001C3.90001 3.01001 2.96001 3.95001 3.03001 5.08001C3.56001 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z" fill="white"/>
</svg>
                               <p>(+34) 678672031</p>
                           </div>
                       </div>
                   </div>
                    <div className="responsive">
                       <h3>Encontranos</h3>
                       <div className="row">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C11.337 11.5 10.7011 11.2366 10.2322 10.7678C9.76339 10.2989 9.5 9.66304 9.5 9C9.5 8.33696 9.76339 7.70107 10.2322 7.23223C10.7011 6.76339 11.337 6.5 12 6.5C12.663 6.5 13.2989 6.76339 13.7678 7.23223C14.2366 7.70107 14.5 8.33696 14.5 9C14.5 9.66304 14.2366 10.2989 13.7678 10.7678C13.2989 11.2366 12.663 11.5 12 11.5Z" fill="white"/>
</svg>
                           <p>Argentina</p>
                       </div>
                   </div>
                    <div className="responsive">
                       <h3>Avisos Legales</h3>
                       <p>Lorem ipsum 2021 © Todos los derechos reservados.</p>
                   </div>
                    
               </div>
           </div>
       </div>
       <div class="footer2">
           <h4>Powered by The Phi.Lab </h4>
           </div>     
    </section>
    
  );
}

export default Footer;
