const Sedes = () => {
  return (
    <main className="burguer-content">
      <section className="burguer-content__sedes-hero-image">
        <img src="https://i.ibb.co/v3HVvw8/la-mejor-office-1536x653.jpg" alt="La mejor burguer de la ciudad" />
      </section>
      <section className="burguer-sedes">
        <div className="burguer-sedes__sede">
          <div className="burguer-sedes__img img1"></div>
        </div>
        <div className="burguer-sedes__sede">
          <div className="burguer-sedes__img img2"></div>
        </div>
        <div className="burguer-sedes__sede">
          <div className="burguer-sedes__img img3"></div>
        </div>
        <div className="burguer-sedes__sede">
          <div className="burguer-sedes__img img4"></div>
        </div>
        <div className="burguer-sedes__sede">
          <div className="burguer-sedes__img img5"></div>
        </div>
        <div className="burguer-sedes__sede">
          <div className="burguer-sedes__img img6">
            <h1 className="burguer-sedes__text">5 Sedes</h1>
          </div>
        </div>
      </section>
      <section className="burguer-content__sedes-reservas-sociales">
        <div className="burguer-message-sedes">
          <p className="burguer-message-sedes__title">
            Burguer Chips celebra todo
          </p>
          <p className="burguer-message-sedes__text">
            Burguers, familia o amigos, cerveza y muy buena onda, son la mejor
            receta para celebrar.
          </p>
          <p className="burguer-message-sedes__text-white">RESERVAS SOCIALES Y EMPRESARIALES</p>
          <p className="burguer-message-sedes__text-yellow">@burgerChips</p>
        </div>
        <img
          className="burguer-content__sedes-reservas-img"
          src="https://i.ibb.co/Ss3dFGY/burger-expertes-comenzales.png"
          alt="burguer experts"
        />
      </section>
    </main>
  );
};
export default Sedes;
