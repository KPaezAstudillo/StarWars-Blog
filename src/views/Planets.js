import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { getPlanets } from '../api/fetch'
import "../styles/cards.css"
import { DataContext } from '../store/appContext';

export default function Planets() {
    const { contextData, setContextData } = useContext(DataContext)
    const [planets, setPlanets] = useState([])
    useEffect(() => {
        getPlanets().then(setPlanets);
console.log(planets?.results?.url);
    }, [planets]);

    const handleFavorite = (e, name, url) => {
        e.preventDefault();
        setContextData([...contextData, {name:name, id: Number(url.split('/').slice(-2)[0]), type: 'planets'} ])

    }
    return (
        <><h1 className='d-flex justify-content-center my-3'>Planets</h1>
            <div className='row d-flex'>
                {
                    planets?.results?.map((planet) =>
                    (
                        <div className="card col-md-3 col-6 " key={planet.name}>
                            <img src={`https://starwars-visualguide.com/assets/img/planets/${Number(planet.url.split('/').slice(-2)[0])}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body" >
                                <h5 className="card-title">{planet.name}</h5>
                                <p className="card-text">
                                  Diameter: {planet.diameter}
                                </p>
                                <p>Population: {planet.population}</p>
                                <Link to={`./${Number(planet.url.split('/').slice(-2)[0])}/details`} className="card-link me-2" >Detail</Link>

                                <button className="btn btn-primary w-50" onClick={(e) => handleFavorite(e, planet.name, planet.url)}>Add </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
