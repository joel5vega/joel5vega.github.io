import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import DataAboutMe from "./DataAboutMe";
import "./about.css";
// import 'swiper/css';
// import 'swiper/css/pagination';

//Fotos
import China from "../../assets/photos/china.jpg";
import Susi from "../../assets/photos/susi.jpg";
import Canaan from "../../assets/photos/canaan.jpg";
import XA from "../../assets/photos/xa.jpg";
import TWMS from "../../assets/photos/xa-2016.JPG";

import Redes from "../home/Redes";
////Logos
import { SiHuawei } from "react-icons/si";
import { FiAward } from "react-icons/fi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiServiceLine } from "react-icons/ri";

let photoObj = {
  china: <img src={China} className="photo" />,
  susi: <img src={Susi} className="photo" />,
  xa: <img src={XA} className="photo" />,
  twms: <img src={TWMS} className="photo" />,
  cnn: <img src={Canaan} className="photo" />
};
let logoObj = { seeds: <SiHuawei /> };
const AboutMe = () => {
  return (
    <section id="about">
      <h2>AboutMe</h2>
      <div className="faceta__container">
        {DataAboutMe.map(({ id, name, logo, photo, description, place, link }) => (
          <div key={id} className="faceta">
            <h5>
              {name} {logoObj[logo]}
            </h5>
            <div className="photo">{photoObj[photo]}</div>
            <div className="description">{description}</div>
            <div className="place">{place}</div>
            <a href={link} target="__blank" className="btn">More</a>
          </div>
        ))}
      </div>
    </section>
  );
};
export default AboutMe;
