import React, { useState } from 'react';
import srmLogo from '../assets/srmLogo.png';
import Card from './shared/Card';
import Modal from './shared/Modal';

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

const Faculty = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    companyName: '',
    jobTitle: '',
    issue: '',
    description: '',
    time: '',
    name: '',
    contact: '',
    personalEmail: '',
    collegeEmail: '',
  });

  return (
    <div className='bg-blue-50 flex flex-col gap-4 h-screen w-screen overflow-hidden p-5'>
      {modal && <Modal setModal={setModal} modalContent={modalContent} />}
      {/* Navbar */}
      <div className='h-20 bg-darkBlue rounded-lg w-full px-5 flex justify-between items-center'>
        <img src={srmLogo} alt='srm-logo' />
        <button className='bg-primary font-semibold focus:outline-none delay-75 ease-linear duration-100 transform hover:-translate-y-1 outline-none text-white rounded-lg px-10 py-3'>
          Sign Out
        </button>
      </div>
      {/* Navbar end */}
      <div className='h-full w-full rounded-lg bg-white p-7'>
        <div className='flex gap-8'>
          <span className='text-lg cursor-pointer relative font-semibold'>
            All grieviences
            <div className='absolute top-full w-full h-1 mt-1 rounded-full bg-primary'></div>
          </span>
        </div>

        <div className='mt-8 flex gap-4 flex-wrap'>
          {/* Card */}
          {/* <Card type='faculty' setModal={setModal} /> */}
          {list.map((item: any) => {
            return (
              <Card
                type='faculty'
                setModal={setModal}
                companyName={item.companyName}
                job={item.jobTitle}
                description={item.description}
                issue={item.issue}
                time={item.time}
                obj={item}
                setModalContent={setModalContent}
              />
            );
          })}

          {/* Card */}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
