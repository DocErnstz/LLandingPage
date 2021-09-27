import React from "react";
function Navbar() {
  return (
     <section id="LandSection">
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
                        <li>Home</li>
                        <li>About Us</li>
                    </ul>
                </nav>
                <button>Contact Us</button>
                </div>
            </div>
        </div>
        <div className="content">
            <div className="text">
                <p>Somos una</p>
                <h3>EXPERIENCIA</h3>
                <p>Ayudamos a las personas y equipos a pensar, reflexionar y encontrar ideas</p>
                <button>Descubri Como</button>
            </div>
        </div>
         <svg width="1440" height="475" viewBox="0 0 1440 475" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 342.34C544.368 364.028 234.943 294.625 0 392.223V475H1440V0C1440 0 1296.64 10.0742 1171 70.8368C1025.94 140.988 975.632 320.651 760 342.34Z" fill="white"/>
        </svg>
    </section>
    
  );
}

export default Navbar;
