import React, {useState, useEffect} from 'react';
import "./Navbar.css";

function Navbar() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100)
            {
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, []);

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
                <img className="navbar__logo"
                 src="https://pbs.twimg.com/media/FB_Pk4LVUAoY9QP?format=png&name=small"
                 alt="Apitongcm logo" />

                 
                
        </div>
    )
}

export default Navbar;
