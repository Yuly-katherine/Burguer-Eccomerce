import React, { useState } from "react";

const Carta = () => {
  const [numPages, setNumPages] = useState(2);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="burguer-content">
      <section className="burguer-content__carta-hero-image">
        <h1 className="burguer-content__carta-text">
          MENOS BLA BLA Y MÁS HAMBURGUESAS
        </h1>
      </section>
      <section className="burguer-content__carta">
        <h2 className="burguer-content__carta-title">CARTA BURGUER CHIPS</h2>
        <iframe
          className="burguer-content__carta-files"
          src="../../public/Carta.pdf"
        ></iframe>
      </section>
    </div>
  );
};
export default Carta;
