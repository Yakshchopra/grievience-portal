import React from 'react';
import Button from './shared/Button';
import Input from './shared/Input';

const Form = () => {
  return (
    <div className='mt-8'>
      <div className='flex'>
        <div className='flex w-full flex-col gap-3'>
          {/* <input type='text' placeholder='company name' />
          <input type='text' placeholder='college email id' />
          <input type='text' placeholder='personal email id' />
          <input type='text' placeholder='contact number' />
          <input type='text' placeholder='description' />
          <input type='text' placeholder='Reason' /> */}
          <Input text='Company Name' size='sm' />
          <select
            name='issue'
            className={`rounded-lg p-3 mt-4 w-full text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white border-2 border-border`}
            id='issue'
          >
            <option value=''>Select an issue</option>
            <option value='Not recieved test link'>
              Not recieved test link
            </option>
            <option value='other'>Other</option>
          </select>
          <textarea
            placeholder='Description'
            className={`rounded-lg p-3 h-56 mt-4 w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white border-2 border-border`}
          />
          <Button name='Submit' />
        </div>
        <div className='w-full'></div>
      </div>
    </div>
  );
};

export default Form;
