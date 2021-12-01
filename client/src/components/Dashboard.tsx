import React, { useState, useEffect } from 'react';
import srmLogo from '../assets/srmLogo.png';
import { BiTimeFive } from 'react-icons/bi';
import Card from './shared/Card';
import CardList from './CardList';
import Form from './Form';
import http from '../http';
import { useNavigate } from 'react-router';

const Dashboard = () => {
  const [active, setActive] = useState('list');
  let naviget = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      naviget('/')
    }
  }, [])
  return (
    <div className='bg-blue-50 flex flex-col gap-4 h-screen w-screen overflow-hidden p-5'>
      {/* Navbar */}
      <div className='h-20 bg-darkBlue rounded-lg w-full px-5 flex justify-between items-center'>
        <img src={srmLogo} alt='srm-logo' />
        <button className='bg-primary font-semibold focus:outline-none delay-75 ease-linear duration-100 transform hover:-translate-y-1 outline-none text-white rounded-lg px-10 py-3' onClick={() => {
          localStorage.removeItem('token')
          localStorage.removeItem('regNo')
          naviget('/')
        }}>
          Sign Out
        </button>
      </div>
      {/* Navbar end */}
      <div className='h-full w-full rounded-lg bg-white p-7'>
        <div className='flex gap-8'>
          <span
            onClick={() => setActive('list')}
            className='text-lg cursor-pointer relative font-semibold'
          >
            All grieviences
            {active === 'list' && (
              <div className='absolute top-full w-full h-1 mt-1 rounded-full bg-primary'></div>
            )}
          </span>
          <span
            onClick={() => setActive('form')}
            className='text-lg cursor-pointer relative font-semibold'
          >
            Add grievience
            {active === 'form' && (
              <div className='absolute top-full w-full h-1 mt-1 rounded-full bg-primary'></div>
            )}
          </span>
        </div>

        {/* Card List */}
        {active === 'list' && <CardList />}
        {active === 'form' && <Form />}
      </div>
    </div>
  );
};

export default Dashboard;
