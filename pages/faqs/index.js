 
 
//components
import FaqInfo from '../../components/FaqInfo';
import Circles from '/components/Circles';
import Bulb from '../../components/Bulb';


//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants'

import React from 'react';

const Faqs = () => {
  return (
    <div className='bg-colorprimary h-full'>
        <Circles/>
<FaqInfo/>

<Bulb/>
        </div>
  );
}

export default Faqs;