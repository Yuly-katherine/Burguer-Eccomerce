const PaymentOptions = () => {
  return (
    <div className="opciones-pago">
      <h5>Opciones de pago</h5>
      <span>Aceptamos los siguientes métodos de pago:</span>
      <ul className="opciones-pago__lista">
        <li className="opcion_imagen">
          <img
            src="https://www.falabella.com.co/static/RDF/site/basket/img/medios-03.svg"
            alt="amex"
          />
        </li>
        <li className="opcion_imagen">
          <img
            src="https://www.falabella.com.co/static/RDF/site/basket/img/medios-04.svg"
            alt="Mastercard"
          />
        </li>
        <li className="opcion_imagen">
          <img
            src="https://www.falabella.com.co/static/RDF/site/basket/img/fbra_card_visa_new.png"
            alt="Visa"
          />
        </li>
        <li className="opcion_imagen">
          <img
            src="https://www.falabella.com.co/static/RDF/site/basket/img/medios-06.svg"
            alt="Dinners"
          />
        </li>
        <li className="opcion_imagen">
          <img
            src="https://www.falabella.com.co/static/RDF/site/basket/img/medios-07.svg"
            alt="pse"
          />
        </li>
      </ul>
    </div>
  );
};

export default PaymentOptions;
