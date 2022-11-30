import React from 'react';
import { Link } from "react-router-dom";
import "../styles/menu.css"

export default function Menu() {
    return (
        <>
        <h1 className='d-flex justify-content-center mx-auto mt-5'>Welcome to the Star Wars Blog! May the force be with you</h1>
        <h1 className='d-flex justify-content-center'>Choose one:</h1>
            <div className='row my-5'>
                <div className='col-12 col-md-3 mx-auto mb-3'>
                    <Link to="/characters">
                        <img src="https://media.timeout.com/images/105863223/750/422/image.jpg" className='menu-img w-100' />
                        <h2 className='d-flex justify-content-center '>Characters</h2>
                    </Link>
                    
                </div>
                <div className='col-12 col-md-3 mx-auto mb-3'>
                    <Link to="/planets">
                        <img src="https://www.famousbollywood.com/wp-content/uploads/2021/05/Best-Planets-to-Live-on-in-Star-Wars.jpg" className='menu-img w-100' />
                        <h2 className='d-flex justify-content-center'>Planets</h2>
                    </Link>
                    
                </div>
                <div className='col-12 col-md-3 mx-auto mb-3'>
                    <Link to="/vehicles ">
                        <img src="https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill,d_placeholder_wired.png,fl_progressive,g_face,h_450,q_80,w_800/v1576594418/wired_each-and-every-starfighter-in-star-wars-explained.jpg" className='menu-img w-100' />
                        <h2 className='d-flex justify-content-center'>Vehicles</h2>
                    </Link>
                    
                </div>
            </div>
        </>
    )
}
