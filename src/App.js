import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Accomodation from './components/Accomodation/Accomodation';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/accomodation/:id' element = {<Accomodation/>}></Route>
        
      </Routes>
    
    </div>
  );
}

export default App;
