import React from 'react';
import Card from './shared/Card';

const list = [
  {
    companyName: 'Amazon',
    jobTitle: 'SDE Intern',
    issue: 'Test link not recieved',
    description: 'Diya hi nahi test link mai dhoondhta reh gya aaya hi nahi',
    time: '13 Nov 2021',
    name: 'Yaksh Chopra',
    personalEmail: 'yakshchopra@gmail.com',
    collegeEmail: 'yc3355@srmist.edu.in',
    contact: '9419120011',
  },
  {
    companyName: 'Foogle',
    jobTitle: 'CEO',
    issue: 'Aise hi man kiya',
    description: 'Diya hi nahi test link mai dhoondhta reh gya aaya hi nahi',
    time: '13 Nov 2021',
    name: 'Yaksh Chopra',
    personalEmail: 'yakshchopra@gmail.com',
    collegeEmail: 'yc3355@srmist.edu.in',
    contact: '9419120011',
  },
];

const CardList = () => {
  return (
    <div className='mt-8 flex gap-4 flex-wrap'>
      {/* Card */}
      {list.map((item: any) => {
        return <Card obj={item} />;
      })}

      {/* Card */}
    </div>
  );
};

export default CardList;
