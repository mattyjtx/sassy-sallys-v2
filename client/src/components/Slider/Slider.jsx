import React from 'react'
import "./Slider.scss" 
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useState } from 'react';

const Slider = () => {

    const [currentSlide, setcurrentSlide] = useState(0)

    const data = [
        "https://lp2.hm.com/hmgoepprod?source=url[https://www2.hm.com/content/dam/global_campaigns/season_00/ladies/ws30fo/WS30FO-3x2-1.jpg]&scale=size[795]&sink=format[jpeg],quality[80]",
        "https://www.classicshapewear.com/images/manufacturers/mobile_banner/lysse_cat_banner.jpg",
        "https://shopavara.com/cdn/shop/files/FallPreview_Banner-NW_V2.jpg?v=1722292996&width=2000",
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