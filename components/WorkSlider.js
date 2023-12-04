// data
export const workSlider = {
  slides: [
    {
      title1:'Web Development',
      images: [
        { 
          title: 'Web3 Jobs',
          path: '/web3jobs.jpg',
        },
      
        {
          title: 'Defi trading',
          path: '/defitrading.jpg',
        },
        {
          title: 'Web3 Writing ',
          path: '/web3writing.webp',
        },
        {
          title: 'NFT',
          path: '/nft.jpg',
        },
      ],
    },

   

    {
      title1:'Blockchain',
      images: [
        {
          title: 'NFT',
          path: '/web3jobs.jpg',
        },
        {
          title: 'AI Tools Prompt Engineering',
          path: '/defitrading.jpg',
        },
        {
          title: 'Crypto Trading',
          path: '/web3writing.webp',
        },
        {
          title: 'Web3 Graphic Design',
          path: '/nft.jpg',
        },
      ],
    },

    {
      title1:'Blockchain',
      images: [
        {
          title: 'LinkedIn SEO/Account Growth',
          path: '/web3jobs.jpg',
        },
        {
          title: 'Blockchain Development',
          path: '/defitrading.jpg',
        },
        {
          title: 'Business Development in Web3 ',
          path: '/web3writing.webp',
        },
        {
          title: 'Defi Onchain Analysis',
          path: '/nft.jpg',
        },
      ],
    },

    {
      title1:'Blockchain',
      images: [
        {
          title: 'Personal Branding ',
          path: '/web3jobs.jpg',
        },
        {
          title: 'Airdrops',
          path: '/defitrading.jpg',
        },
        {
          title: 'Community Management',
          path: '/web3writing.webp',
        },
        {
          title: 'Collab/Partnership Management',
          path: '/nft.jpg',
        },
      ],
    },

    {
      title1:'Blockchain',
      images: [
        {
          title: 'Video Editing',
          path: '/web3jobs.jpg',
        },
        {
          title: 'Meme Creation',
          path: '/defitrading.jpg',
        },
        {
          title: 'Accent Neutralization',
          path: '/web3writing.webp',
        },
        {
          title: 'Networking',
          path: '/nft.jpg',
        },
      ],
    },

    {
      title1:'Blockchain',
      images: [
        {
          title: 'Web3 Security',
          path: '/web3jobs.jpg',
        },
        {
          title: 'Twitter SEO/Account Growth',
          path: '/defitrading.jpg',
        },
        {
          title: 'Social Entrepreneurship',
          path: '/web3writing.webp',
        },
      
      ],
    },
  ],
};


//import swiper react components
import {Swiper, SwiperSlide} from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


//import required modules
import { Pagination} from 'swiper';

//icons
import {BsArrowRight} from 'react-icons/bs'

//next image
import Image from 'next/image';
import Link from 'next/link';

const WorkSlider = () => {
  return (
    <Swiper 
    spaceBetween={10}
    
  pagination={{
    clickable:true,
  }}
  modules={[Pagination]}
  className='h-[280px] sm:h-[480px]'
  >
    {
      workSlider.slides.map((slide, index)=>{
        return ( <SwiperSlide key={index}>
        <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer' >
         {slide.images.map((image, index )=>{
          return ( <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' >
          <div className='flex items-center justify-center relative overflow-hidden group key={index}'>
            {/*image*/}
            <Image src={image.path} width={500} height={300} alt='' />
            {/*overlay gradient */}
            <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc]
             to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
             {/* title*/}
             <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 
             group-hover:xl:-translate-y-20 transition-all '>
              <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                {/*title part 1*/}
                <div className='delay-100'></div>
                 {/*title part 2*/}
                 <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300
                 delay-150'>{image.title}</div>

                {/*icon
                  <Link href={'/contact'} >
                <div className='text-xl translate-y-[500%] group-hover:translate-y-0 
                transition-all duration:300 '><BsArrowRight/></div>
         </Link>  */ }

              </div>
             </div>
          </div>
          </div>
          );
         })}
        </div>
        </SwiperSlide>
        );
      })}
  </Swiper>
  );
};

export default WorkSlider;


