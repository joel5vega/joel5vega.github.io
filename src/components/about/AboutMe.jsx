import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import DataAboutMe from "./DataAboutMe";
import "./about.css";
// import 'swiper/css';
// import 'swiper/css/pagination';
import AboutItem from "./AboutItem";
//Fotos
import China from "../../assets/photos/china.png";
import Susi from "../../assets/photos/susi.png";
import Canaan from "../../assets/photos/canaan.png";
import XA from "../../assets/photos/xa.png";
import TWMS from "../../assets/photos/xa-2016.png";
// import Bethel from "../../assets/photos/bethel.png";

////Logos
import { SiHuawei } from "react-icons/si";
import { GiUsaFlag } from "react-icons/gi";
import { RiGlobalFill } from "react-icons/ri";
import LogoXA from "../../assets/logo/logo-xa.png";
import LogoCNN from "../../assets/logo/logo-canaan.png";
// import LogoSoldados from "../../assets/logo/logo-ssjj-soldados-de-la-fe.png";

let photoObj = {
  china: <img src={China} className="photo" />,
  susi: <img src={Susi} className="photo" />,
  xa: <img src={XA} className="photo" />,
  twms: <img src={TWMS} className="photo" />,
  cnn: <img src={Canaan} className="photo" />
};
let logoObj = {
  seeds: <SiHuawei />,
  susi: <GiUsaFlag />,
  twms: <RiGlobalFill />,
  cnn: <img className="about__icon" src={LogoCNN} />,
  xa: <img className="about__icon" src={LogoXA} />
};
const AboutMe = () => {
  return (
    <section id="about">
      <h1>AboutMe</h1>
      <div className="faceta__container">
        {DataAboutMe.map(
          ({ id, name, logo, photo, description, place, link }) => (
            <div key={id} className="faceta">
              <AboutItem
                title={name}
                logo={logoObj[logo]}
                photo={photoObj[photo]}
                description={description}
                place={place}
              />
            </div>
          )
        )}
      </div>
    </section>
  );
};
export default AboutMe;
