import React from 'react'
import Features from '../Content/Features'
import { Ending } from '../Content/Ending'

import Header from '../Content/Header'


const Home = () => {
  return (
    <>
        <div className="flex flex-col min-h-screen overflow-hidden">

    <Header/>
    <main className='flex-grow'>
    <Features/>
    <div className='p-4 mb-4'>
          <Ending/>
        </div>


    </main>
    </div>
    </>
  )
}

export default Home