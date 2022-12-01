import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleVehicle } from '../api/fetch';

export default function SinglePlanet() {
  const { id } = useParams();
  const [singleVehicle, setSingleVehicle] = useState([])

  //fetch to extract info about selected vehicle
  useEffect(() => {
    getSingleVehicle(id).then(setSingleVehicle);

  }, [id]);
  return (
    <>
    {/* card to show details of the selected vehicle */}
      <div className="d-flex justify-content-center font-weight-bold">
        <h1 className='font-weight-bold' >{singleVehicle.name}</h1>
      </div>
      <div className='m-3 row d-flex'>
        <div className=" mx-auto card col-md-8 col-12 " key={singleVehicle.name}>
          <div className='row'>
            <div className='col-md-9 col-12'>
              <img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="card-img-top h-100 W-100  " alt="..." />
            </div>
            <div className="card-body col-md-3 col-12 my-auto" >
              <p className="card-text">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item px-0">Model: {singleVehicle.model}</li>
                  <li class="list-group-item px-0">Class: {singleVehicle.vehicle_class}</li>
                  <li class="list-group-item px-0">Manufacturer: {singleVehicle.manufacturer}</li>
                  <li class="list-group-item px-0">Number of Passengers: {singleVehicle.passengers}</li>
                  <li class="list-group-item px-0">Cargo Capacity: {singleVehicle.cargo_capacity}</li>
                </ul>
                <p className='mt-4'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum urna quis leo auctor, quis placerat nisi finibus. In eu iaculis est, ac laoreet libero. Cras sagittis quam vel feugiat gravida. Maecenas commodo dolor quis nisi placerat, vel commodo ligula ornare. Aliquam erat volutpat. In eu vulputate diam. Nam consequat lacus ut augue semper, nec interdum nisl egestas. Nullam quis pretium enim.
                  Proin ornare eros velit, non dignissim tellus cursus a. Aenean viverra metus elit, eget sagittis velit lacinia sit amet. Integer ullamcorper et justo at varius. Suspendisse mattis accumsan mauris, sed sagittis nulla laoreet eget. Proin non cursus dolor. Aenean congue tristique est, eget vehicula felis vestibulum at. Vestibulum mauris massa, mattis eget rutrum eu, aliquet quis turpis.   </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
