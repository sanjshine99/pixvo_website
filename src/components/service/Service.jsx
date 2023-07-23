import React from 'react'
import '../service/Service.css'
import Data from './content/Data'
import Card from './content/Card'
function Service() {
  return (
    <section className="servicesection" id="service">
    <div className="service__container container">
      <div className="service__content">
        <div className="service__area">
        <Data />
        </div>
        <div className="servicecard__area">
        <Card />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Service