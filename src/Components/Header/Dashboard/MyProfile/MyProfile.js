import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useForm } from 'react-hook-form';


const MyProfile = () => {

    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    // const [newInfo, setNewInfo] = useState([])
    // const onSubmit = data => {

    //     const proceed = window.confirm("Are you sure , you want to add new product?");
    //     if (proceed) {
    //         const url = 'https://peaceful-taiga-28630.herokuapp.com/user';
    //         fetch(url, {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(data)
    //         })
    //             .then(res => res.json())
    //             .then(result => {

    //                 const updateInfo = [...newInfo, data];
    //                 setNewInfo(updateInfo);
    //             })
    //     }
    // };
    return (
        <div>
            <div>
                <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900">My Profile</h1>
            </div>
            <div className='p-12'>
                <div class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        <h5 class="text-gray-900 text-xl font-semibold leading-tight font-medium mb-2">Name: <span className='text-cyan-600'>{user.displayName}</span></h5>
                        <p class="text-gray-700 text-base mb-4">
                            E-Mail: <span className='text-cyan-600'>{user.email}</span>
                        </p>
                    </div>
                </div>
                <div className="description block p-6 rounded-lg shadow-lg bg-white max-w-sm my-8 mx-auto border-2">
                    <form>
                        <h1 className="secondary-title text-4xl font-bold mb-5 text-center text-cyan-900">Update Profile</h1>
                        <div className="form-group mb-6">
                            <label className="form-label inline-block mb-2 text-cyan-700">Education</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none" placeholder="Education" {...register("name", { required: true, maxLength: 75 })} />
                        </div>
                        <div className="form-group mb-6">
                            <label className="form-label inline-block mb-2 text-cyan-700">Phone Number</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                                placeholder="Phone Number" {...register("description", { required: true, maxLength: 11 })} />
                        </div>
                        <div className="form-group mb-6">
                            <label className="form-label inline-block mb-2 text-cyan-700">Linkedin Profile URL</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                                placeholder="Linkedin Profile URL" {...register("image")} />
                        </div>
                        <div className="form-group mb-6">
                            <label className="form-label inline-block mb-2 text-cyan-700">Location</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                                placeholder="Location" {...register("quantity")} />
                        </div>

                        <button type="submit" className=" w-full px-6 py-2.5 bg-cyan-600 text-white font- text-lg leading-tight rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;