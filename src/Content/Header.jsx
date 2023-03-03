import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-white  m-0">
            <div className="justify-between px-1  m-0 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    

                        <Link to="/Home" className="flex space-x-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
<path d="M5.5 25H43V43.75H24.25C13.8947 43.75 5.5 35.3553 5.5 25Z" fill="#FFD43D"/>
<path opacity="0.8" d="M5.5 25C5.5 35.3553 13.8947 43.75 24.25 43.75V6.25C13.8947 6.25 5.5 14.6447 5.5 25Z" fill="#3A0FD0"/>
<path d="M43 6.25H29.875L43 19.375V6.25Z" fill="#6241D4"/>
</svg>   
     <h4 className="text-2xl font-bold text-black ">Eyewitnex</h4>
                        </Link>
                        
                        <div className="md:hidden">
                            <button
                                className="p-2 text-black rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li className="text-black hover:text-indigo-200">
                            <Link to="/Blog">Blog</Link>

                            </li>
                            <li className="text-black hover:text-indigo-200">
                            <Link to="/FAQs">FAQs</Link>

                            </li>
                            <li className="text-black hover:text-indigo-200">
                            <Link to="/about">About</Link>

                            </li>
                        </ul>
                        {/* For the menubar side */}

                        <div className="mt-3 space-y-2 lg:hidden max-md:inline-block">
                    <Link
                        to="/Login"
                        className="inline-block w-full px-4 py-2 text-center text-black bg-white rounded-full border  border-indigo-500/75 hover:bg-gray-400"
                    >
                        Login
                    </Link>
                    <Link
                        to="/Signup"
                        className="inline-block w-full px-4 py-2 text-center text-black bg-white rounded-full border border-indigo-500/75  hover:bg-gray-400"
                    >
                        Sign up
                    </Link>
                </div>
                    </div>
                </div>
                {/*For the normal menue side */}
                <div className="hidden space-x-2 md:inline-block">
                    <Link
                        to="/Login"
                        className="px-2 py-1 text-gray-800 bg-white rounded-full border border-indigo-500/75 hover:bg-gray-100 transition duration-150 ease-in-out"
                    >
                        Login
                    </Link>
                    <Link
                        to="/Signup"
                        className="px-2 py-1 text-black bg-white rounded-full  border border-indigo-500/75 hover:bg-gray-100 transition duration-150 ease-in-out"
                    >
                        Sign up
                    </Link>
                </div>
                
            </div>
        </nav>
    );
}


