import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { getVehicles } from '../api/fetch'
import "../styles/cards.css"

export default function Vehicles() {
  const [vehicles, setVehicles] = useState([])
  useEffect(() => {
    getVehicles().then(setVehicles);

  }, []);

  const handleFavorite = (e, name, url) => {
    e.preventDefault();
    setContextData([...contextData, {name:name, id: Number(url.split('/').slice(-2)[0]), type: 'vehicles'} ])

}
  return (
    <><h1 className='d-flex justify-content-center my-3'>Vehicles</h1>
      <div className='row d-flex'>

        {
          vehicles?.results?.map((vehicle) =>
          (
            <div className="card col-md-3 col-6 " key={vehicle.name}>
              <img src={`https://starwars-visualguide.com/assets/img/vehicles/${Number(vehicle.url.split('/').slice(-2)[0])}.jpg`} className="card-img-top" alt="..." />
              <div className="card-body" >
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">
                  Model: {vehicle.model} </p>
                <p > Cargo Capacity: {vehicle.cargo_capacity}</p>

                <Link to={`./${Number(vehicle.url.split('/').slice(-2)[0])}/details`} className="card-link me-2" >Detail</Link>

                <button className="btn btn-primary w-50" onClick={(e) => handleFavorite(e, vehicle.name, vehicle.url)}>Add </button>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
