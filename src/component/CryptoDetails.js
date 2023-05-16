
import React from 'react';
import { useGetDetailQuery } from '../app/cryptoApi';
import { useParams } from 'react-router-dom';

export const CryptoDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetDetailQuery(id);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <p className='text-[25px] mb-2 border border-solid  p-4 shadow-lg '>{data.data.coin.description}</p>
      <a href={data.data.coin.websiteUrl} className='py-2.5 px-5 mr-2  text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  '>More Details</a>
    </>
  );
};
