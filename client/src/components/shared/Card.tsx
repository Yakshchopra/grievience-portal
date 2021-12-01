import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlineError } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';

const Card = (props: any) => {
  return (
    <div
      onClick={() => {
        props.type === 'faculty' && props.setModal(true);
        props.type === 'faculty' && props.setModalContent(props.obj);
      }}
      className='w-56 rounded-lg flex relative flex-col justify-between gap-8 bg-light border cursor-pointer border-gray-200 p-5'
    >
      {props.type !== 'faculty' &&
        (!props.status ? (
          <div className='absolute cursor-pointer text-red-500 left-full bottom-full transform -translate-x-1/2 translate-y-1/2'>
            <MdOutlineError className='text-2xl' />
          </div>
        ) : (
          <div className='absolute cursor-pointer text-green-500 left-full bottom-full transform -translate-x-1/2 translate-y-1/2'>
            <AiFillCheckCircle className='text-2xl' />
          </div>
        ))}
      <div>
        <div className='flex items-center gap-3'>
          <div className=' h-10 w-10 rounded-lg bg-red-400 flex items-center justify-center'>
            <p className='text-2xl text-center font-medium text-white'>
              {props.obj.companyName[0]}
            </p>
          </div>
          <div>
            <p className='text-md font-semibold'>
              {props.obj.companyName ?? ''}
            </p>
            <p className='text-xs'>{props.obj.jobTitle ?? ''}</p>
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
