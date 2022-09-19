import React from 'react'
import './product.css'
// import { BsStar } from "react-icons/bs";

const Product = () => {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>lean startup</p>
            <p className='product__price'>
                <small>$</small>
                <strong>299</strong>
            </p>
            <div className='product__rating'>
                <p>⭐</p>
            </div>
        </div>
        <img src="https://http2.mlstatic.com/D_NQ_NP_889279-MLM43510424584_092020-O.jpg" alt=""></img>
        <button> Add to basket</button>
    </div>
  )
}

export default Product