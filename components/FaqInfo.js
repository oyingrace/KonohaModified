

import React,{useState} from 'react';
import AccordionUI from '../components/AccordionUI';
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai';

function FaqInfo() {
    const [Index, setIndex] = useState(false);

    //faq data
const data = [
    {
id:1,
question: 'lotreddfg jhfdd yffh uygf',
answer: 'yiiyfyjkfn;lg iuyffyk',
    },

  {
        id:2,
        question: 'lotreddfg jhfdd yffh uygf',
        answer: 'yiiyfyjkfn;lg iuyffyk',
           },

  {
                id:3,
                question: 'lotreddfg jhfdd yffh uygf',
                answer: 'yiiyfyjkfn;lg iuyffyk',
      },
];

  return (
  <div className='flex flex-col justify-center items-center md:mt-32 md:mx-60 p-10 
  rounded-xl h-auto py-20 bg-gray-50 '>
    
  </div>
  );
}

export default FaqInfo;