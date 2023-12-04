import React from 'react';

const Card = ({img}) => {
  return (
    <div className='w-[100%] bg-[#fab1a0] shadow-xl '>
     <div>
      <img className='h-[250px] w-[100%] object-cover' src={img} />
      <div className='flex flex-col gap-4 p-[20px]'>

<div>
  <h2 className='font-bold'>Team member name</h2>
</div>

<div>
  <p>Founder</p>
</div>

      </div>
     </div>

    </div>
  )
}

export default Card;