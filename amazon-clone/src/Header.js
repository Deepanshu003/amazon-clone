import React from 'react'
import './header.css'
// import AMZON from  '../src/assest/amzon.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <div className='header'>
       {/* <div className='header_logo'>
       <img src={AMZON} alt='hn bhai' />
       </div> */}
       <img className='header_logo' src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" alt=''/>
        <div className='header_search'>
            <input className='header_searchInput' type="text" />
            <SearchIcon
            className='header_searchIcon' />
        </div>
       
        <div className='header_nav'>
            <div className='header_option'>
           <span className='header_optionLineOne'>
            hii guest
           </span>
           <span className='header_optionLineTwo'>
            Sign in
           </span>
            </div>
            <div className='header_option'>
            <span className='header_optionLineOne'>
            returns
           </span>
           <span className='header_optionLineTwo'>
            & orders
           </span>
                
            </div>
            <div className='header_option'>
            <span className='header_optionLineOne'>
            Yours
           </span>
           <span className='header_optionLineTwo'>
            prime
           </span>
            </div>
            <div className='header_optionBasket'>
             <ShoppingBasketIcon />
             <span className='header_optionLineTwo header_basketCount'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header