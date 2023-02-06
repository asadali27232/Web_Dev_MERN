import React, { useRef, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Why from '../components/Why';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ReviewCarousel from '../components/ReviewCarousel';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'



function Home() {
  const myRef = useRef(null);
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])
  const handleClick = () => {
    myRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 780 },
      items: 1
    }
  }
  return (
    <>
      <Banner handleClick={handleClick} />
      <div className='px-32' ref={myRef}>
        <h1 className='mt-14'>Our Services</h1>
        <div className="row" data-aos="fade-up">
          <Card img="images\icons8_futures_64px.png"
            heading="Technical Business Solution"
            description="Maximize Your Business's Efficiency with Our Proven Technical Solutions. Our team of experts leverages the latest technology to provide customized, reliable solutions that streamline your operations and drive success." />

          <Card img="images\icons8_website_64px.png"
            heading="Website Development"
            description="Maximize Your Business's Efficiency with Our Proven Technical Solutions. Our team of experts leverages the latest technology to provide customized, reliable solutions that streamline your operations and drive success." />

          <Card img="images\icons8_phonelink_setup_100px.png"
            heading="Mobile App Development"
            description="Maximize Your Business's Efficiency with Our Proven Technical Solutions. Our team of experts leverages the latest technology to provide customized, reliable solutions that streamline your operations and drive success." />
        </div>
        <div className="row" data-aos="fade-up">
          <Card img="images\icons8_marketing_64px.png"
            heading="Digital Marketing"
            description="Maximize Your Business's Efficiency with Our Proven Technical Solutions. Our team of experts leverages the latest technology to provide customized, reliable solutions that streamline your operations and drive success." />

          <Card img="images\icons8_training_64px.png"
            heading="Technical Skills Training"
            description="Maximize Your Business's Efficiency with Our Proven Technical Solutions. Our team of experts leverages the latest technology to provide customized, reliable solutions that streamline your operations and drive success." />

          <Card img="images\icons8_shopify_64px.png"
            heading="Shopify/WP Development"
            description="Maximize Your Business's Efficiency with Our Proven Technical Solutions. Our team of experts leverages the latest technology to provide customized, reliable solutions that streamline your operations and drive success." />

        </div>
      </div>
      <div className='py-10 pb-20' style={{ backgroundColor: '#f5f8fd' }} data-aos="fade-up">
        <h1 className='px-32 mb-5'>Why Forward Solutions</h1>
        <Why />
      </div>
      <div className='px-32 py-10 mt-4 pb-20' data-aos="fade-up">
        <h1 className='mb-5'>What Our Clients Have to Say</h1>
        <Carousel responsive={responsive}>
          <ReviewCarousel />
          <ReviewCarousel />
          <ReviewCarousel />
          <ReviewCarousel />
          <ReviewCarousel />
        </Carousel>
      </div>
    </>
  )
}

export default Home
