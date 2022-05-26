import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }
    const handleDashboard = () => {
        <div class="w-60 h-full shadow-md bg-white px-1 absolute">
            <ul class="relative">
                <li class="relative">
                    <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"></path>
                        </svg>
                        <span>Sidenav link 1</span>
                    </a>
                </li>
                <li class="relative">
                    <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fill="currentColor" d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                        </svg>
                        <span>Sidenav link 2</span>
                    </a>
                </li>
                <li class="relative">
                    <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" class="w-3 h-3 mr-3" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor" d="M192 208c0-17.67-14.33-32-32-32h-16c-35.35 0-64 28.65-64 64v48c0 35.35 28.65 64 64 64h16c17.67 0 32-14.33 32-32V208zm176 144c35.35 0 64-28.65 64-64v-48c0-35.35-28.65-64-64-64h-16c-17.67 0-32 14.33-32 32v112c0 17.67 14.33 32 32 32h16zM256 0C113.18 0 4.58 118.83 0 256v16c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16v-16c0-114.69 93.31-208 208-208s208 93.31 208 208h-.12c.08 2.43.12 165.72.12 165.72 0 23.35-18.93 42.28-42.28 42.28H320c0-26.51-21.49-48-48-48h-32c-26.51 0-48 21.49-48 48s21.49 48 48 48h181.72c49.86 0 90.28-40.42 90.28-90.28V256C507.42 118.83 398.82 0 256 0z"></path>
                        </svg>
                        <span>Sidenav link 3</span>
                    </a>
                </li>
            </ul>
        </div>
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
                                className="dropdown-menu min-w-max absolute hidden bg-gray-50 dark:bg-cyan-700 text-base z-50 float-left list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none left-auto right-0 space-y-2 overflow-y-auto py-4 px-3"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                <li className='grid grid-cols-1'>
                                    {
                                        user && <>
                                            <li>
                                                <button className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-cyan-100 dark:hover:bg-cyan-800" onClick={handleDashboard}>
                                                    <svg className='w-6 h-6 text-cyan-500 transition duration-75 dark:text-cyan-400 group-hover:text-cyan-900 dark:group-hover:text-white' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                                                    <span className="ml-3">Dashboard</span>
                                                </button>
                                            </li>
                                            <hr />
                                        </>
                                    }
                                    {
                                        user ?
                                            <button className="dropdown-item flex items-center p-2 text-base font-normal text-cyan-900 rounded-lg dark:text-white hover:bg-cyan-100 dark:hover:bg-cyan-800" onClick={handleSignOut}>
                                                <FontAwesomeIcon className='w-6 h-6 text-cyan-500 transition duration-75 dark:text-cyan-400 group-hover:text-cyan-900 dark:group-hover:text-white' icon={faRightFromBracket} />
                                                <span className="ml-3">Sign Out</span></button>
                                            :
                                            <Link
                                                className="dropdown-item flex items-center p-2 text-base font-normal text-cyan-900 rounded-lg dark:text-white hover:bg-cyan-100 dark:hover:bg-cyan-800"
                                                to="login">
                                                <FontAwesomeIcon className='w-6 h-6 text-cyan-500 transition duration-75 dark:text-cyan-400 group-hover:text-cyan-900 dark:group-hover:text-white' icon={faRightToBracket} />
                                                <span className="flex-1 ml-3 whitespace-nowrap">Sign Up</span></Link>
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