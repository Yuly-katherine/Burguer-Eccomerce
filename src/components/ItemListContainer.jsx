const ItemListContainer = (props) => {
  return (
    <div className="burguer-content">
      <img
          className="burguer-content__img1"
          src="https://officeburger.com/wp-content/uploads/2022/01/the-burger-experts.jpg"
          alt="burguer-experts"
        />
      <section className="burguer-content__img2" id="nosotros">
          <div className="burguer-message">
            <h2>Burguer Chips</h2><br />
            <span>
              {props.text}
            </span>
          </div>
        </section>
    </div>
  );
};
export default ItemListContainer;
