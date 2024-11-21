import React from 'react';
import { useParams } from 'react-router-dom';
import SearchComponent from '../Components/TractorComponents/SearchComponent';
import TractorsList from '../Components/TractorComponents/TractorsList';

const TractorsPage = () => {
  // Extract parameters from the URL
  const { type } = useParams();

  return (
    <div className='w-11/12 mt-8 mx-auto'>
  

      {/*  */}
      <div className='grid grid-cols-4  mt-4 gap-4'>
        <div>
        <h2 className='font-medium'>
        Home &gt; Tractors &gt; {type}
      </h2>
          <SearchComponent/>
        </div>
        <div className='col-span-3'>
          <TractorsList/>
        </div>

      </div>
    </div>
  );
};

export default TractorsPage;
