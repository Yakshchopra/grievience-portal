import React from 'react';
import Button from './shared/Button';
import Input from './shared/Input';
import srmLogo from '../assets/srmLogo.png';
import illustration from '../assets/illustration.svg';

const Register = () => {
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
            Drop in all your placement related grieviences here to get them
            resolved
          </p>
          <Button name='Faculty Login' />
        </div>
      </div>
      <div className='w-full flex h-full justify-center items-center'>
        <div className='sm:w-1/2 w-3/4'>
          <p className='sm:text-2xl text-xl font-semibold'>
            Student Registration
          </p>
          <p className='text-gray-600 md:text-lg text-sm mt-1'>
            Register to get your griviences resolved
          </p>
          <Input text='Full Name' />

          <div className='flex gap-3'>
            <Input text='College Email' />
            <Input text='Personal Email' />
          </div>

          <Input text='Registeration Number' />

          <div className='flex gap-3'>
            <Input text='Contact Number' />
            <Input text='Password' />
          </div>

          <Button name='Register' />
          <p className='mt-5'>
            Already registered?{' '}
            <span className='text-primary cursor-pointer'>Login</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;