import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import Image1 from '../assets/images/home-slider/slide1.jpg'
import Image2 from '../assets/images/home-slider/slide2.jpg'
import Image3 from '../assets/images/home-slider/slide3.jpg'
import Image4 from '../assets/images/home-slider/slide4.jpg'
import Image5 from '../assets/images/home-slider/slide5.jpg'

const Slider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);

    return <AutoplaySlider
        play={true}
        cancelOnInteraction={false}
        interval={4000}
        bullets={false}
    >
        <div data-src={Image4}/>
        <div data-src={Image3}/>
        <div data-src={Image5}/>
        <div data-src={Image1}/>
        <div data-src={Image2}/>
    </AutoplaySlider>
}

export default Slider;