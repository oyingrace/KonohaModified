import React from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';


//components
import Circles from '../../components/Circles';
import Bulb from '../../components/Bulb';
import ClaimNft from '../../components/Claim';


//framer motion
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants'



const Claim = () => {
  return (
    <div className='h-full bg-colorprimary py-32 text-center'>
        <Circles/>
        {/*title*/}
        <motion.h2
       variants={fadeIn('up',0.4)} 
       initial='hidden'
       animate='show'
       exit="hidden"
       className='h2 mb-8 xl:mb-8'>Claim your <span className='text-accent'>NFTs.</span>
      </motion.h2>

      <motion.p 
variants={fadeIn('up',0.4)}
initial='hidden'
 animate='show'
  exit='hidden'
>
Congrats!!! you've recieved an NFT
</motion.p>
       <ClaimNft/>
        <Bulb/>
        </div>
  )
}

export default Claim;