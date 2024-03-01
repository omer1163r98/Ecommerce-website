import React from 'react'
import {NavLink} from 'react-router-dom'
import './home.css'
const Home = () => {
  return (
    <div className='home'>
      <h2 >Shopping made easy</h2>
      <button> 
        <NavLink className={'shop-now'} to={'/products'}>Shop Now</NavLink>
      </button>
    </div>
  )
}

export default Home
