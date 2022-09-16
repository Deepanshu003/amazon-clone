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
       <img className='header_logo' src='https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png' alt=''/>
        <div className='header_search'>
            <input className='header_searchInput' type="text" />
            <SearchIcon
            className='header_search-icon' />
        </div>
       
        <div className='header_nav'>
            <div className='header_option'>
           <span className='header_potionLineOne'>
            hii guest
           </span>
           <span className='header_potionLineTwo'>
            Sign in
           </span>
            </div>
            <div className='header_option'>
            <span className='header_potionLineOne'>
            returns
           </span>
           <span className='header_potionLineTwo'>
            & orders
           </span>
                
            </div>
            <div className='header_option'>
            <span className='header_potionLineOne'>
            Yours
           </span>
           <span className='header_potionLineTwo'>
            prime
           </span>
            </div>
            <div className='header_optionBasket'>
             <ShoppingBasketIcon />
             <span className='header_optionLineTwo header_basket_Count'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Header