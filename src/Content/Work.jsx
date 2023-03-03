import React from 'react'
import { Link } from 'react-router-dom'
import Pattern from '../Images/Pattern.jpg'
import Pattern1 from '../Images/Pattern1.jpg'
import { Footer } from './Footer'


const Work = () => {
  return (
    <>
      <section className='relative font-Manrope'>

        <div className="lg:w-5/6 md:w-full  mx-auto  rounded-3xl overflow-hidden shadow-sm bg-[#060C3C] text-white  font-Manrope">
          <div className="px-8 py-6  ">
            <h1 className='font-bold lg:text-3xl md:text-2xl  '>How Eyewitnex works</h1>

            <div className=' lg:flex  md:column-1  '>
              <div className="sm:col-span-6 md:col-span-3 lg:col-span-1">
                <div className="grid sm:grid-rows-12 gap-8 py-8 md:py-12 ">

                  <p className=''>
                    <button className='text-black border bg-white rounded-xl pr-2 text-center pl-2 m-auto '>Step <strong>1</strong></button>
                    <span className=''> Buyer or Seller starts a transaction </span>
                  </p>
                  <p className=''>
                    <button className='text-[#F4F1FF66] border border-gray-500 bg-[#060C3C] rounded-xl pr-2 text-center pl-2 '>Step <strong>2</strong></button>
                    <span className=' text-[#F4F1FF66]'>Buyer pays into Eyewitnex  </span>
                  </p>
                  <p className=''>
                    <button className='text-[#F4F1FF66] border border-gray-500 bg-[#060C3C] rounded-xl pr-2 text-center pl-2 mr-7 '>Step <strong>3</strong></button>
                    <span className='ml-0 text-[#F4F1FF66]'> Seller sends item </span>
                  </p>
                  <p className=''>
                    <button className='text-[#F4F1FF66] border border-gray-500 bg-[#060C3C] rounded-xl pr-2 text-center pl-2 '>Step <strong>4</strong></button>
                    <span className=' text-[#F4F1FF66]'> Buyer receives item </span>
                  </p>
                  <p className=''>
                    <button className='text-[#F4F1FF66] border border-gray-500 bg-[#060C3C] rounded-xl pr-2 text-center pl-2 '>Step <strong>5</strong></button>
                    <span className=' ml-2 text-[#F4F1FF66]'>Eyewitnex releases money to the seller </span>
                  </p>
                </div>

              </div>
              <div className='w-42 ml-auto '>
                <svg xmlns="http://www.w3.org/2000/svg" width="360" height="340" viewBox="0 0 360 340" fill="none" className='  lg:object-none h-4/6 w-full md:object-contain h-48 w-98 '>
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.07696 178.814C-2.48186 114.39 13.7704 38.9784 70.5912 8.49409C123.056 -19.6534 177.848 34.5482 234.203 53.742C277.165 68.3744 333.536 63.7775 353.155 104.732C372.677 145.485 340.461 189.491 318.017 228.707C298.7 262.461 273.782 290.037 238.176 305.635C189.434 326.989 135.242 354.439 88.3149 329.339C34.5366 300.573 4.44292 239.746 1.07696 178.814Z" fill="#C4C4C4" />
                </svg>

              </div>

            </div>


          </div>
        </div>

        <div>

        </div>
        <div className='p-16  mb-4'>
          <p className=' lg:w-2/4 md:w-full m-auto  '>
            There is no point to transact in fear or not even transact out of fear. Eyewitnex keeps both parties in charge of the transaction every step of the way
          </p>

          <div className='p-8'>
            <button
              className="mb-2 block lg:w-1/3 md:w-full m-auto rounded-2xl   bg-[#6241D4] p-3 text-xs font-medium uppercase 
 leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-purple-400
  hover:shadow- focus:bg-purple-600 focus:shadow- focus:outline-none focus:ring-0  active:shadow-black font-Manrope">
              <span className=''>   Start Transcation </span></button>

          </div>
        </div>
        {/**the sides design patterns */}
        <div className="absolute  right-0   bottom-16 pointer-events-none max-md:hidden" aria-hidden="true">
          <img src={Pattern1} alt="" className='w-42 h-60' />
        </div>
        <div className="absolute    bottom-16 pointer-events-none max-md:hidden" aria-hidden="true">
          <img src={Pattern} alt="" className='w-40' />
        </div>
        <div >
        </div>

        <div className='mb-6'>
          <h1 className='font-bold lg:text-3xl md:text-2xl  mb-5 '>
            Frequently asked questions (FAQs)</h1>
        </div>
        <div className='p-6 mb-6'>
          <Footer />
        </div>


      </section>


    </>
  )
}

export default Work