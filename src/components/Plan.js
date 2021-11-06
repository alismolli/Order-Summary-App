import React from 'react'
import './styles/Plan.css'
import iconMusic from '../assets/icon-music.svg'
import PlanType from './PlanType'
function Plan() {
    return (
        <section className="plan">
            <div>
                <img src={iconMusic} alt="icono de musica"/>
            </div>
            <PlanType/>
            <div>
                <a href="/">Change</a>
            </div>
        </section>
    )
}

export default Plan
