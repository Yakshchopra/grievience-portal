import React, { useState, useEffect } from 'react';
import Card from './shared/Card';
import http from '../http';

const list = [] as any;

const CardList = () => {
  const [allforms, setAllforms] = useState(list);
  const retrieveform = async () => {
    try {
      let regNo = localStorage.getItem('regNo');
      let response: any = await http('GET', 'getallforms/' + regNo, false);
      console.log(response.data);
      setAllforms(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    retrieveform();
  }, []);
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
