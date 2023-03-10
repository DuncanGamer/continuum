import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import React from 'react'

const PayPalPayment = () => {
  return (
    <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons  />
        </PayPalScriptProvider>
  )
}

export default PayPalPayment