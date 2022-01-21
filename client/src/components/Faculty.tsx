import React, { useState, useEffect } from 'react';
import srmLogo from '../assets/srmLogo.png';
import Card from './shared/Cardfac';
import Modal from './shared/Modal';
import http from '../http';
import { useNavigate } from 'react-router-dom';

const list = [] as any;

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
  const [filtereddata, setFilteredData] = useState(allforms);

  const retrieveform = async () => {
    try {
      let response: any = await http('GET', 'getallgrieve', false);
      console.log(response);
      setAllforms(response.data);
      setFilteredData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    retrieveform();
  }, []);

  const search = (value_name: string, value_type?: string) => {
    console.log(value_name);
    let newdata = allforms.filter((item: any) => {
      item.name.toLowerCase().includes(value_name.toLowerCase());
    });
    // if (value_type) {
    //   newdata = allforms.filter((item: any) => {
    //     item.forms.filter((item1: any) => {
    //       item1.issue.includes(value_type);
    //     });
    // });
    // }

    // let mylist = [];
    // for (let i = 0; i < newdata.length; i++) {
    //   mylist = [];
    //   mylist = newdata[i].forms.map((item: any) => {
    //     if (item.issue == value_type) {
    //       return item;
    //     }
    //   });
    //   newdata[i].forms = mylist;
    // }

    setFilteredData(newdata);
  };

  let naviget = useNavigate();

  return (
    <div className='bg-blue-50 flex flex-col gap-4 h-screen w-screen overflow-hidden p-5'>
      {modal && <Modal setModal={setModal} modalContent={modalContent} />}
      {/* Navbar */}
      <div className='h-20 bg-darkBlue rounded-lg w-full px-5 flex justify-between items-center'>
        <img src={srmLogo} alt='srm-logo' />
        <button
          onClick={() => naviget('/facultyLogin')}
          className='bg-primary font-semibold focus:outline-none delay-75 ease-linear duration-100 transform hover:-translate-y-1 outline-none text-white rounded-lg px-10 py-3'
        >
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
        <div className='flex gap-16 bg-red-300 mt-8 p-3'>
          <div className='bg-gray-100'>
            <input onChange={(e) => search(e.target.value)} />
          </div>
          <div className='bg-gray-100'>
            <input type='Date'></input> to <input type='Date'></input>
          </div>
          <div className='bg-gray-100'>
            <select>
              <option value=''>Select me</option>
              <option value='Not recieved test link'>
                Not recieved test link
              </option>
              <option value='Other'>Other</option>
            </select>
          </div>
          <button className='bg-gray-100'>Search</button>
        </div>

        <div className='mt-8 flex gap-4 flex-wrap'>
          {filtereddata.map((item: any) => {
            return item.forms.map((item1: any) => {
              console.log(item);

              if (item1.status === false) {
                console.log(item);
                item1.name = item.name;
                item1.collegeEmail = item.collegeEmail;
                item1.personalEmail = item.personalEmail;
                item1.contact = item.contact;
                item1.registrationNumber = item.registrationNumber;

                return (
                  <Card
                    type='faculty'
                    obj={item1}
                    setModal={setModal}
                    setModalContent={setModalContent}
                  />
                );
              }
            });
          })}

          {/* Card */}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
