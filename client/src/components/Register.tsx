import React from 'react';
import Button from './shared/Button';
import Input from './shared/Input';
import srmLogo from '../assets/srmLogo.png';
import ill from '../assets/ill.svg';
import { Formik, useFormik } from 'formik';
import { RiErrorWarningFill } from 'react-icons/ri';
import htttp from '../http';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const naviget = useNavigate();
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
    if (!values.fa) {
      errors.fa = 'Required';
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
      fa: '',
    },
    validate,
    onSubmit: async (values) => {
      await formsubmit(values);
    },
  });
  async function formsubmit(BODY: any) {
    try {
      let response = await htttp('POST', 'signup', true, BODY);
      console.log(response);
      if (!response) {
        toast.error('Registration Failed');
      } else {
        toast.success('Successfully Registered!');
      }
    } catch (err) {
      console.log(err);
      //toast.success(err.message.message)
    }
  }

  return (
    <>
      <Toaster />
      <div className='sm:flex bg-light md:flex-row flex-col p-3 h-screen relative'>
        <div className='h-20 md:hidden w-full rounded-lg bg-darkBlue flex items-center justify-between px-5'>
          <img src={srmLogo} alt='srm-logo' className='h-7' />
          <span
            onClick={() => naviget('/')}
            className='bg-primary rounded-md text-sm text-white py-2 px-3 font-medium focus:outline-none delay-75 ease-linear duration-100 transform hover:-translate-y-1 outline-none'
          >
            Faculty Login
          </span>
        </div>
        <div className='w-5/12 h-full md:flex justify-between hidden rounded-lg flex-col bg-darkBlue p-8'>
          <div>
            <img
              src={srmLogo}
              alt='srm-logo'
              draggable={false}
              className='h-10'
            />
          </div>
          <img
            src={ill}
            alt='hero-illustration'
            draggable={false}
            className='mx-auto lg:h-auto h-44'
          />
          <div className='text-white text-center lg:px-5 px-0 lg:mb-10 mb-5'>
            <p className='font-semibold text-xl text-white'>
              Placement Grievience Portal
            </p>
            <p className='mt-3 lg:mb-4 mb-0'>
              Drop in all your placement related grieviences here to get them
              resolved
            </p>
            <Button
              name='Faculty Login'
              onClick={() => {
                naviget('/facultyLogin');
              }}
            />
          </div>
        </div>
        <div className='w-full sm:mt-auto mt-28 flex h-full justify-center items-center'>
          <div className='sm:w-1/2 w-full sm:px-0 px-5'>
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

              <div className='md:flex block gap-3'>
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
              <div className='md:flex block gap-3'>
                <div className='relative w-full'>
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
                <div className='relative w-full'>
                  <select
                    name='fa'
                    value={formik.values.fa}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`rounded-lg p-4 mt-6 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white border-2 border-border`}
                    id='issue'
                  >
                    <option value=''>Faculty Advisor</option>
                    <option value='Not recieved test link'>
                      K.C. Prabushankar
                    </option>
                  </select>

                  {formik.touched.fa && formik.errors.fa && (
                    <p className='text-sm flex items-center gap-1 text-red-500 mt-1'>
                      <RiErrorWarningFill />
                      {formik.errors.fa}
                    </p>
                  )}
                </div>
              </div>

              <div className='md:flex block gap-3'>
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
            <p className='my-5'>
              Already registered?{' '}
              <span
                className='text-primary cursor-pointer'
                onClick={() => {
                  naviget('/');
                }}
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
