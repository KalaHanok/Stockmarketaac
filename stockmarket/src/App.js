import './App.css';
import {Route,Routes} from 'react-router-dom'
import Nav from './components/Nav';
import Info_stock from './components/Info_stock';
import Home from './components/Home';
import EleEconomics from './components/EleEconomics';
import EquityMarketsM from './components/EquityMarketsM';
import InvestmentInPortfolios from './components/InvestmentInPortfolios';
import Contact from './components/Contact';
import About from './components/About';
import FooterOfStocks from './components/FooterOfStocks';
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
        <Route path='/contactus' element={<Contact/>}></Route>
        <Route path='/aboutus' element={<About/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
