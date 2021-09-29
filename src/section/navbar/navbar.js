import React from "react";
import file from "../../files/AboutUs.pdf";
import video from "../../files/Clock_Face_3Videvo.mov";
import Curve from "../../img/Curveimg.png";
import ReactPlayer from "react-player";
function Navbar() {
  return (
     <section id="LandSection">
            <ReactPlayer url={video}  loop={true} width={"1500px"} height={"1050px"} playing muted playbackRate={1.75} className="react-player"/>
           <img src={Curve} alt="" />
      <div className="navbar">
            <div className="nav">
                <div className="nav_brand">
                   <svg width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M44.3171 13.3739C40.5263 5.45551 32.5542 0 23.3348 0C10.449 0 0 10.653 0 23.796C0 36.939 10.449 47.592 23.3348 47.592C28.5859 47.592 33.4331 45.8263 37.3304 42.8337C39.1636 41.4302 40.7838 39.7596 42.142 37.8762C41.0945 40.1399 39.8117 42.2768 38.3335 44.2462C39.3722 45.7674 40.3266 47.352 41.1877 49C44.7032 41.3487 46.6652 32.8055 46.6652 23.796C46.6696 20.0609 45.8263 16.525 44.3171 13.3739ZM18.6696 23.8277C18.6696 25.1406 17.6753 26.1548 16.3348 26.1548C14.9943 26.1548 14 25.1406 14 23.8277V23.7734C14 22.4604 14.9943 21.4463 16.3348 21.4463C17.6753 21.4463 18.6696 22.4604 18.6696 23.7734V23.8277ZM25.6696 23.8277C25.6696 25.1406 24.6753 26.1548 23.3348 26.1548C21.9943 26.1548 21 25.1406 21 23.8277V23.7734C21 22.4604 21.9943 21.4463 23.3348 21.4463C24.6753 21.4463 25.6696 22.4604 25.6696 23.7734V23.8277ZM32.6696 23.8277C32.6696 25.1406 31.6753 26.1548 30.3348 26.1548C28.9943 26.1548 28 25.1406 28 23.8277V23.7734C28 22.4604 28.9943 21.4463 30.3348 21.4463C31.6753 21.4463 32.6696 22.4604 32.6696 23.7734V23.8277Z" fill="white"/>
                    </svg>
                    <div className="letters">
                        <h4>Think</h4>
                        <p>Week</p>
                    </div> 
                </div>
                <div className="info">
                    <nav>
                    <ul>
                        <li><svg width="49" height="45" viewBox="0 0 49 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.60217 0C4.32173 0 0 3.93502 0 8.74316V35.8747C0 40.6828 4.32163 44.6165 9.60217 44.6165H39.3994C44.6799 44.6165 49 40.6828 49 35.8747V8.74316C49 3.93511 44.6799 0 39.3994 0H9.60217ZM12.0173 7.36261C14.5491 7.36261 16.1086 8.87604 16.1568 10.8654C16.1568 12.8109 14.549 14.3668 11.9683 14.3668H11.9208C9.43711 14.3668 7.83181 12.811 7.83181 10.8654C7.83181 8.87608 9.48569 7.36261 12.0172 7.36261H12.0173ZM33.8357 16.6607C38.705 16.6607 42.3551 19.5586 42.3551 25.7859V37.4113H34.9552V26.5654C34.9552 23.8399 33.8842 21.9804 31.2063 21.9804C29.1619 21.9804 27.9433 23.2337 27.4083 24.4444C27.2128 24.8776 27.1648 25.4825 27.1648 26.0885V37.4113H19.7648C19.7648 37.4113 19.862 19.0386 19.7648 17.1362H27.1663V20.0074C28.1497 18.6259 29.9087 16.6607 33.8357 16.6607V16.6607ZM8.2683 17.1377H15.6682V37.4114H8.2683V17.1377Z" fill="white"/>
</svg>
</li>
                        <li><svg width="52" height="45" viewBox="0 0 52 45" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.993 14.9695C21.2189 14.9695 17.3228 18.3351 17.3228 22.4591C17.3228 26.5831 21.2189 29.9487 25.993 29.9487C30.7671 29.9487 34.6632 26.5831 34.6632 22.4591C34.6632 18.3351 30.7671 14.9695 25.993 14.9695ZM51.9971 22.4591C51.9971 19.3577 52.0296 16.2843 51.828 13.1885C51.6264 9.59257 50.6767 6.40122 47.6327 3.77173C44.5822 1.13662 40.8943 0.32193 36.7316 0.147754C33.1412 -0.0264217 29.5834 0.00167121 25.9995 0.00167121C22.4092 0.00167121 18.8513 -0.0264217 15.2675 0.147754C11.1047 0.32193 7.4103 1.14224 4.3663 3.77173C1.3158 6.40684 0.372678 9.59257 0.171046 13.1885C-0.0305868 16.2899 0.00193466 19.3633 0.00193466 22.4591C0.00193466 25.5549 -0.0305868 28.6339 0.171046 31.7297C0.372678 35.3256 1.3223 38.517 4.3663 41.1465C7.41681 43.7816 11.1047 44.5963 15.2675 44.7705C18.8578 44.9446 22.4157 44.9165 25.9995 44.9165C29.5899 44.9165 33.1477 44.9446 36.7316 44.7705C40.8943 44.5963 44.5887 43.776 47.6327 41.1465C50.6832 38.5114 51.6264 35.3256 51.828 31.7297C52.0361 28.6339 51.9971 25.5606 51.9971 22.4591ZM25.993 33.9828C18.6107 33.9828 12.6527 28.8362 12.6527 22.4591C12.6527 16.082 18.6107 10.9354 25.993 10.9354C33.3754 10.9354 39.3333 16.082 39.3333 22.4591C39.3333 28.8362 33.3754 33.9828 25.993 33.9828ZM39.8796 13.1547C38.156 13.1547 36.7641 11.9524 36.7641 10.4635C36.7641 8.97453 38.156 7.77216 39.8796 7.77216C41.6033 7.77216 42.9952 8.97453 42.9952 10.4635C42.9957 10.817 42.9155 11.1672 42.7591 11.4939C42.6027 11.8206 42.3732 12.1175 42.0838 12.3675C41.7944 12.6175 41.4507 12.8157 41.0725 12.9508C40.6943 13.0859 40.2889 13.1552 39.8796 13.1547Z" fill="white"/>
</svg>
</li>
                        <li>Home</li>
                        <li><a href={file} download="true">About Us</a></li>
                    </ul>
                </nav>
                <a href="#contactUs"><p>Contact Us</p></a>
                </div>
            </div>
        </div>
        <div className="content">
          
            <div className="text">
                <p>Somos una</p>
                <h3>EXPERIENCIA</h3>
                <p>Ayudamos a las personas y equipos a pensar, reflexionar y encontrar ideas</p>
                <button><a href={file} download="true">Descubri Como</a></button>
            </div>
        </div>
        
    </section>
    
  );
}

export default Navbar;
