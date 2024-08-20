import React from 'react'
import { CartProvider } from './CartContext'
import { CheckoutProvider } from './CheckoutContext'

const MainProvider = ({ children }) => {
    return (
        <CartProvider>
            <CheckoutProvider>
                {children}
            </CheckoutProvider>
        </CartProvider>
    )
}

export default MainProvider