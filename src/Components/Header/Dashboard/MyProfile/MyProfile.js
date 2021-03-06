import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const MyProfile = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth);
    const [dbUser, setDbUser] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const { email } = user;
        fetch(`https://peaceful-taiga-28630.herokuapp.com/user/${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setDbUser(data)
            })
    }, [user]);
    // edit profile function
    const updateProfile = (data) => {
        fetch(`https://peaceful-taiga-28630.herokuapp.com/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    toast.success('User information added successfully.')
                    reset();
                }
                else {
                    toast.error('Failed to add user information!');
                };
            });
    };
    const { email, name, phone, address, education, linkedin } = dbUser;

    return (
        <div>
            <div>
                <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900">My Profile</h1>
            </div>
            <div className='p-12 grid lg:grid-cols-2 sm:grid-cols-2 items-center justify-center '>
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm w-full description">
                    <h5 className="text-gray-900 text-xl font-semibold leading-tight mb-2">Name: <span className='text-cyan-600'>{name}</span></h5>
                    <p className="text-gray-700 text-base mb-4">
                        E-Mail: <span className='text-cyan-600'>{email}</span>
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        Education: <span className='text-cyan-600'>{education}</span>
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        Phone Number: <span className='text-cyan-600'>{phone}</span>
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        Address: <span className='text-cyan-600'>{address}</span>
                    </p>
                    <p className="text-gray-700 text-base mb-4">
                        Linkedin: <span className='text-cyan-600'>{linkedin}</span>
                    </p>
                </div >
                <div className="description block p-6 rounded-lg shadow-lg bg-white max-w-sm my-8 mx-auto border-2 w-full">
                    <form onSubmit={handleSubmit(updateProfile)}>
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
                            <label className="form-label inline-block mb-2 text-cyan-700">Address</label>
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                                placeholder="Address" {...register("quantity")} />
                        </div>

                        <button type="submit" className=" w-full px-6 py-2.5 bg-cyan-600 text-white font- text-lg leading-tight rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out">Save</button>
                    </form>
                </div>
            </div >
        </div >
    );
};

export default MyProfile;