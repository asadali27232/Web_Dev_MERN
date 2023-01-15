import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card(props) {
    return (
        <>
            <div className="Card">
                <Link to="/products">
                    <img src={`images/${props.imageSrc}`} className="w-full" alt='UNSTITCHED' />
                </Link>
                <h5>{props.category}</h5>
                <Link className="shop_a" to="/products">SHOP NOW</Link>
            </div>
        </>
    )
}

export default Card