import Aplicacion from "./Components/Aplicacion";
import {Route, Router, Routes} from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/Portfolio' element={<Aplicacion/>}/>
      </Routes>

    </div>
  );
}

export default App
