//links
import Link from 'next/link';

//icons
import {RiTwitterXFill,
   RiLinkedinFill,
   RiDiscordFill,
   RiTelegramFill,
   RiGithubFill,
  } from 'react-icons/ri';

const Socials = () => {
  return (
  <div className='flex items gap-x-5 text-lg'>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiTwitterXFill/>
    </Link>

    <Link href={''} className='hover:text-accent transition-all duration-300'>
     < RiLinkedinFill/>
    </Link>

    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiDiscordFill/>
    </Link>

    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiTelegramFill/>
    </Link>

    <Link href={''} className='hover:text-accent transition-all duration-300'>
    <RiGithubFill/>
    </Link>
     </div>
     );
};

export default Socials;
