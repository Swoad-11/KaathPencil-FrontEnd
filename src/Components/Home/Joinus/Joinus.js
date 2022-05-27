import React from 'react';
import { Link } from 'react-router-dom';

const Joinus = () => {
    return (
        <div>
            <hr className='h-0 my-8 border border-solid border-t-0 border-cyan-400 w-3/5 mx-auto' />
            <div className="relative overflow-hidden bg-no-repeat bg-cover mt-12" style=
                {{
                    backgroundImage: `url('https://img.freepik.com/free-photo/plenty-school-supplies_23-2147654490.jpg')`,
                    height: 350
                }}
            >
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: `rgba(0, 0, 0, 0.75)` }}>
                    <div className="flex justify-center items-center h-full">
                        <div className="text-center px-6 md:px-12">
                            <h3 className="secondary-title text-3xl text-cyan-200 font-bold mb-1">Exclusive gift ideas</h3>
                            <p className="description text-2xl text-white mb-4">
                                Enchant your loved ones with a classic writing utensil of masterful workmanship. <br />
                                Find the perfect gift for your beloved ones!
                            </p>
                            <Link to="/allproducts">
                                <button type="button"
                                    className="inline-block px-6 py-2.5 border-2 border-white text-white hover:border-cyan-500 hover:text-cyan-100 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                    data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    Explore
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Joinus;