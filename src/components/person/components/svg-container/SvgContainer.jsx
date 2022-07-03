import React from "react";
import styling from "./svgcontainer.module.scss";

//assets
import man from "../../../../assets/man.svg";
import woman from "../../../../assets/woman.svg";
import mail from "../../../../assets/mail.svg";
import growingupwoman from "../../../../assets/growing-up-woman.svg";
import growingupman from "../../../../assets/growing-up-man.svg";
import map from "../../../../assets/map.svg";
import phone from "../../../../assets/phone.svg";
import padlock from "../../../../assets/padlock.svg";


const SvgContainer = ({ fetchPerson, setText1, setText2 }) => {
    const svgHoverHandler = (e) => {
      console.log(e.target);
      const name = e.target
      setText1(`My ${name} is`)
      name === "name" ? setText2(fetchPerson.fullname) : setText2(fetchPerson[name])
    
    };
  return (
    <div className={styling.container}>
      <img
        src={fetchPerson.gender === "female" ? woman : man}
        alt="human"
        name="name"
        className={styling.svg}
        onMouseOver={svgHoverHandler}
      />
      <img
        src={mail}
        alt="mail"
        name="email"
        className={styling.svg}
        onMouseOver={svgHoverHandler}
      />
      <img
        src={fetchPerson.gender === "female" ? growingupwoman : growingupman}
        alt="growing"
        name="growingage"
        className={styling.svg}
        onMouseOver={svgHoverHandler}
      />
      <img
        src={map}
        alt="map"
        name="country"
        className={styling.svg}
        onMouseOver={svgHoverHandler}
      />
      <img
        src={phone}
        alt="phone"
        name="phone"
        className={styling.svg}
        onMouseOver={svgHoverHandler}
      />
      <img
        src={padlock}
        alt="padlock"
        name="password"
        className={styling.svg}
        onMouseOver={svgHoverHandler}
      />
    </div>
  );
};

export default SvgContainer;
