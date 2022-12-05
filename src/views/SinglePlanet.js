import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getSinglePlanet } from '../api/fetch';

export default function SinglePlanet() {
  const { id } = useParams();
  const [singlePlanet, setSinglePlanet] = useState([])

  //fetch to extract info about selected planet
  useEffect(() => {
    getSinglePlanet(id).then(setSinglePlanet);

  }, [id]);
  return (
    <>
    {/* card to show details of the selected planet */}
      <div className="d-flex justify-content-center font-weight-bold">
        <h1 className='font-weight-bold' >{singlePlanet.name}</h1>
      </div>
      <div className='m-3 row d-flex'>
        <div className=" mx-auto card col-md-8 col-12 " key={singlePlanet.name}>
          <div className='row'>
            <div className='col-md-9 col-12'>
              <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="card-img-top h-100 W-100  " alt="..." />
            </div>
            <div className="card-body col-md-3 col-12 my-auto" >
              <p className="card-text">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item px-0">Climate: {singlePlanet.climate}</li>
                  <li class="list-group-item px-0">Diameter: {singlePlanet.diameter}</li>
                  <li class="list-group-item px-0">Orbital Period: {singlePlanet.orbital_period}</li>
                  <li class="list-group-item px-0">Rotation Period: {singlePlanet.rotation_period}</li>
                  <li class="list-group-item px-0">Population: {singlePlanet.population}</li>
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
