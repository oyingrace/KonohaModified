
//next image
import image from 'next/image';

//components
import ParticlesContainer from '../components/ParticlesContainer';
import ProjectsBtn from '../components/ProjectsBtn';
//import Avatar from '../components/Avatar';

//framer motion
import {motion} from 'framer-motion';

//variants
import {fadeIn} from '../variants';
import Particles from 'react-tsparticles';
import Header from '../components/Header';


const Home = () => {
  return (
  <div className='bg-colorprimary h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
     <Header/>
    {/*text*/}
    <div className ='m-full h-full'>
      <div className='text-center flex flex-col justify-center xl:pt-40
      xl:text-left h-full container mx-auto'>
        {/*title*/}
        <motion.h1 
         variants={fadeIn('down', 0.4)} 
         initial='hidden' animate="show" 
         exit="hidden"
        className='h3'>
          Join 1000+ Students in the <span className='text-accent'>Konoha</span> Web3 Accelerator Program
          </motion.h1>

          {/*subtitle*/}
          <motion.p
           variants={fadeIn('down', 0.3)} 
           initial='hidden' animate="show" 
           exit="hidden"
          className='max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16'>
            As <span className='text-accent'>Witty Prince</span> bring together 60+ students accross different fields of learning</motion.p>
            {/* btn */}
            <div className='flex justify-center xl:hidden relative'>
              <ProjectsBtn/>

            </div>
            <motion.div variants={fadeIn('down', 0.4)} 
            initial='hidden' animate="show" 
            exit="hidden"
            className='hidden xl:flex'>
              <ProjectsBtn/>
              </motion.div>
      </div>
    </div>

       {/*image*/}
    <div className='w-[1200px] h-full absolute right-0 bottom-0 '>
       {/*bg img */}
       <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat 
       w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>

       {/*particles*/}
       <ParticlesContainer/>
      
    </div>
  </div>
  );
};

export default Home;
