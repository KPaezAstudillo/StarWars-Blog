import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { getSingleCharacter } from '../api/fetch';

export default function SingleCharacter() {
    const { id } = useParams();
    const [singleChar, setSingleChar] = useState([])
    useEffect(() => {
        getSingleCharacter(id).then(setSingleChar);

    }, [id]);
    return (
        <div className='row'>
            <div className=" mx-auto card col-md-8 col " key={singleChar.name}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top mt-3 w-75 h-75 mx-auto" alt="..." />
                <div className="card-body  mx-auto" >
                    <h4 className="card-title">{singleChar.name}</h4>
                    <p className="card-text">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item px-0">Gender: {singleChar.gender}</li>
                            <li class="list-group-item px-0">Mass: {singleChar.mass}</li>
                            <li class="list-group-item px-0">Height: {singleChar.height}</li>
                            <li class="list-group-item px-0">Hair Color: {singleChar.hair_color}</li>
                            <li class="list-group-item px-0">Skin Color: {singleChar.skin_color}</li>
                            <li class="list-group-item px-0">Eye Color: {singleChar.eye_color}</li>
                            <li class="list-group-item px-0">Birth Year: {singleChar.birth_year}</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}
