import React from 'react'
import { useState } from 'react'

const UpdateObjects = () => {

    const [car, setCar] = useState({year: 2025, brand: 'Ford', model: 'Mustang'})

    const yearChange = e => {
        setCar(cars => ({...cars, year: e.target.value}))
        
    }
    const brandChange = e => {
        setCar(cars => ({...cars, brand: e.target.value}))
    }
    const modelChange = e => {
        setCar(cars => ({...cars, model: e.target.value}))
    }
  return (
    <div>
        <p>my favorite car is: {car.year} {car.brand} {car.model}  </p>

        <input type="number" value={car.year} onChange={yearChange} /> <br />
        <input type="text" value={car.brand} onChange={brandChange} /> <br />
        <input type="text" value={car.model} onChange={modelChange} /> <br />
    </div>
  )
}

export default UpdateObjects