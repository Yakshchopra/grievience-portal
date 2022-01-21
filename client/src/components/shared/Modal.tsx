import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import Button from './Button';
import http from '../../http';
import toast, { Toaster } from 'react-hot-toast';

const Modal = (props: any) => {
  const resolve = async () => {
    console.log('hji');
    try {
      let regNo = localStorage.getItem('regNo');
      let response: any = await http(
        'GET',
        'resolve/' +
          props.modalContent.registrationNumber +
          '/' +
          props.modalContent._id,
        false
      );
      console.log(response.data);

      toast.success('Case Resolved!');
      setTimeout(() => {
        props.setModal(false);
      }, 1500);
    } catch (err) {
      console.log(err);
      toast.error('Unable to resolve!');
    }
  };

  let res = props.modalContent.timestamp.split('T');

  return (
    <>
      <Toaster />
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
                <p className='text-2xl text-center font-medium text-white'>
                  {console.log(props.modalContent)}
                  {props?.modalContent?.companyName?.charAt(0) ?? ''}
                </p>
              </div>
              <div>
                <p className='text-md font-semibold'>
                  {props.modalContent.companyName}
                </p>
                <p className='text-xs'>{props.modalContent.jobTitle}</p>
              </div>
            </div>

            <div className='flex items-center gap-1 mt-5 text-gray-400'>
              <BiTimeFive />

              <span className='text-xs'>{res[0]}</span>
            </div>

            <p className='text-sm mt-5'>
              <span className='font-semibold'>Name:</span>{' '}
              {props.modalContent.name}
            </p>

            <p className='text-sm mt-2'>
              <span className='font-semibold'>Contact:</span>{' '}
              {props.modalContent.contact}
            </p>
            <p className='text-sm mt-2'>
              <span className='font-semibold'>Personal Email:</span>{' '}
              {props.modalContent.personalEmail}
            </p>
            <p className='text-sm mt-2'>
              <span className='font-semibold'>College Email:</span>{' '}
              {props.modalContent.collegeEmail}
            </p>

            <p className='text-sm font-semibold mt-5'>
              {props.modalContent.issue}
            </p>

            <p className='text-sm mt-5'>{props.modalContent.description}</p>
          </div>

          <Button
            name={props.modalContent.status ? 'Resolved' : 'Resolve'}
            size='sm'
            onClick={() => {
              resolve();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Modal;
