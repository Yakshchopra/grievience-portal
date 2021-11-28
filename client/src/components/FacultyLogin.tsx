import React from 'react';
import Button from './shared/Button';
import Input from './shared/Input';
import srmLogo from '../assets/srmLogo.png';
import illustration from '../assets/illustration.svg';

const FacultyLogin = () => {
  return (
    <div className='flex bg-light md:flex-row flex-col p-3 h-screen relative'>
      <div className='h-20 md:hidden w-full rounded-lg bg-darkBlue flex items-center px-5'>
        <img src={srmLogo} alt='srm-logo' className='h-7' />
      </div>
      <div className='w-5/12 h-full md:block hidden rounded-lg bg-darkBlue p-8'>
        <img src={srmLogo} alt='srm-logo' />
        <img src={illustration} alt='hero-illustration' className='mx-auto' />
        <div className='text-white text-center px-5 mt-12'>
          <p className='font-semibold text-xl text-white'>
            Placement Grievience Portal
          </p>
          <p className='mt-3 mb-4'>
            Help students get their problems resolved.
          </p>
          <Button name='Student Login' />
        </div>
      </div>
      <div className='w-full flex h-full justify-center items-center'>
        <div className='sm:w-1/2 w-3/4'>
          <p className='sm:text-2xl text-xl font-semibold'>Faculty Login</p>
          <p className='text-gray-600 md:text-lg text-sm mt-1'>
            Glad to see you here!
          </p>
          <Input text='Email' />
          <Input text='Password' />
          <Button name='Login' />
        </div>
      </div>
    </div>
  );
};

export default FacultyLogin;
