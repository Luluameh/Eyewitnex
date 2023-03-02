import React from 'react'
import Features from '../Content/Features'

import Header from '../Content/Header'


const Home = () => {
  return (
    <>
        <div className="flex flex-col min-h-screen overflow-hidden">

    <Header/>
    <main className='flex-grow'>
    <Features/>
    
    </main>
    </div>
    </>
  )
}

export default Home