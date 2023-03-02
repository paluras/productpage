import { useState } from 'react'
import './App.scss'

function App() {
  

  return (
    <div className="main">
      <img className='left-side-web' src='src\assets\image-product-desktop.jpg' alt='img-left-web'></img>
      <img className='left-side-mobile' src='src\assets\image-product-mobile.jpg' alt='img-left-mobile'></img>
      <div className='right-side'>
        <h3 className='text-pretitle'>PERFUME</h3>
        <h1 className='product-title'>Gabrielle Essence Eau De Parfum</h1>
        <p className='product-description'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
        <div className='price-box'>
          <h2 className='price-new'>$149.99</h2>
          <p className='price-old'>$169.99</p>
        </div>
        <button>
          <img src='src\assets\icon-cart.svg'></img>
          Add to Cart
        </button>
      </div>
     
    </div>
  )
}

export default App
