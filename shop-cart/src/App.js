import './App.css';
import Navbar from './Navbar/Navbar';
import { BrowserRouter, Routes, Route , Navigate} from 'react-router-dom';
import Sign from './components/Signup/Sign'
import Login from './components/Login/Login'
import Main from './components/Main/Main'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Footer/Footer';
import mens_banner from '../src/Assets/banner_mens.png';
import women_banner from '../src/Assets/banner_women.png';
import kids_banner from '../src/Assets/banner_kids.png'
import './App.css';


const user = localStorage.getItem("token");
function App() {

  return (
    <div className="App">
      <BrowserRouter>
      < Navbar/>
        <Routes>

        {user && <Route path="/" exact element={<Main />} />}
    <Route path='/signup' element={<Sign/>}/>
    <Route path='/login' element={<Login/>}/>

    <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path='/' element={<Shop />}></Route>
          <Route path='/mens' element={<ShopCategory category='men' banner={mens_banner} />}></Route>
          <Route path='/womens' element={<ShopCategory category='women' banner={women_banner} />}></Route>
          <Route path='/kids' element={<ShopCategory category='kid' banner={kids_banner}/>}></Route>
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />}  />
          </Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/signup' element={<LoginSignup />} ></Route>
        </Routes>

      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
