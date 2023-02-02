import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

function Banner() {
    return (
        <div className="Banner">
            <Link to="/products">
                <button className='w-40 h-11 mb-10' type="button">
                    SHOP NOW
                </button>
            </Link>
        </div>
    )
}

export default Banner