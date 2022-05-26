import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../images/logo.png';

import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
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
                                <CustomLink className="nav-link py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent" to="/portfolio">Portfolio</CustomLink>
                            </li>
                            <li className="nav-item p-2">
                                <CustomLink className="nav-link py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent" to="/blogs">Blogs</CustomLink>
                            </li>
                            <li className="nav-item p-2">
                                <CustomLink className="nav-link py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent" to="about">About</CustomLink>
                            </li>
                            {
                                user && <>
                                    <li className="nav-item dropdown static">
                                        <Link className="nav-link pr-2 lg:px-2 py-2 block text-white transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap" to="#" data-mdb-ripple="true" data-mdb-ripple-color="light" type="button" id="dropdownMenuButtonX" data-bs-toggle="dropdown"
                                            aria-expanded="false">Dashboard
                                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" className="w-2 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                                <path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                                            </svg>
                                        </Link>
                                        <div className="dropdown-menu lg:w-1/4 mt-0 hidden shadow-lg bg-cyan-50 absolute left-0 top-full" aria-labelledby="dropdownMenuButtonX">
                                            <div className="px-6 lg:px-8 py-5">
                                                <div className="bg-cyan-50 text-gray-600">
                                                    <Link to='/manageitems' className="dropdown-item text-sm py-2 px-4 font-normal block whitespace-nowrap bg-transparent text-cyan-900 hover:bg-cyan-100 w-full">Manage Items</Link>
                                                    <Link to='/additems' className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-900 hover:bg-cyan-100">Add Items</Link>
                                                    <Link to='/myitems' className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-900 hover:bg-cyan-100">My Items</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </>
                            }
                        </ul>

                    </div>



                    <div className="flex items-center relative">

                        <div className="dropdown relative">
                            <a
                                className="text-cyan-100 opacity-60 hover:opacity-80 focus:opacity-80 mr-4 dropdown-toggle hidden-arrow flex items-center"
                                href="#"
                                id="dropdownMenuButton1"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <svg
                                    aria-hidden="true"
                                    focusable="false"
                                    data-prefix="fas"
                                    data-icon="bell"
                                    className="w-4"
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"
                                    ></path>
                                </svg>
                            </a>
                            <ul
                                className="dropdown-menu min-w-max absolute hidden bg-cyan-50 text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li className='grid grid-cols-1'>
                                    {
                                        user ?
                                            <button className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-900 hover:bg-cyan-100 " onClick={handleSignOut}><span>Sign Out</span></button>
                                            :
                                            <Link
                                                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-cyan-900 hover:bg-cyan-100"
                                                to="login">Login</Link>
                                    }
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
            </nav>
        </div >
    );
};

export default Header;