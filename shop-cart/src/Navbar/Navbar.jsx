import React, { useContext, useState } from 'react'
import './Navabr.css';
import logo from '../Assets/logo.png';
import cart from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';
import Main from '../components/Main/Main';



const Navbar = (props) => {
  const [menu, setMenu] = useState('Shop');
  const {totalItem} =useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="logo-container">
        <img src={logo} />
        <p>Shoppers</p>
      </div>
      <ul>
        <li onClick={() => setMenu('Shop')}><Link to='/' style={{ textDecoration: "none", color: 'black' }}>Shop</Link>{menu === 'Shop' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('Mens')}><Link to='/mens' style={{ textDecoration: "none", color: 'black' }}>Mens</Link>{menu === 'Mens' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('Womens')}><Link to='/womens' style={{ textDecoration: "none", color: 'black' }}>Women</Link>{menu === 'Womens' ? <hr /> : <></>}</li>
        <li onClick={() => setMenu('Kids')}><Link to='/kids' style={{ textDecoration: "none", color: 'black' }}>Kids</Link>{menu === 'Kids' ? <hr /> : <></>}</li>
      </ul>
      <div className="signup-container">
        <Link to='/signup'><button>Signup</button></Link>
        <div className="cart-container">
          <Link to='/cart'><img src={cart} alt="" /></Link>j
          <p>{totalItem()}</p>
        </div>
      </div>
<Main/>
    </div>
  )
}

export default Navbar
