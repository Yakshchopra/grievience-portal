import React, { useState } from 'react';
import srmLogo from '../assets/srmLogo.png';
import Card from './shared/Card';
import Modal from './shared/Modal';

const Faculty = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className='bg-blue-50 flex flex-col gap-4 h-screen w-screen overflow-hidden p-5'>
      {modal && <Modal setModal={setModal} />}
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
          <Card type='faculty' setModal={setModal} />

          {/* Card */}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
