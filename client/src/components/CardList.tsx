import React, {useState, useEffect} from 'react';
import Card from './shared/Card';
import http from '../http';

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
  const [allforms, setAllforms] = useState(list)
  const retrieveform = async () => {
    try {
      let regNo = localStorage.getItem('regNo');
      let response: any  = await http('GET', 'getallforms/' + regNo, false);
      console.log(response.data);
      setAllforms(response.data);
    } catch (err) {
      console.log(err)
    }
  }
  useEffect( () => {
    retrieveform()
  }, [])
  return (
    <div className='mt-8 flex gap-4 flex-wrap'>
      {/* Card */}
      {allforms.map((item: any) => {
        return <Card obj={item} />;
      })}

      {/* Card */}
    </div>
  );
};

export default CardList;
