import React from 'react';
import { Link } from 'react-router-dom'
import { Footer } from './Footer';

export const Ending = () => {
  return (
    <section className='font-Manrope'>
    <>
    <div className='mb-2'>
          <h1 className='font-bold lg:text-3xl md:text-2xl  mb-3  text-center'>
            Frequently asked questions (FAQs)</h1>
        </div>
     



  <div className=' right-0  ml-10 text-[#060C3C]'> 
  <h2 className='font-bold text-xl p-3'>General</h2>
  <p className='p-2'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
 <span>  What is Escrow? </span></p>
 <p className='p-2'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
 <span> Is Eyewitnex an Escrow service?  </span></p>
 <p className='p-2'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
 <span>How does Eyewitnex work?   </span></p>
 <p className='p-2'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
 <span> What if there is conflict?  </span></p>
 <p className='p-2'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 inline-block">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
 <span>How am I protected as a buyer?  </span></p>

 <p className='p-3 mb-5'>
 <Link to="/FAQs"
 className="px-2 py-1 text-gray-800 bg-white rounded-full border text-sm border-indigo-500/75 hover:bg-gray-100 transition duration-150 ease-in-out"
 >
  See More FAQs
</Link>
 </p>
</div>
<Footer/>
    </>
</section>
  )
}
