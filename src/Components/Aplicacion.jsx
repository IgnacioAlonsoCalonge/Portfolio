import SobreMi from './About_me/SobreMi';
import Conocimientos from './Conocimientos/Conocimientos';
import Introduccion from './Introduccion/Introduccion';
import Selector from './Selector/Selector';

const Aplicacion = () => {
  return (
        <div>
            <Introduccion/>
            <SobreMi/>
            <Selector/>
            <Conocimientos/>
        </div>
  )
}

export default Aplicacion