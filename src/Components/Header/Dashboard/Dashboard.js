import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faXmark } from '@fortawesome/free-solid-svg-icons';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const handleSignOut = () => {
        signOut(auth);
    }
    const [user] = useAuthState(auth);

    return (
        <>
            {showSidebar ? (
                <button
                    className="flex p-2 text-base font-normal rounded-lg text-white hover:bg-cyan-100 dark:hover:bg-cyan-800 items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => setShowSidebar(!showSidebar)}
                >
                    <FontAwesomeIcon className='w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-300 group-hover:text-cyan-900 dark:group-hover:text-white' icon={faXmark} />

                </button>
            ) : (
                <button className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-cyan-100 dark:hover:bg-cyan-800" onClick={() => setShowSidebar(!showSidebar)}>
                    <svg className='w-6 h-6 text-gray-400 transition duration-75 group-hover:text-cyan-900' fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
                    <span className="ml-3 secondary-title">Dashboard</span>
                </button>
            )}

            <div
                className={`top-0 right-0 p-16 w-60 bg-cyan-700 shadow-lg px-1 text-white fixed h-full z-40  ease-in-out duration-300 ${showSidebar ? "translate-x-0 " : "translate-x-full"
                    }`}
            >
                <ul class="relative">
                    {
                        user && <li class="relative">
                            <p class="secondary-title flex items-center py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap transition duration-300 ease-in-out font-semibold text-base rounded-lg text-black" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">{user.displayName}</p>
                        </li>
                    }
                    <li class="relative">
                        <Link to="/myorders" class="secondary-title flex items-center py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap transition duration-300 ease-in-out text-base font-normal rounded-lg text-white hover:bg-cyan-800" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">My Orders</Link>
                    </li>
                    <li class="relative">
                        <Link to="/review" class="secondary-title flex items-center py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap transition duration-300 ease-in-out text-base font-normal rounded-lg text-white hover:bg-cyan-800" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">Add A Review</Link>
                    </li>
                    <li class="relative">
                        <Link to="/myprofile" class="secondary-title flex items-center py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap transition duration-300 ease-in-out text-base font-normal rounded-lg text-white hover:bg-cyan-800" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">My Profile</Link>
                    </li>
                    <hr />
                    <li>
                        <button className="flex w-full secondary-title items-center py-4 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap transition duration-300 ease-in-out text-base font-normal rounded-lg text-white hover:bg-cyan-800" onClick={handleSignOut}>
                            <FontAwesomeIcon className='w-6 h-6 text-gray-400 transition duration-75 group-hover:text-cyan-900 dark:group-hover:text-white' icon={faRightFromBracket} />
                            <span className="ml-3 inline">Sign Out</span></button>
                    </li>
                </ul>
            </div>

        </>
    );
};

export default Dashboard;