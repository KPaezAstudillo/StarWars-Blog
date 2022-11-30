import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { getPeople } from '../api/fetch'
import "../styles/cards.css"
import { DataContext } from '../store/appContext';

export default function Characters() {
    const { contextData, setContextData } = useContext(DataContext)
    const [people, setPeople] = useState([])
    useEffect(() => {
        getPeople().then(setPeople);

    }, []);

    const handleFavorite = (e, name, url) => {
        e.preventDefault();
        setContextData([...contextData, {name:name, id: Number(url.split('/').slice(-2)[0]), type: 'characters'} ])

    }
    return (
        <><h1 className='d-flex justify-content-center my-3' >Characters</h1>
            <div className='row d-flex'>

                {
                    people?.results?.map((character) =>
                    (
                        <div className="card col-md-3 col-6 " key={character.name}>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${Number(character.url.split('/').slice(-2)[0])}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body" >
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">
                                    Gender: {character.gender}
                                </p>
                                <p>Mass: {character.mass}</p>
                                <Link to={`./${Number(character.url.split('/').slice(-2)[0])}/details`} className="card-link me-2" >Detail</Link>

                                <button className="btn btn-primary w-50" onClick={(e) => handleFavorite(e, character.name, character.url)}>Add </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
