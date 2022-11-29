import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
    <Link to="/">
        <img src='https://logodownload.org/wp-content/uploads/2015/12/star-wars-logo-3-1.png' height='50px' className='ms-2'/>
    </Link>
    <div className="ml-auto">
        <Link to="/">
            <button className="btn btn-primary">Favorites</button>
        </Link>
    </div>
</nav>
  )
}
