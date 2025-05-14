import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import Nosotros from "./views/Nosotros.jsx";
import Carta from "./views/Carta.jsx";
import Sedes from "./views/Sedes.jsx";
import TrabajaConNosotros from "./views/TrabajaConNosotros.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import Carrito from "./components/Cart.jsx"
import CartContextProvider from "./components/CartContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter className="burguer" basename="/Burguer-Eccomerce">
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="/sedes" element={<Sedes />} />
          <Route
            path="/categoria/:idCategoria"
            element={<ItemListContainer />}
          />
          <Route
            path="/producto/:idProducto"
            element={<ItemDetailContainer />}
          />
          <Route path="/trabajaConNosotros" element={<TrabajaConNosotros />} />
          <Route path="/carrito" element={<Carrito />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
     </CartContextProvider>
  );
};
export default App;
