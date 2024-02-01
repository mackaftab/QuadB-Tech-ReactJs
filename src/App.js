import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Form from './components/Form/Form';


function App() {
  return (
    <BrowserRouter>
    <div className="app">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/products/:id' element={<ProductDetail/>}/>
      <Route path='/form' element={<Form/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
