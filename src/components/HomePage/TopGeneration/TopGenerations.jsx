import { Card } from '@heroui/react';
import React from 'react'
import Cards from '../../Cards/Cards';

const TopGenerations = async () => {
    const res = await fetch('https://next-js-pixgen-pj.vercel.app/data.json');
    const data = await res.json();
    const topGen = data.slice(0, 10);
  return (
    <div>
      <h1 className='text-2xl font-bold mt-9 mb-6'>🔥Top Generations</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
            topGen.map(topGenData => <Cards key={topGenData.id} topGenData={topGenData}/>)
        }
      </div>
    </div>
  )
}

export default TopGenerations
