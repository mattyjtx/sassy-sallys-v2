import React from 'react'
import "./Slider.scss" 
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useState } from 'react';

const Slider = () => {

    const [currentSlide, setcurrentSlide] = useState(0)

    const data = [
        "https://b1491951.smushcdn.com/1491951/wp-content/uploads/2021/07/2021-09-josephribkoff-02.png?lossy=0&strip=1&webp=1",
        "https://www.classicshapewear.com/images/manufacturers/mobile_banner/lysse_cat_banner.jpg",
        "https://umgeewholesale.com/media/bannerslider/0/4/0426-mainbanner.jpg",
      ];

      const prevSlide =()=>{
        setcurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1)
      }
      const nextSlide =()=>{
        setcurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1)
      }

  return (
    <div className='slider'>
        <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img src={data[0]} alt="" />
            <img src={data[1]} alt="" />
            <img src={data[2]} alt="" />
        </div>
        <div className="icons">
            <div className="icon" onClick={prevSlide}>
                <WestOutlinedIcon/>
            </div>
            <div className="icon" onClick={nextSlide}>
                <EastOutlinedIcon/>
            </div>
        </div>
    </div> 
  )
}

export default Slider