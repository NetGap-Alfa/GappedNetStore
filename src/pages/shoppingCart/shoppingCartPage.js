import React from 'react'
import './shoppingCartPage.css'
import { ClientHeader } from '../../components/clientHeader/clientHeader'

export const ShoppingCartPage = () => {
  return (
    <div>
      <ClientHeader/>
      <div className="main-container">
        <h1 className='h1-shoppingCartPage'>
          Shopping Cart PAGE
        </h1>
      </div>
    </div>
  )
}