import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

function Card(props) {
    return (
        <>
            <div className="Card my-4">
                <Link to="/products">
                    <img src={`images/${props.imageSrc}`} className="w-full" alt='UNSTITCHED' />
                </Link>
                <h5 className='py-6 m-0'>{props.category}</h5>
                <Link className="shop_a" to="/products">SHOP NOW</Link>
            </div>
        </>
    )
}

export default Card