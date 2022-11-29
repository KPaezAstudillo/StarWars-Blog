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
        <>
            <div className="d-flex justify-content-center font-weight-bold">
                 <h1 className='font-weight-bold' >{singleChar.name}</h1>               
            </div>
            <div className='m-3 row d-flex'>
                <div className=" mx-auto card col-md-8 col-12 " key={singleChar.name}>
                    <div className='row'>
                        <div className='col-md-9 col-12'>
                            <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top h-100  " alt="..." />
                        </div>
                        <div className="card-body col-md-3 col-12 my-auto" >

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
                                <p className='mt-5'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed interdum urna quis leo auctor, quis placerat nisi finibus. In eu iaculis est, ac laoreet libero. Cras sagittis quam vel feugiat gravida. Maecenas commodo dolor quis nisi placerat, vel commodo ligula ornare. Aliquam erat volutpat. In eu vulputate diam. Nam consequat lacus ut augue semper, nec interdum nisl egestas. Nullam quis pretium enim.

                                    Proin ornare eros velit, non dignissim tellus cursus a. Aenean viverra metus elit, eget sagittis velit lacinia sit amet. Integer ullamcorper et justo at varius. Suspendisse mattis accumsan mauris, sed sagittis nulla laoreet eget. Proin non cursus dolor. Aenean congue tristique est, eget vehicula felis vestibulum at. Vestibulum mauris massa, mattis eget rutrum eu, aliquet quis turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate quis risus nec malesuada. Mauris eget velit ullamcorper, molestie enim at, rhoncus nulla. Nunc mollis nunc congue molestie imperdiet. Morbi eget augue blandit, facilisis urna at, vestibulum velit. Maecenas porttitor dui lectus. Nam metus nisi, volutpat eget dapibus quis, sollicitudin eu diam. Donec ac est a urna euismod rhoncus et sit amet velit.  </p>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
