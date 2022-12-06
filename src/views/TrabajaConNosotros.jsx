const TrabajaConNosotros = () => {
  return (
    <div className="burguer-content">
      <section className="burguer-nosotros__img1"></section>
      <section className="burguer-nosotros__formulario">
        <h1 className="burguer-nosotros__formulario-text">
          TRABAJA EN LA MEJOR BURGUER DE LA CIUDAD🌟
        </h1>
        <form
          className="burguer-nosotros__formulario-formulario"
          action="https://formsubmit.co/kathegomv@gmail.com"
          method="POST"
          target="_blank"
          id="formulario-nosotros"
        >
          <div className="burguer-nosotros__info">
            <label className="burguer-nosotros__label">
              Cargo
            </label>
            <select className="burguer-nosotros__input" name="cargo" required>
              <option value=""></option>
              <option value="Admin">Administrador</option>
              <option value="cajero">Cajero</option>
              <option value="parrillero">Parrillero</option>
              <option value="mesa">Servicio de mesa</option>
              <option value="ayudante">Ayudante de cocina</option>
            </select>
          </div>
          <div className="burguer-nosotros__info">
            <label className="burguer-nosotros__label">
              Tu Nombre
            </label>
            <input
              className="burguer-nosotros__input"
              type="text"
              name="nombre"
              required
            />
          </div>
          <div className="burguer-nosotros__info">
            <label className="burguer-nosotros__label" >
              Edad
            </label>
            <input
              className="burguer-nosotros__input"
              type="number"
              name="edad"
              min="1"
              pattern="^[0-9]+"
              required
            />
          </div>
          <div className="burguer-nosotros__info">
            <label className="burguer-nosotros__label">
              Tu correo electrónico
            </label>
            <input
              className="burguer-nosotros__input"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="burguer-nosotros__info">
            <label className="burguer-nosotros__label">
              Número de contacto
            </label>
            <input
              className="burguer-nosotros__input"
              type="numero"
              name="numero"
              min="1"
              pattern="^[0-9]+"
              required
            />
          </div>
          <input
            className="burguer-nosotros__submit"
            type="submit"
            value="Enviar oferta"
          />
        </form>
      </section>
    </div>
  );
};
export default TrabajaConNosotros;
