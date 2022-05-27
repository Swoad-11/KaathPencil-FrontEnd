import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../Loading/Loading';


const Signup = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser);

    const navigate = useNavigate();

    let signInError;

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    if (token) {
        navigate('/allproducts');
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        console.log('update done');
    }

    return (
        <div>
            <div className="description block p-6 rounded-lg shadow-lg bg-white max-w-sm my-8 mx-auto border-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="Name" className="form-label inline-block mb-2 text-cyan-700">Name</label>
                    <input type="text" className='block mb-2 w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none' {...register("name", {
                        required: {
                            value: true,
                            message: 'Name is Required'
                        }
                    })} name="name" id="" placeholder='Your Name' />
                    <label htmlFor="Email" className="form-label inline-block mb-2 text-cyan-700">Email Address</label>
                    <input type="email" className='block mb-2 w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none' {...register("email", {
                        required: {
                            value: true,
                            message: 'Email is Required'
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: 'Provide a valid Email'
                        }
                    })} name="email" id="" placeholder='Email Address' />
                    <label htmlFor="Password" className="form-label inline-block mb-2 text-cyan-700">Password</label>
                    <input type="password" className='block mb-2 w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none' {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is Required'
                        },
                        minLength: {
                            value: 6,
                            message: 'Must be 6 characters or longer'
                        }
                    })} name="password" id="" placeholder='Password' />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                    <div className='grid grid-cols-1'>
                        {signInError}
                        <input className=' w-full px-6 py-2.5 mb-5 bg-cyan-600 text-white font- text-lg leading-tight rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out' type="submit" value="Sign Up" />
                    </div>
                </form>
                <p>Already have an account? <Link to="/login" className='text-cyan-600 mx-3' onClick={navigateLogin}>Please Login</Link> </p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Signup;