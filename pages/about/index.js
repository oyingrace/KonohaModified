import React, {useState} from 'react';


//components
import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';
import AboutSlider from '../../components/AboutSlider';


//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';


const About = () => {
 
  return(
    <div className ='h-full bg-colorprimary'>
    <Circles/>
    <h1>
     Meet The Team
    </h1>
    <AboutSlider/>


    <Bulb/>
    </div>
    
      );
};

export default About;
