import React from 'react';
import {  ThirdwebProvider } from '@thirdweb-dev/react';
import { ConnectWallet } from '@thirdweb-dev/react';
//next image
import Image from 'next/image';




const ClaimNft = () => {
  return (<ThirdwebProvider 
  >


    <div className='flex flex-col items-center justify-center'>
     <Image src= {'/roundedd-text.png'} width={141} height={148} alt=''
       className='animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]'/>

              <ConnectWallet
              btnTitle={"Claim"}
              welcomeScreen={{
                subtitle:
                  "Connect a wallet to claim your NFT",
                  title: "Keep on learning with Konoha",
              }}
              />
        
    </div>
  </ThirdwebProvider>);
}

export default ClaimNft;