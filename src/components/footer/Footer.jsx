import styling from "./Footer.module.scss";
import logo from "../../assets/design.svg";

const Footer = () => {
  return (
    <div className={styling.foot}>
      <img className={styling.image} src={logo} alt="windrose" />
      <p className={styling.after}>mg-firtina</p>
    </div>
  );
};

export default Footer;
