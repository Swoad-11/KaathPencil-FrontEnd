import React, { useState } from 'react';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';

const Header = () => {
    const [user] = useAuthState(auth);
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className='header'>
            <nav
                className="relative w-full flex items-center justify-between py-3 bg-cyan-900 shadow-lg navbar navbar-expand-lg navbar-light"
            >
                <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                    <button
                        className="navbar-toggler text-cyan-100 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent1"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="bars"
                            className="w-6"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                        >
                            <path
                                fill="currentColor"
                                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                            ></path>
                        </svg>
                    </button>
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
                        <Link to="/home" className="flex items-center">
                            <img src={logo} className="mr-3 h-6 sm:h-9" alt="Logo" />
                            <span className="title self-center text-2xl font-semibold whitespace-nowrap text-cyan-100 hover:text-cyan-200">কাঠ-পেন্সিল</span>
                        </Link>
                        <ul className="secondary-title navbar-nav flex flex-wrap justify-between items-center mx-auto flex-col pl-0 list-style-none mr-auto">

                            <li className="nav-item p-2">
                                <CustomLink className="nav-link py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent" to="/Home">Home</CustomLink>
                            </li>
                            <li className="nav-item p-2">
                                <CustomLink className="nav-link py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent" to="/blogs">Blogs</CustomLink>
                            </li>
                            <li className="nav-item p-2">
                                <CustomLink className="nav-link py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent" to="/portfolio">My Portfolio</CustomLink>
                            </li>
                            <li className="nav-item p-2">
                                <CustomLink className="nav-link py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent" to="about">About</CustomLink>
                            </li>
                        </ul>
                    </div>



                    <div className=" relative">
                        <div className="flex items-center relative">
                            {
                                user ?
                                    <Dashboard></Dashboard>
                                    :
                                    <Link
                                        className="secondary-title flex items-center p-2 text-base font-normal text-cyan-900 rounded-lg dark:text-white hover:bg-cyan-100 dark:hover:bg-cyan-800"
                                        to="login">
                                        <FontAwesomeIcon className='w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-300 group-hover:text-cyan-900 dark:group-hover:text-white' icon={faRightToBracket} />
                                        <span className="flex-1 ml-3 whitespace-nowrap">Sign In</span></Link>
                            }

                        </div>

                    </div>
                </div>
            </nav>
        </div >
    );
};

export default Header;