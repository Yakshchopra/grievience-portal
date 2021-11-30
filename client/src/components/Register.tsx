import React from 'react';
import Button from './shared/Button';
import Input from './shared/Input';
import srmLogo from '../assets/srmLogo.png';
import illustration from '../assets/illustration.svg';
import { Formik, useFormik } from 'formik';
import { RiErrorWarningFill } from 'react-icons/ri';

const Register = () => {
  const validate = (values: any) => {
    const errors = {} as any;

    if (!values.name) {
      errors.name = 'Required';
    }

    if (!values.collegeEmail) {
      errors.collegeEmail = 'Required';
    }

    if (!values.personalEmail) {
      errors.personalEmail = 'Required';
    }

    if (!values.registrationNumber) {
      errors.registrationNumber = 'Required';
    } else if (!/RA[0-9]{13}$/i.test(values.registrationNumber)) {
      errors.registrationNumber = 'Invalid Registration Number';
    }

    if (!values.contact) {
      errors.contact = 'Required';
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
      name: '',
      personalEmail: '',
      collegeEmail: '',
      contact: '',
      registrationNumber: '',
      password: '',
    },
    validate,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

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
          <form onSubmit={formik.handleSubmit}>
            <div className='relative'>
              <Input
                text='Full Name'
                name='name'
                type='text'
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className='text-sm flex items-center gap-1 text-red-500 mt-1'>
                  <RiErrorWarningFill />
                  {formik.errors.name}
                </p>
              )}
            </div>

            <div className='flex gap-3'>
              <div className='relative w-full'>
                <Input
                  text='College Email'
                  name='collegeEmail'
                  value={formik.values.collegeEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type='email'
                />
                {formik.touched.collegeEmail && formik.errors.collegeEmail && (
                  <p className='text-sm flex items-center gap-1 text-red-500 mt-1'>
                    <RiErrorWarningFill />
                    {formik.errors.collegeEmail}
                  </p>
                )}
              </div>
              <div className='relative w-full'>
                <Input
                  text='Personal Email'
                  name='personalEmail'
                  value={formik.values.personalEmail}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type='email'
                />
                {formik.touched.personalEmail && formik.errors.personalEmail && (
                  <p className='text-sm flex items-center gap-1 text-red-500 mt-1'>
                    <RiErrorWarningFill />
                    {formik.errors.personalEmail}
                  </p>
                )}
              </div>
            </div>
            <div className='relative'>
              <Input
                text='Registeration Number'
                type='text'
                name='registrationNumber'
                value={formik.values.registrationNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.registrationNumber &&
                formik.errors.registrationNumber && (
                  <p className='text-sm flex items-center gap-1 text-red-500 mt-1'>
                    <RiErrorWarningFill />
                    {formik.errors.registrationNumber}
                  </p>
                )}
            </div>

            <div className='flex gap-3'>
              <div className='relative w-full'>
                <Input
                  text='Contact Number'
                  name='contact'
                  type='number'
                  value={formik.values.contact}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.contact && formik.errors.contact && (
                  <p className='text-sm flex items-center gap-1 text-red-500 mt-1'>
                    <RiErrorWarningFill />
                    {formik.errors.contact}
                  </p>
                )}
              </div>

              <div className='relative w-full'>
                <Input
                  text='Password'
                  name='password'
                  type='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password && (
                  <p className='text-sm flex items-center gap-1 text-red-500 mt-1'>
                    <RiErrorWarningFill />
                    {formik.errors.password}
                  </p>
                )}
              </div>
            </div>

            <Button name='Register' type='submit' />
          </form>
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
