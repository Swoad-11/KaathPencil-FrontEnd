import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit } = useForm();
    return (
        <div>
            <div>
                <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900">Give A Review</h1>
            </div>
            <div className="description block p-6 rounded-lg shadow-lg bg-white max-w-sm my-8 mx-auto border-2">
                <form>
                    <div className="form-group mb-6">
                        <label className="form-label inline-block mb-2 text-cyan-700">Review Your Experience</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                            placeholder="Review" />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label inline-block mb-2 text-cyan-700">Rate Us</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                            placeholder="Rating" />
                    </div>
                    <button type="submit" className=" w-full px-6 py-2.5 bg-cyan-600 text-white font- text-lg leading-tight rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out">Save Review</button>
                </form>
            </div>

        </div>
    );
};

export default Review;