import React from 'react';

const Input = (props: any) => {
  return (
    <input
      placeholder={props.text}
      name={props.name}
      onBlur={props.onBlur}
      onChange={props.onChange}
      value={props.value}
      type={props.type}
      className={`rounded-lg ${
        props.size === 'sm' ? 'p-3 mt-4' : 'p-4 mt-6'
      } w-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent outline-none bg-white border-2 border-border`}
    />
  );
};

export default Input;
