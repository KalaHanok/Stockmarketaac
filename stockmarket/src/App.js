import './App.css';
import Marque from './components/Marque';
import {Route,Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Info_stock from './components/Info_stock';
import Home from './components/Home';
import EleEconomics from './components/EleEconomics';
import EquityMarketsM from './components/EquityMarketsM';
import InvestmentInPortfolios from './components/InvestmentInPortfolios';
function App() {
  return (
    <div className='app'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path=':id/:days' element={<Info_stock/>}/>
        <Route path='/ElementryEconomics' element={<EleEconomics/>}/>
        <Route path='/Equitymarkets' element={<EquityMarketsM/>}/>
        <Route path='/InvestmentInPortfolios' element={<InvestmentInPortfolios/>}/>
      </Routes>
    </div>
  );
}
export default App;
