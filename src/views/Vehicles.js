import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { getVehicles } from '../api/fetch'
import { DataContext } from '../store/appContext';
import { FaHeart } from 'react-icons/fa';

export default function Vehicles() {
  const { contextData, setContextData } = useContext(DataContext)
  const [vehicles, setVehicles] = useState([])
  useEffect(() => {
    getVehicles().then(setVehicles);

  }, []);

  const handleFavorite = (e, name, url) => {
    e.preventDefault();
    setContextData([...contextData, { name: name, id: Number(url.split('/').slice(-2)[0]), type: 'vehicles' }])

  }
  return (
    <><h1 className='d-flex justify-content-center my-3'>Vehicles</h1>
      <div className='row d-flex'>

        {
          vehicles?.results?.map((vehicle) =>
          (
            <div className="card col-lg-3 col-12 " key={vehicle.name}>
              <img src={`https://starwars-visualguide.com/assets/img/vehicles/${Number(vehicle.url.split('/').slice(-2)[0])}.jpg`} className="card-img-top" alt="..." />
              <div className="card-body" >
                <h5 className="card-title">{vehicle.name}</h5>
                <p className="card-text">
                  Model: {vehicle.model} </p>
                <p > Cargo Capacity: {vehicle.cargo_capacity}</p>
                <div className='row d-flex'>
                  <div className='col-1 me-auto'> 
                  <button className="btn bg-secondary"><Link to={`./${Number(vehicle.url.split('/').slice(-2)[0])}/details`} className="text-white text-decoration-none" >Details</Link></button>
                  </div>
                  <div className='col-1 me-2'>
                  <button className="btn bg-danger  text-white" onClick={(e) => handleFavorite(e, vehicle.name, vehicle.url)}> <FaHeart /> </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}
