import React from 'react';
import Button from './shared/Button';
import Input from './shared/Input';
import srmLogo from '../assets/srmLogo.png';
import illustration from '../assets/illustration.svg';
import { useFormik } from 'formik';
import { RiErrorWarningFill } from 'react-icons/ri';
import http from '../http';
import { useNavigate } from 'react-router';

const FacultyLogin = () => {
  let navigate = useNavigate()
  const validate = (values: any) => {
    const errors = {} as any;

    if (!values.email) {
      errors.email = 'Required';
    }

    if (!values.password) {
      errors.password = 'Required';
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
      console.log(values);
      try {
        await formlogin(values)
        navigate('/faculty')
      } catch {
        
      }
    },
  });

  async function formlogin(BODY: any) {
    BODY.username = BODY.registrationNumber;
    try {
      let response: any = await http('POST', 'facultylogin', true, BODY);
      console.log(response)
      
    } catch(err) {
      throw err;
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
          <form onSubmit={formik.handleSubmit}>
            <div className='relative'>
              <Input
                text='Email'
                name='email'
                value={formik.values.registrationNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type='text'
              />
              {formik.touched.registrationNumber && formik.errors.registrationNumber && (
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
        </div>
      </div>
    </div>
  );
};

export default FacultyLogin;
