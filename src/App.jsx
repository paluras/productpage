import { useState } from 'react'
import './App.scss'

function App() {
  

  return (
    <div className="main">
      <img className='left-side-web' src='https://user-images.githubusercontent.com/98059798/222422314-13395bce-95bc-4f8b-8e99-bb14bf89e2a1.jpg' alt='img-left-web'></img>
      <img className='left-side-mobile' src='https://user-images.githubusercontent.com/98059798/222422317-e90a441b-dd7c-4d49-b40c-184c185010ca.jpg' alt='img-left-mobile'></img>
      <div className='right-side'>
        <h3 className='text-pretitle'>PERFUME</h3>
        <h1 className='product-title'>Gabrielle Essence Eau De Parfum</h1>
        <p className='product-description'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL</p>
        <div className='price-box'>
          <h2 className='price-new'>$149.99</h2>
          <p className='price-old'>$169.99</p>
        </div>
        <button>
          <img src='https://user-images.githubusercontent.com/98059798/222422313-7ce115cb-fbb4-48c1-85ed-5e839895bfbe.svg'></img>
          Add to Cart
        </button>
      </div>
     
    </div>
  )
}

export default App
