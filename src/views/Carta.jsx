// import Iframe from "react-iframe";
import React, { useState } from "react";
import { Document, Page } from "react-pdf";

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
        {/* <Iframe
          className="burguer-content__carta-files"
          src="https://i.ibb.co/Wy7tgW3/Carta-Office-Burger.jpg"
        /> */}
        <Document
          file="https://i.ibb.co/Wy7tgW3/Carta-Office-Burger.jpg"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </section>
    </div>
  );
};
export default Carta;
