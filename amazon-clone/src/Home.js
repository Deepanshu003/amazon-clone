import React from 'react'
import './home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
        <div className='home__container'>
         <img className='home__image' src='https://trak.in/wp-content/uploads/2020/09/IMG_20200928_141059.jpg' alt=''></img>
            <div className='home__row'>
                <Product />
                {/* product */}
            </div>
            <div className='home__row'>
                {/* porduct */}
                {/* product */}
                {/* product */}
            </div>
            <div className='home__row'>
                {/* porduct */}
            </div>
        </div>
    </div>
  )
}

export default Home