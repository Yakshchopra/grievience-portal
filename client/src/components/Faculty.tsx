import React, { useState, useEffect } from 'react';
import srmLogo from '../assets/srmLogo.png';
import Card from './shared/Cardfac';
import Modal from './shared/Modal';
import http from '../http';
const list = [
  {
    forms: [
      {
        companyName: 'Amazon',
        jobTitle: 'SDE Intern',
        issue: 'Test link not recieved',
        description:
          'Diya hi nahi test link mai dhoondhta reh gya aaya hi nahi',
        time: '13 Nov 2021',
        name: 'Yaksh Chopra',
      },
    ],
    personalEmail: 'yakshchopra@gmail.com',
    collegeEmail: 'yc3355@srmist.edu.in',
    contact: '9419120011',
  },
  {
    forms: [
      {
        companyName: 'Foogle',
        jobTitle: 'CEO',
        issue: 'Aise hi man kiya',
        description:
          'Diya hi nahi test link mai dhoondhta reh gya aaya hi nahi',
        time: '13 Nov 2021',
      },
    ],
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
  const [allforms, setAllforms] = useState(list);
  const retrieveform = async () => {
    try {
      let response: any = await http('GET', 'getallgrieve', false);
      console.log(response);
      setAllforms(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    retrieveform();
  }, []);

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
          {/* {allforms.map((item: any) => {
            console.log(item)
            return (item.forms.map((item1: any) => {
              item.name = item1.name;
              item.collegeEmail = item1.collegeEmail;
              item.personalEmail = item1.personalEmail;
              item._id = item._id;

           return (
              <Card
                det = {item}
               obj={item1}
               onClick={() => {
                 setModalContent(item1)
                 setModal(true)
               }}
              />
            );
        }));
           
          })} */}
          {allforms.map((item: any) => {
            return (item.forms.map((item1: any) => {
              if (item1.status === false) {
                console.log(item)
                item1.name = item.name;
                item1.collegeEmail = item.collegeEmail;
                item1.personalEmail = item.personalEmail;
            
                item1.registrationNumber = item.registrationNumber

                return (
                  <Card
                    type='faculty'
                    obj={item1}
                    setModal={setModal}
                    setModalContent={setModalContent}
                  />
                );
              }
            }))
          })}

          {/* Card */}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
