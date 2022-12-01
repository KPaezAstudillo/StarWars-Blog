import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { getPlanets } from '../api/fetch'
import { DataContext } from '../store/appContext';
import { FaHeart } from 'react-icons/fa';

export default function Planets() {
    const { contextData, setContextData } = useContext(DataContext)
    const [planets, setPlanets] = useState([])
    useEffect(() => {
        getPlanets().then(setPlanets);
    }, [planets]);

        //Adds name, id and type of favorite (in this case planet) to the favorite list
    //I only display name
    //but id and type is necessary to redirect to details page. ex: planets/1/details
    const handleFavorite = (e, name, url) => {
        e.preventDefault();
        setContextData([...contextData, { name: name, id: Number(url.split('/').slice(-2)[0]), type: 'planets' }])

    }
    return (
        <><h1 className='d-flex justify-content-center my-3'>Planets</h1>
            <div className='row d-flex'>
                {
                    planets?.results?.map((planet) =>
                    (
                        <div className="card col-md-3 col-6 " key={planet.name}>
                            {/* I got the id from the url attribute, since there is no explicit id */}
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${Number(planet.url.split('/').slice(-2)[0])}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body" >
                                <h5 className="card-title">{planet.name}</h5>
                                <p className="card-text">
                                    Diameter: {planet.diameter}
                                </p>
                                <p>Population: {planet.population}</p>
                                <div className='row d-flex'>
                                    <div className='col-1 me-auto'>
                                        <button className="btn bg-secondary"><Link to={`./${Number(planet.url.split('/').slice(-2)[0])}/details`} className="text-white text-decoration-none" >Details</Link></button>
                                    </div>
                                    <div className='col-1 me-2'>
                                        <button className="btn bg-danger  text-white" onClick={(e) => handleFavorite(e, planet.name, planet.url)}> <FaHeart /> </button>
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
