import React, { useContext } from 'react'
import { DataContext } from '../store/appContext';
import { FaHeart, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function FavoritesList() {
    const navigate = useNavigate();
    const { contextData, setContextData } = useContext(DataContext)
    const handleDetails = (e, data) => {
        e.preventDefault();
        navigate(`/${data.type}/${data.id}/details`)
    }
    const handleDelete = (e,data) => {
        e.preventDefault();
        const updatedList = contextData.filter((favorite) => favorite.name !== data.name)
        setContextData(updatedList);
    }
    return (
        <div className="dropdown me-5">
            <button className="btn btn-secondary" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Favorites <FaHeart/>
            </button>
            <ul className="dropdown-menu">
                {contextData.map((data, index) => (<li key={index} className='d-flex'><button className="dropdown-item" onClick={(e) => handleDetails(e, data)} >{data.name} </button><button className='btn btn-danger mb-1' onClick={(e) => handleDelete(e,data)}> <FaTrash  /> </button></li>))

                }
            </ul>
        </div>
    )
}
