import { Link } from "react-router-dom";

const Nosotros = () => {
  return (
    <div className="burguer-content">
      <img
        className="burguer-content__nosotros-hero-image"
        src="https://officeburger.com/wp-content/uploads/2022/01/the-burger-experts.jpg"
        alt="hero-image"
      />
      <section className="burguer-content__nosotros-img">
        <div className="burguer-message">
          <p className="burguer-message__title">Burger Chips</p>
          <p className="burguer-message__text">
            En este lugar somos buena onda,
            <br />
            creemos que lo bueno se comparte, <br />
            nos gusta dejarla toda en la parrilla, <br />
            amamos que sientas que
          </p>
          <p className="burguer-message__text-cursive">
            este es tu lugar
          </p>
          <p className="burguer-message__text">
            y que te lleves siempre <br />
            la mejor energía <br />
            en forma de hamburguesa.
          </p>
          <p className="burguer-message__text-cursive">Expertos en buena onda</p>
          <p className="burguer-message__text">Expertos</p>
          <p className="burguer-message__text-black">En pasarla bien.</p>
        </div>
      </section>
      <section className="burguer-content__nosotros-carta">
        <Link className="button-carta" to="/carta">
          Carta
          <img
            src="https://i.ibb.co/tHMgWQ8/emoticon.png"
            alt="carta"
          />
        </Link>
      </section>
    </div>
  );
};
export default Nosotros;
