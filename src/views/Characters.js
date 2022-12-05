import React, { useEffect, useState, useContext } from 'react'
import { Link } from "react-router-dom";
import { getPeople } from '../api/fetch'
import { DataContext } from '../store/appContext';
import { FaHeart } from 'react-icons/fa';

export default function Characters() {
    const { contextData, setContextData } = useContext(DataContext)
    const [people, setPeople] = useState([])
    useEffect(() => {
        getPeople().then(setPeople);

    }, []);

    //Adds name, id and type of favorite (in this case character) to the favorite list
    //I only display name
    //but id and type is necessary to redirect to details page. ex: characters/1/details
    const handleFavorite = (e, name, url) => {
        e.preventDefault();
        setContextData([...contextData, { name: name, id: Number(url.split('/').slice(-2)[0]), type: 'characters' }])

    }
    return (
        <><h1 className='d-flex justify-content-center my-3' >Characters</h1>
            <div className='row d-flex'>

                {
                    people?.results?.map((character) =>
                    (
                        <div className="card col-md-3 col-6 " key={character.name}>
                            {/* I got the id from the url attribute, since there is no explicit id */}
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${Number(character.url.split('/').slice(-2)[0])}.jpg`} className="card-img-top" alt="..." />
                            <div className="card-body" >
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">
                                    Gender: {character.gender}
                                </p>
                                <p>Mass: {character.mass}</p>
                                <div className='row d-flex'>
                                    <div className='col-1 me-auto'>
                                        <button className="btn bg-secondary"><Link to={`./${Number(character.url.split('/').slice(-2)[0])}/details`} className="text-white text-decoration-none" >Details</Link></button>
                                    </div>
                                    <div className='col-1 me-4'>
                                        <button className="btn bg-danger  text-white" onClick={(e) => handleFavorite(e, character.name, character.url)}> <FaHeart /> </button>
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
