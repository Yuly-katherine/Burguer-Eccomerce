import { FaFacebook,FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="burguer-footer">
      <div className="burguer-domicile">
        <img
          className="motorcycle-img"
          src="https://officeburger.com/wp-content/uploads/2022/01/domicilios-office-burger.svg"
        />
        <a className="button-domicile" href="./domicilios.html">
          Domicilios
        </a>
      </div>
      <div className="burguer-social-media">
        <div className="burguer-social-media__type">
        <FaInstagram />
          <span>@burgerChips</span>
        </div>
        <div className="burguer-social-media__type">
          <FaFacebook />
          <span>Burger Chips</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
