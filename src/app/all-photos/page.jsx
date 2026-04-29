import Cards from '@/components/Cards/Cards';
import React from 'react'

const AllPhotosPage = async () => {
    const res = await fetch('https://next-js-pixgen-pj.vercel.app/data.json');
    const data = await res.json();
  return (
    <div>
      <h1 className='text-2xl font-bold mt-9 mb-6'>🔥All Photos</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {
            data.map(data => <Cards key={data.id} topGenData={data}/>)
        }
      </div>
    </div>
  )
}

export default AllPhotosPage
