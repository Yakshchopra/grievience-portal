import React from 'react';
import Button from './shared/Button';
import Input from './shared/Input';
import { useFormik } from 'formik';
import { RiErrorWarningFill } from 'react-icons/ri';
import http  from '../http';

const Form = () => {
  const validate = (values: any) => {
    const errors = {} as any;

    if (!values.companyName) {
      errors.companyName = 'Required';
    }

    if (!values.job) {
      errors.job = 'Required';
    }

    if (!values.issue) {
      errors.issue = 'Required';
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      companyName: '',
      job: '',
      issue: '',
      description: '',
    },
    validate,
    onSubmit: async (values) => {
      console.log(values);
      try {
        await submit(values);
        alert("Form Submitted")
      } catch (err: any) {
        alert(err.error.message)
      }
    },
  });
  const submit = async (body: any) => {
    try {
      let regNo = localStorage.getItem('regNo')
      let response = await http('POST', 'submitform/'+ regNo, false, body);
      return response;
    } catch (err) {
      throw err;
    }
  }

  return (
    <div className='mt-8'>
      <div className='flex'>
        <div className='flex w-full flex-col gap-3'>
          <form onSubmit={formik.handleSubmit}>
            <div className='relative'>
              <Input
                text='Company Name'
                name='companyName'
                value={formik.values.companyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type='text'
                size='sm'
              />
              {formik.touched.companyName && formik.errors.companyName && (
                <p className='text-sm flex items-center gap-1 text-red-500 mt-1'>
                  <RiErrorWarningFill />
                  {formik.errors.companyName}
                </p>
              )}
            </div>

            <div className='relative'>
              <Input
                text='Job Title'
                type='text'
                value={formik.values.job}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name='job'
                size='sm'
              />
              {formik.touched.job && formik.errors.job && (
                <p className='text-sm flex items-center gap-1 text-red-500 mt-1'>
                  <RiErrorWarningFill />
                  {formik.errors.job}
                </p>
              )}
            </div>

            <div className='relative'>
              <select
                name='issue'
                value={formik.values.issue}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`rounded-lg p-3 mt-4 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white border-2 border-border`}
                id='issue'
              >
                <option value=''>Select an issue</option>
                <option value='Not recieved test link'>
                  Not recieved test link
                </option>
                <option value='other'>Other</option>
              </select>

              {formik.touched.issue && formik.errors.issue && (
                <p className='text-sm flex items-center gap-1 text-red-500 mt-1'>
                  <RiErrorWarningFill />
                  {formik.errors.issue}
                </p>
              )}
            </div>
            <div className='relative'>
              <textarea
                placeholder='Description'
                name='description'
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`rounded-lg p-3 h-36 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white border-2 border-border`}
              />
            </div>

            <Button name='Submit' type='submit' />
          </form>
        </div>
        <div className='w-full'></div>
      </div>
    </div>
  );
};

export default Form;
