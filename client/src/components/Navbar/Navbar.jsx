import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import "./Navbar.scss"
import { useSelector } from 'react-redux';


const Navbar = () => {

    const [open,setOpen] = useState(false)
    const products = useSelector(state=>state.cart.products);
    
  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className='left'>
                <div className='item'>
                    <img src='img/en.png' alt='' />
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <span>USD</span>
                    <KeyboardArrowDownIcon/>
                </div>
                <div className="item">
                    <Link className='link' to="/products/1">Women</Link>
                </div>
                <div className="item">
                    <Link className='link' to="/products/2">Accessories</Link>
                </div>
            </div>
            <div className='center'>
                <Link className='link' to="/">
                    <img src='/img/sassy-sally-logo.png' alt=''></img>
                </Link>
            </div>
            <div className='right'>
                <div className='item'>
                    <Link className='link' to="/">Homepage</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/">About</Link>
                </div>
                <div className='item'>
                    <Link className='link' to="/">Contact</Link>
                </div>
                <div className="icons">
                    <SearchIcon/>
                    <PersonOutlineIcon/>
                    <FavoriteBorderIcon/>
                    <div className="cartIcon" onClick={() =>setOpen(!open)}>
                        <ShoppingCartIcon/>
                        <span>{products.length}</span>
                    </div>
                </div>
            </div>
        </div>
        {open && <Cart/>}
    </div>
  )
}

export default Navbar