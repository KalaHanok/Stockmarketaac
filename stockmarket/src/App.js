import './App.css';
import Marque from './components/Marque';
import {Route,Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Info_stock from './components/Info_stock';
import Home from './components/Home';
import ElementryEconomics from './components/ElementryEconomics';
function App() {
  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path=':id/:days' element={<Info_stock/>}/>
      </Routes>
      {/*<Nav/>
      <ElementryEconomics/>*/}
    </div>
  );
}
export default App;
