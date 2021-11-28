import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlineError } from 'react-icons/md';

const Card = (props: any) => {
  return (
    <div
      onClick={() => {
        props.type === 'faculty' && props.setModal(true);
      }}
      className='w-56 rounded-lg flex relative flex-col justify-between gap-8 bg-light border cursor-pointer border-gray-200 p-5'
    >
      {props.type !== 'faculty' && (
        <div className='absolute cursor-pointer text-red-500 left-full bottom-full transform -translate-x-1/2 translate-y-1/2'>
          <MdOutlineError className='text-2xl' />
        </div>
      )}
      <div>
        <div className='flex items-center gap-3'>
          <div className=' h-10 w-10 rounded-lg bg-red-400 flex items-center justify-center'>
            <p className='text-2xl text-center font-medium text-white'>A</p>
          </div>
          <div>
            <p className='text-md font-semibold'>Amazon</p>
            <p className='text-xs'>SDE - Intern</p>
          </div>
        </div>
        {props.type === 'faculty' && (
          <p className='text-sm font-semibold mt-5'>Not recieved test link</p>
        )}
        <p className='text-sm mt-5'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has
        </p>
      </div>
      <div className='flex items-center gap-1 text-gray-400'>
        <BiTimeFive />
        <span className='text-xs'>13 Nov 2021</span>
      </div>
    </div>
  );
};

export default Card;
