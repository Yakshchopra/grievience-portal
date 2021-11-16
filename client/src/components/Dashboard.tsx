import React from 'react';
import srmLogo from '../assets/srmLogo.png';
import Button from './shared/Button';

const Dashboard = () => {
  return (
    <div className='bg-light h-screen w-screen p-5'>
      {/* Navbar */}
      <div className='h-20 bg-darkBlue rounded-lg w-full px-5 flex justify-between items-center'>
        <img src={srmLogo} alt='srm-logo' />
        <button className='bg-primary font-semibold focus:outline-none delay-75 ease-linear duration-100 transform hover:-translate-y-1 outline-none text-white rounded-lg px-10 py-3'>
          Sign Out
        </button>
      </div>
      {/* Navbar end */}
    </div>
  );
};

export default Dashboard;
