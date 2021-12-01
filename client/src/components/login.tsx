import React, { useState } from 'react';
import Button from './shared/Button';
import Input from './shared/Input';
import srmLogo from '../assets/srmLogo.png';
import illustration from '../assets/illustration.svg';
import { useFormik } from 'formik';
import { RiErrorWarningFill } from 'react-icons/ri';
import http from '../http';
import { useNavigate } from "react-router-dom";

const Login = () => {
  
  const validate = (values: any) => {
    const errors = {} as any;

    if (!values.registrationNumber) {
      errors.registrationNumber = 'Required';
    } else if (!/RA[0-9]{13}$/i.test(values.registrationNumber)) {
      errors.registrationNumber = 'Invalid Registration Number';
    }

    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password === '12345678') {
      errors.password = 'Must not be 12345678 !!!';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      registrationNumber: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      await formlogin(values);
      naviget('/dashboard');
    },
  });
  const naviget = useNavigate()
  async function formlogin(BODY: any){
    try {
      let response: any = await http('POST', 'login', true, BODY);
      console.log(response)
      
      localStorage.setItem('token', response.data.message.token);
      localStorage.setItem('regNo', response.data.message.registrationNumber);
    } catch(err) {
      console.log(err);
    }
  }

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
          <Button name='Faculty Login' onClick={() => {
            naviget('/facultyLogin')
          }}/>
        </div>
      </div>
      <div className='w-full flex h-full justify-center items-center'>
        <div className='sm:w-1/2 w-3/4'>
          <p className='sm:text-2xl text-xl font-semibold'>Student Login</p>
          <p className='text-gray-600 md:text-lg text-sm mt-1'>
            Login to get your griviences resolved
          </p>
          <form onSubmit={formik.handleSubmit}>
            <div className='relative'>
              <Input
                text='Registration Number'
                name='registrationNumber'
                value={formik.values.registrationNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type='text'
              />
              {formik.touched.registrationNumber &&
                formik.errors.registrationNumber && (
                  <p className='text-sm flex items-center gap-1 text-red-500 mt-1'>
                    <RiErrorWarningFill />
                    {formik.errors.registrationNumber}
                  </p>
                )}
            </div>
            <div className='relative'>
              <Input
                text='Password'
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type='password'
                name='password'
              />
            </div>
            {formik.touched.password && formik.errors.password && (
              <p className='text-sm flex items-center gap-1 text-red-500 mt-1'>
                <RiErrorWarningFill />
                {formik.errors.password}
              </p>
            )}
            <Button name='Login' type='submit' />
          </form>

          <p className='mt-5'>
            Not registered yet?{' '}
            <span className='text-primary cursor-pointer' onClick={()=>{naviget('/register')}}>Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
