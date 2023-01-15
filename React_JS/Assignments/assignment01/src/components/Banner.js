import React from 'react'
import { Link } from 'react-router-dom'
import './Banner.css'

function Banner() {
    return (
        <div className="Banner">
            <Link to="/products">
                <button type="button">
                    SHOP NOW
                </button>
            </Link>
        </div>
    )
}

export default Banner