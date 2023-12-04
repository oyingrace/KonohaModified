//components
import WorkSlider from '../../components/WorkSlider';
import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';


//framer motion
import { motion } from  'framer-motion';
import {fadeIn } from '../../variants';

const Work = () => {
  return(
<div className ='h-full bg-colorprimary py-36 flex items-center'>
<Circles/>
<div className='container mx-auto'>
<div className='flex flex-col xl:flex-row gap-x-8'>
{/*text*/}
<div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
<motion.h2
variants={fadeIn('up',0.2)}
initial='hidden'
 animate='show'
  exit='hidden'
  className='h2 xl:mt-8'
>
Courses We <span className='text-accent'>Offer.</span>
</motion.h2>
<motion.p 
variants={fadeIn('up',0.4)}
initial='hidden'
 animate='show'
  exit='hidden'
>
Our courses have been prepared to give you the knowledge needed to build, Enough money to invest in projects,
A powerful branding/influence/portfolio to land goood deals and a strong network.
</motion.p>
</div>
{/*slider*/}
<motion.div 
variants={fadeIn('up',0.4)}
initial='hidden'
 animate='show'
  exit='hidden'
  className='w-full xl:max-w-[65%]'
>
<WorkSlider/>
</motion.div>
</div>
</div>
<Bulb/>
</div>

  );
};

export default Work;