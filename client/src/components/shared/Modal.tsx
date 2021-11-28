import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Button from './Button';

const Modal = (props: any) => {
  return (
    <div className='h-screen z-50 flex items-center justify-center w-screen fixed top-0 left-0 bg-backdrop'>
      <div className='w-96 rounded-lg flex relative flex-col justify-between gap-8 bg-light border border-gray-200 p-5'>
        <span
          onClick={() => props.setModal(false)}
          className='absolute top-5 text-gray-600 right-5 cursor-pointer text-2xl'
        >
          <AiOutlineCloseCircle />
        </span>
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

          <div className='flex items-center gap-1 mt-5 text-gray-400'>
            <BiTimeFive />
            <span className='text-xs'>13 Nov 2021</span>
          </div>

          <p className='text-sm mt-5'>
            <span className='font-semibold'>Name:</span> Yaksh Chopra
          </p>

          <p className='text-sm mt-2'>
            <span className='font-semibold'>Contact:</span> 9419120011
          </p>
          <p className='text-sm mt-2'>
            <span className='font-semibold'>Personal Email:</span>{' '}
            yaksh@ghghgh.com
          </p>
          <p className='text-sm mt-2'>
            <span className='font-semibold'>College Email:</span>{' '}
            yaksh@ghghgh.com
          </p>

          <p className='text-sm font-semibold mt-5'>Not recieved test link</p>

          <p className='text-sm mt-5'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has
          </p>
        </div>

        <Button name='Resolve' size='sm' />
      </div>
    </div>
  );
};

export default Modal;
