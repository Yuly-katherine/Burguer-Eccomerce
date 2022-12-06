import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import Nosotros from "./views/Nosotros.jsx";
import Carta from "./views/Carta.jsx";
import Sedes from "./views/Sedes.jsx";
import TrabajaConNosotros from "./views/TrabajaConNosotros.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter className="burguer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Nosotros/>} />
        <Route path="/carta" element={<Carta/>} />
        <Route path="/sedes" element={<Sedes/>} />
        <Route path="/domicilios" element={<ItemListContainer/>} />
        <Route path="/product/:idProduct" element={<ItemDetailContainer/>} />
        <Route path="/trabajaConNosotros" element={<TrabajaConNosotros/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default App;
