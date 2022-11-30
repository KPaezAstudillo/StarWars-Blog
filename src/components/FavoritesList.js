import React, { useContext } from 'react'
import { DataContext } from '../store/appContext';
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FavoritesList() {
    const navigate = useNavigate();
    const { contextData } = useContext(DataContext)
    const handleDetails = (e, data) => {    
        e.preventDefault();
        navigate(`/${data.type}/${data.id}/details`)
    }
    return (
        <div className="dropdown me-5">
            <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites
            </button>
            <ul className="dropdown-menu">
                {contextData.map((data, index) => (<li key={index} onClick={(e) => handleDetails(e, data)}><a className="dropdown-item" >{data.name} <FaTrash /></a></li>))

                }
            </ul>
        </div>
    )
}
