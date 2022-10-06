import './App.css';
import Marque from './components/Marque';
import {Route,Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Info_stock from './components/Info_stock';
import Home from './components/Home';
function App() {
  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path=':id' element={<Info_stock/>}/>
      </Routes>
    </div>
  );
}
export default App;
