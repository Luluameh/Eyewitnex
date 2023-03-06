import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Images/Logo.jpg'

export const Footer = () => {
  return (
    
    <footer className='bg-Bg '>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 m-auto lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <img src={Logo} alt='' className='rounded-2xl'/>
            </div>
            <div className="text-sm text-gray-400">
            <p className=''>
A secure Escrow platform that stands as a third party between buyers and sellers to ensure both parties transact safely without scam or fraud
</p>
<p className='m-4 '>Follow us on social media </p>
<div className='flex space-x-3'>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<circle opacity="0.1" cx="16" cy="16" r="16" fill="#F4F1FF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M17.3515 22V16.6H18.9898L19.2574 14.2H17.3515V13.0311C17.3515 12.4131 17.3673 11.8 18.2303 11.8H19.1044V10.0841C19.1044 10.0583 18.3536 10 17.594 10C16.0077 10 15.0144 10.9943 15.0144 12.8201V14.2H13.2616V16.6H15.0144V22H17.3515Z" fill="#F4F1FF"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<circle opacity="0.1" cx="16" cy="16" r="16" fill="#F4F1FF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13.7442 10.0736C12.7682 10.1177 11.9222 10.3565 11.239 11.0372C10.5535 11.7215 10.3179 12.5714 10.2737 13.538C10.2463 14.1413 10.0858 18.699 10.5512 19.8942C10.865 20.7006 11.483 21.3206 12.2962 21.6356C12.6757 21.7833 13.1088 21.8833 13.7442 21.9125C19.057 22.1531 21.0264 22.0221 21.8569 19.8942C22.0043 19.5154 22.1057 19.0824 22.1337 18.4481C22.3766 13.118 22.0944 11.9627 21.1684 11.0372C20.434 10.3041 19.5701 9.80505 13.7442 10.0736ZM13.7931 20.8405C13.2114 20.8143 12.8958 20.7173 12.6852 20.6357C12.1554 20.4297 11.7575 20.0331 11.5529 19.506C11.1985 18.5978 11.316 14.2843 11.3476 13.5863C11.3787 12.9026 11.5171 12.2778 11.9991 11.7954C12.5957 11.1999 13.3665 10.908 18.6149 11.145C19.2998 11.176 19.9257 11.3142 20.4089 11.7954C21.0056 12.3909 21.3015 13.1682 21.0604 18.4001C21.0342 18.9807 20.9369 19.2958 20.8552 19.506C20.3153 20.8907 19.0731 21.0829 13.7931 20.8405ZM18.6728 12.8138C18.6728 13.208 18.9932 13.5286 19.3887 13.5286C19.7843 13.5286 20.1053 13.208 20.1053 12.8138C20.1053 12.4195 19.7843 12.0992 19.3887 12.0992C18.9932 12.0992 18.6728 12.4195 18.6728 12.8138ZM13.1404 15.9928C13.1404 17.6817 14.512 19.051 16.204 19.051C17.896 19.051 19.2676 17.6817 19.2676 15.9928C19.2676 14.3038 17.896 12.9353 16.204 12.9353C14.512 12.9353 13.1404 14.3038 13.1404 15.9928ZM14.2155 15.9928C14.2155 14.897 15.1057 14.0079 16.204 14.0079C17.3024 14.0079 18.1925 14.897 18.1925 15.9928C18.1925 17.0892 17.3024 17.9785 16.204 17.9785C15.1057 17.9785 14.2155 17.0892 14.2155 15.9928Z" fill="#F4F1FF"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<circle opacity="0.1" cx="16" cy="16" r="16" fill="#F4F1FF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M21.1394 21H19.1408V17.5005C19.1408 16.5405 18.7176 16.0049 17.9587 16.0049C17.1327 16.0049 16.6426 16.563 16.6426 17.5005V21H14.644V14.5H16.6426V15.231C16.6426 15.231 17.2696 14.1299 18.6826 14.1299C20.0961 14.1299 21.1394 14.9931 21.1394 16.7791V21ZM12.3666 13.4604C11.6926 13.4604 11.1465 12.9095 11.1465 12.23C11.1465 11.551 11.6926 11 12.3666 11C13.0401 11 13.5863 11.551 13.5863 12.23C13.5868 12.9095 13.0401 13.4604 12.3666 13.4604ZM11.1465 21H13.6447V14.5H11.1465V21Z" fill="#F4F1FF"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
<circle opacity="0.1" cx="16" cy="16" r="16" fill="#F4F1FF"/>
<path fillRule="evenodd" clipRule="evenodd" d="M13.7442 10.0736C12.7682 10.1177 11.9222 10.3565 11.239 11.0372C10.5535 11.7215 10.3179 12.5714 10.2737 13.538C10.2463 14.1413 10.0858 18.699 10.5512 19.8942C10.865 20.7006 11.483 21.3206 12.2962 21.6356C12.6757 21.7833 13.1088 21.8833 13.7442 21.9125C19.057 22.1531 21.0264 22.0221 21.8569 19.8942C22.0043 19.5154 22.1057 19.0824 22.1337 18.4481C22.3766 13.118 22.0944 11.9627 21.1684 11.0372C20.434 10.3041 19.5701 9.80505 13.7442 10.0736ZM13.7931 20.8405C13.2114 20.8143 12.8958 20.7173 12.6852 20.6357C12.1554 20.4297 11.7575 20.0331 11.5529 19.506C11.1985 18.5978 11.316 14.2843 11.3476 13.5863C11.3787 12.9026 11.5171 12.2778 11.9991 11.7954C12.5957 11.1999 13.3665 10.908 18.6149 11.145C19.2998 11.176 19.9257 11.3142 20.4089 11.7954C21.0056 12.3909 21.3015 13.1682 21.0604 18.4001C21.0342 18.9807 20.9369 19.2958 20.8552 19.506C20.3153 20.8907 19.0731 21.0829 13.7931 20.8405ZM18.6728 12.8138C18.6728 13.208 18.9932 13.5286 19.3887 13.5286C19.7843 13.5286 20.1053 13.208 20.1053 12.8138C20.1053 12.4195 19.7843 12.0992 19.3887 12.0992C18.9932 12.0992 18.6728 12.4195 18.6728 12.8138ZM13.1404 15.9928C13.1404 17.6817 14.512 19.051 16.204 19.051C17.896 19.051 19.2676 17.6817 19.2676 15.9928C19.2676 14.3038 17.896 12.9353 16.204 12.9353C14.512 12.9353 13.1404 14.3038 13.1404 15.9928ZM14.2155 15.9928C14.2155 14.897 15.1057 14.0079 16.204 14.0079C17.3024 14.0079 18.1925 14.897 18.1925 15.9928C18.1925 17.0892 17.3024 17.9785 16.204 17.9785C15.1057 17.9785 14.2155 17.0892 14.2155 15.9928Z" fill="#F4F1FF"/>
</svg>

</div>


     </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 m-auto lg:col-span-2">
            <h6 className="text-gray-200 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/" className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="/Signup" className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">Start a Transaction</Link>
              </li>
              <li className="mb-2">
                <Link to="/Login" className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">Join a Transaction</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">My Transactions</Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">My Profile</Link>
              </li>                            
            </ul>
          </div>

          {/* 3rd block */}
          <div className="sm:col-span-6  md:col-span-3 m-auto  lg:col-span-4 ">
            <h6 className="text-gray-200 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="/About" className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">About Us</Link>
              </li>
              <li className="mb-2">
                <Link to="/Blog" className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">Blog</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6  md:col-span-3 m-auto  lg:col-span-2 ">
            <h6 className="text-gray-200 font-medium mb-2">Support</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-300 hover:text-gray-700 transition duration-150 ease-in-out">Help  & Support</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-300 hover:text-gray-700 transition duration-150 ease-in-out">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-300 hover:text-gray-700 transition duration-150 ease-in-out">Privacy Policy</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-300 hover:text-gray-700 transition duration-150 ease-in-out">FAQs</Link>
              </li>
            </ul>
          </div>


  
  </div> 
 {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-500">

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">© 2023  <a className="text-blue-700 hover:underline" href="/">Eyewitnex</a>. All rights reserved.</div>

        </div>

      </div>
    </footer>





    
  )
}
export default Footer;
