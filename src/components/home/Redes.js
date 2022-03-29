import React from "react";
import { FaLinkedinIn, FaGoodreads, } from "react-icons/fa";
import { BsGithub, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
// import github from"../images/github.png";
// import { Link } from "react-router-dom";
const Redes = () => {
    return (
        // <div className="header__socials">
        <div className="redes">
            <a href="https://linkedin.com/in/joel-pablo" target="_blank"rel='noreferrer'><FaLinkedinIn /></a>
            <a href="https://twitter.com/joel5vega" target="_blank"rel='noreferrer'><BsTwitter /></a>
            <a href="https://github.com/joel5vega" target="_blank" rel='noreferrer'><BsGithub /></a>
            <a href="https://fb.com/joel5vega" target="_blank"rel='noreferrer'><BsFacebook /></a>
            <a href="https://www.goodreads.com/skopos" target="_blank" rel='noreferrer'><FaGoodreads /></a>
            <a href="https://instagram.com/joelpabloxa" target="_blank"rel='noreferrer'><BsInstagram /></a>
        </div>
    );
}
export default Redes;