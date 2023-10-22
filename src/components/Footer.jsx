import React from "react";

function Footer(){
    const currYear = new Date().getFullYear();

    return<div>
        <footer>
        <p>Copyright {currYear} </p>
        </footer>
    </div>
}

export default Footer;
