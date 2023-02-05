import React, { useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Why from '../components/Why';



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
      <div className='px-32' ref={myRef}>
        <h1 className='mt-14'>Our Services</h1>
        <div className="row">
          <Card img="images\icons8_futures_64px.png"
            heading="Technical Business Solution"
            description="Maximize Your Business's Efficiency with Our Proven Technical Solutions. Our team of experts leverages the latest technology to provide customized, reliable solutions that streamline your operations and drive success." />

          <Card img="images\icons8_website_64px.png"
            heading="Website Development"
            description="Maximize Your Business's Efficiency with Our Proven Technical Solutions. Our team of experts leverages the latest technology to provide customized, reliable solutions that streamline your operations and drive success." />

          <Card img="images\icons8_phonelink_setup_100px.png"
            heading="Mobile App Development"
            description="Maximize Your Business's Efficiency with Our Proven Technical Solutions. Our team of experts leverages the latest technology to provide customized, reliable solutions that streamline your operations and drive success." />

          <Card img="images\icons8_marketing_64px.png"
            heading="Digital Marketing"
            description="Maximize Your Business's Efficiency with Our Proven Technical Solutions. Our team of experts leverages the latest technology to provide customized, reliable solutions that streamline your operations and drive success." />

          <Card img="images\icons8_training_64px.png"
            heading="Technical Skills Training"
            description="Maximize Your Business's Efficiency with Our Proven Technical Solutions. Our team of experts leverages the latest technology to provide customized, reliable solutions that streamline your operations and drive success." />

          <Card img="images\icons8_shopify_64px.png"
            heading="Shopify Development"
            description="Maximize Your Business's Efficiency with Our Proven Technical Solutions. Our team of experts leverages the latest technology to provide customized, reliable solutions that streamline your operations and drive success." />

          <h1 className='mt-14'>Why Forward Solutions</h1>
          <Why />
        </div>
      </div>
    </>
  )
}

export default Home
