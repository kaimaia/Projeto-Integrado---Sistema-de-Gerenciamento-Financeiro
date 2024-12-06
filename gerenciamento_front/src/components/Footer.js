import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const Footer = () => {
    return (
        <div>
            <footer className="text-center py-3" style={{ backgroundColor: "#121212" }}>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2" aria-label="Twitter">
                <i className="bi bi-twitter" style={{ fontSize: "1.5rem" }}></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2" aria-label="Instagram">
                <i className="bi bi-instagram" style={{ fontSize: "1.5rem" }}></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2" aria-label="YouTube">
                <i className="bi bi-youtube" style={{ fontSize: "1.5rem" }}></i>
                </a>
            </footer>
        </div>
    )
}

export default Footer;