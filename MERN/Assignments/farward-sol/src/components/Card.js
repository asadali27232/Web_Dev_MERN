import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'


function Card(props) {
    return (
        <>
            <div className='col-4'>
                <div className='card'>
                    <img className='img' src={ props.img } alt='TBS'></img>
                    <h2>{ props.heading }</h2>
                    <p>{ props.description }</p>
                    <button type='button'>Get this Service</button>
                </div>
            </div>
        </>
    )
}

export default Card