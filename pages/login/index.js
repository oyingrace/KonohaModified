import React, {useState} from 'react';

//components
import Circles from '../../components/Circles';
import LoginForm from '../../components/LoginForm';
import Bulb from '../../components/Bulb';


//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';


const Login = () => {
 
  return(
     <div className='h-full bg-colorprimary py-32 text-center xl:text-left'>
<Circles/>


<Bulb/>
 </div>
    );
};

export default Login;
