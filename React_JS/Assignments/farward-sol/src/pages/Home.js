import React, { useRef } from 'react'
import Banner from '../components/Banner'


function Home() {
  const myRef = useRef(null);

  const handleClick = () => {
    myRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  return (
    <>
      <Banner handleClick={handleClick} />
      <div className='pt-24' ref={myRef}>
        <h2>Div to Scroll To</h2>
      </div>
    </>
  )
}

export default Home
