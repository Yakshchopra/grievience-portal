import React from 'react';

const Input = (props: any) => {
  return (
    <input
      placeholder={props.text}
      className='rounded-lg p-4 w-full focus:outline-none focus:ring-2 focus:ring-primary mt-6 focus:border-transparent outline-none bg-white border-2 border-border'
    />
  );
};

export default Input;
