import React from 'react'
import FeatureTwo from './FeatureTwo'

const Features = () => {



  return (
    <>
      <section className='font-Manrope'>
        <div className="text-center pb-12 md:pb-16">
          <h2 className="text-4xl md:text-5xl font-medium font-Manrope  mt-10 mb-2" data-aos="zoom-y-out">
            Buy or Sell securely on
            <span className="bg-clip-text text-purple-600">Whatsapp</span></h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
              This is a text supporting the title explaining the use of escrow in the whatever that it sees fit to talk about to the thirs line
            </p>
            <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="400">
              <div className='justify-center'>
                <button className="flex items-center transform -translate-y-1/2 bg-white rounded-md font-medium group p-4 " aria-controls="modal">
                  <svg className="w-6 h-6 fill-current text-purple-600 group-hover:text-gray-200 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                    <path d="M10 17l6-5-6-5z" />
                  </svg>
                  <span className="ml-2">Watch video tutorial</span>
                </button>
              </div>

            </div>
            {/* Form side */}
            <div className='mix-blend-darken bg-Pattern2 bg-right lg:p-10 md:p-0 '>
            <div className="p-4  ">
              <div className="max-w-sm mx-auto  rounded-lg overflow-hidden shadow-2xl">
                <div className="px-6 py-4 ">
                  <form className=" rounded px-8 pt-6 pb-8 mb-4  ">
                    <div className='mb-6'>
                      <select className="form-select mt-1 w-full p-2   text-sm text-gray-400 border border-gray-300 hover:border-gray-200 rounded">
                        <option>Are you a Buyer or a Seller ?</option>
                        <option>Buyer</option>
                        <option>Seller</option>
                      </select>
                    </div>
                    <div className="mb-6">
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" type="number" placeholder="Price" />
                    </div>
                    <div className="mb-6">
                      <input className="shadow appearance-none border border-gray-700 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="text" type="text" placeholder="Description" />
                    </div>
                    <div className="card-body flex mb-5 space-x-16">
                      <div className=''>
                        <strong>Total </strong>
                      </div>
                      <div className=''>
                        <strong>121 </strong>
                      </div>
                      <div className=''>
                        <strong>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                          </svg>
                        </strong>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="mb-2 block w-full  rounded-xl bg-[#6241D4] p-3 text-xs font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-purple-400 hover:shadow- focus:bg-purple-600 focus:shadow- focus:outline-none focus:ring-0  active:shadow-black font-Manrope">

                        Start Transcation
                      </button>
                    </div>
                  </form>
                </div>

              </div>

              <div className='m-16 '>
              </div>
            </div>
</div>




 </div>


        </div>
        <div className='  bg-[#060C3C]  w-full'>
          <div className=' flex  flex-row '>
            <p className='lg:w-1/3 md:w-0'>
          <svg xmlns="http://www.w3.org/2000/svg" width="134" height="194" viewBox="0 0 134 194" fill="none" className='w-14 h-16'>
<g opacity="0.35">
<path d="M60 0H0V60H60V0Z" fill="#36268C"/>
<path d="M134 60H60V134H134V60Z" fill="#36268C"/>
<path d="M109 170H85V194H109V170Z" fill="#36268C"/>
<path d="M48 146H0V194H48V146Z" fill="#36268C"/>
</g>
</svg>
</p>
<div className='lg:w-1/3 ml-6 md:ml-0 w-32 '>
<div className='m-aut0 text-black flex flex-row  gap-6 p-2 '>
  <div  className="mb-2 block text-center rounded-md bg-white p-2 text-xs 
   font-medium uppercase leading-normal text-black shadow transition duration-150 ease-in-out
    hover:bg-gray-300 font-Manrope"
     >
     1,000+
  <p className='font-bold'> Transactions</p>
  </div>
  <div className=' className="mb-2 block text-center rounded-md bg-white p-2 text-xs w-24 
   font-medium uppercase leading-normal text-black shadow transition duration-150 ease-in-out
    hover:bg-gray-300 font-Manrope"
 '>
     1,000+
  <p className='font-bold'>Buyers</p>
  </div>
  <div className=' className="mb-2 block text-center rounded-md bg-white p-2 text-xs w-24
   font-medium uppercase leading-normal text-black shadow transition duration-150 ease-in-out
    hover:bg-gray-300 font-Manrope"
 '>

     1,000+
  <p className='font-bold'>Sellers</p>
  </div>

</div>
</div>
<div className='lg:ml-auto md:ml-10'>
<svg xmlns="http://www.w3.org/2000/svg" width="134" height="194" viewBox="0 0 134 194" fill="none" className='w-14 h-16 '>
<g opacity="0.35">
<path d="M60 0H0V60H60V0Z" fill="#36268C"/>
<path d="M134 60H60V134H134V60Z" fill="#36268C"/>
<path d="M109 170H85V194H109V170Z" fill="#36268C"/>
<path d="M48 146H0V194H48V146Z" fill="#36268C"/>
</g>
</svg>

</div>
          </div>
</div>



            <FeatureTwo />



      </section>














    </>
  )
}

export default Features