import React from 'react'
import './styles/Buttons.css'
function Buttons() {
    return (
        <section className  ="button-container">
            <button className="button-container_payment">Proceed to Payment</button>
            <button className="button-container_cancel">Cancel Order</button>
        </section>
    )
}

export default Buttons
