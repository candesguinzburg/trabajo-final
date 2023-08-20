import { Routes, Route} from "react-router-dom"
import './css/App.css';
import Ubicacion from "./componentes/ubicacion";
import Main from "./componentes/main";
import Deportes from "./componentes/deportes.jsx";
import Informacion from "./componentes/informacion";
import Header from "./componentes/header";
import Informacion2 from "./componentes/informacion2";


const Nav = () => {
  return (
    <div>
  <Header></Header>
    <Routes>
    <Route path="/" element={<Main/>}></Route>
    <Route path="/Main" element={<Main/>}></Route>
    <Route path="/Informacion" element={<Informacion/>}></Route>
    <Route path="/Deportes" element={<Deportes/>}></Route>
    <Route path="/Ubicacion" element={<Ubicacion/>}></Route>
<Route path="Informacion2" element={<Informacion2/>}></Route>
  </Routes>
  </div>
  );
}

  

export default Nav;