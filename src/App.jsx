
import CustomNavbar from './components/CustomNavbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'
import Footer from './components/Footer.jsx'

import './App.css'

const App = () => {
  let message = 'En este lugar somos buena onda, creemos que lo bueno se comparte,nos gusta dejarla toda en la parrilla, amamos que sientas que este es tu lugary que te lleves siempre la mejor energía en forma de hamburguesa.'


  return(
    <div className="burguer">
    <CustomNavbar/>
    <ItemListContainer text={message}/>
    <Footer />
    </div>
  )
}
export default App
