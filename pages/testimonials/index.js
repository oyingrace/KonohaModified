//components
import TestimonialSlider from '../../components/TestimonialSlider';
import Circles from '/components/Circles';
import Bulb from '../../components/Bulb';


//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants'

const Testimonials = () => {
  return ( <div className ='h-full bg-colorprimary py-32 text-center'>
     <Circles/>
    <div className='container mx-auto  h-full flex flex-col justify-center'>
      {/*titl*/}
      <motion.h2
       variants={fadeIn('up',0.4)} 
       initial='hidden'
       animate='show'
       exit="hidden"
       className='h2 mb-8 xl:mb-8'>Hear From Our <span className='text-accent'>Students.</span>
      </motion.h2>
      {/*slider*/}
      <motion.div 
       variants={fadeIn('up',0.4)} 
       initial='hidden'
       animate='show'
       exit="hidden"
      >
        <TestimonialSlider/>
      </motion.div>
    </div>
    <Bulb/>
  </div>
  );
};

export default Testimonials;
