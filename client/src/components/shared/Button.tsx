import React from 'react';

const Button = (props: any) => {
  return (
    <button className='bg-primary font-semibold focus:outline-none delay-75 ease-linear duration-100 transform hover:-translate-y-1 outline-none text-white rounded-lg px-16 py-4 mt-8'>
      {props.name}
    </button>
  );
};

export default Button;
