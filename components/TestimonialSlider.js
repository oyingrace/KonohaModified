// testimonial data
export const testimonialSlider = [
  {
    image: '/queen.png',
    name: 'Star Queen',
    position: 'Digital Marketer',
    message:
      ' Joining Konoha is one of the decisions I made this year. Konoha gave me the best support into transitioning into web3',
  },
  {
    image: '/briann.png',
    name: 'Brian ',
    position: 'Web3 Trader',
    message:
      'Upon registering for konoha ive been better at my research prowress. Ive mastered the art of trading p2p future and spots',
  },
  {
    image: '/chuks.png',
    name: 'Chukwudi Favor',
    position: 'Project Manager',
    message:
      'Konoha is where to be! Its definitely an all-rounder. It enhances and boosts your productivity. Fade at your own peril',
  },

  {
    image: '/devqueen.png',
    name: 'DevQueen',
    position: 'Blockchain Developer',
    message:
      ' Ive had the priviledge of diving deep into latest web tecnologies and their implementations ',
  },

  {
    image: '/felix.png',
    name: 'Bright Felix',
    position: 'Business Innovator',
    message:
      'The value-packed tutorials, accountability teams and other productivity systems has helped me scale-up ',
  },
];

//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


//import required modules
import { Navigation, Pagination } from 'swiper';

//icons
import {BsQuote} from 'react-icons/bs'

//next image
import Image from 'next/image';

const TestimonialSlider = () => {
  return (
    <Swiper 
    navigation={true}
  pagination={{
    clickable:true,
  }}
  modules={[Navigation, Pagination]}
  className='h-[400px]'
  >
    {
      testimonialSlider.map((person, index)=>{
        return ( 
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
        {/*avatar, name,, position*/}
        <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto
        xl:mx-0'>
          <div className='flex flex-col justify-center text-center'>
            {/*avatar*/}
            <div className='mb-2 mx-auto'  >
              <Image src={person.image} width={100} height={100} alt=''/>
            </div>
            {/*name*/}
            <div className='text-lg'>{person.name}</div>
            {/*position*/}
            <div className='text-[12px] uppercase font-extralight tracking-widest '>{person.position} </div>
          </div>
          </div>
          {/*quote & message */}
          <div className=' flex-1 flex flex-col justify-center before:w-[1px] 
          xl:before:bg-white/20 xl:before:absolute xl:before:absolute xl:before:left-0 xl:before:h-[200px]
          relative xl:pl-20 '>
            {/*quote icon*/}
            <div className='mb-4'>
              <BsQuote className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0'/>
              </div>
              {/*message */}
              <div className='xl:text-lg text-center md:text-left'>{person.message} </div>
          </div>
        </div>
        </SwiperSlide>
        );
      })}
  </Swiper>
  );
};

export default TestimonialSlider;
