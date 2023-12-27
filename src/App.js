import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Accomodation from './pages/Accomodation/Accomodation';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/accomodation/:id' element = {<Accomodation/>}></Route>
        <Route path='/*' element = {<ErrorPage/>}></Route>
      </Routes>
    </div>
  );

  
}

export default App;
