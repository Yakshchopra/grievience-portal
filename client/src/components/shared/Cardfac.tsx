import React, { useState } from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlineError } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';

const Card = (props: any) => {
  console.log(props.obj);
  const [allgrive, setAllgrive] = useState([]);
  return (
    <div
      onClick={() => {
        props.setModal(true);
        props.setModalContent(props.obj);
      }}
      className='w-56 rounded-lg flex relative flex-col justify-between gap-8 bg-light border cursor-pointer border-gray-200 p-5'
    >
      <div>
        <div className='flex items-center gap-3'>
          <div className=' h-10 w-10 rounded-lg bg-red-400 flex items-center justify-center'>
            <p className='text-2xl text-center font-medium text-white'>
              {props?.obj?.companyName?.charAt(0) ?? ''}
            </p>
          </div>
          <div>
            <p className='text-md font-semibold'>
              {props.obj.companyName ?? ''}
            </p>
            <p className='text-xs'>{props.obj.name}</p>
          </div>
        </div>

        <p className='text-sm font-semibold mt-5'>{props.obj.issue ?? ''}</p>

        <p className='text-sm mt-5'>{props.obj.description ?? ''}</p>
      </div>
      <div className='flex items-center gap-1 text-gray-400'>
        <BiTimeFive />
        <span className='text-xs'>{props.obj.timestamp ?? ''}</span>
      </div>
    </div>
  );
};

export default Card;
