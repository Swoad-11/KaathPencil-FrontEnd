import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../../Loading/Loading';
import useToken from '../../../Hooks/useToken';


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
                    })} name="name" placeholder='Your Name' />
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
                    })} name="email" placeholder='Email Address' />
                    <label htmlFor="Password" className="form-label inline-block mb-2 text-cyan-700">Password</label>
                    <input type="password" className='block mb-2 w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none' {...register("password", {
                        required: {
                            value: true,
                            message: 'Password is Required'
                        },
                        minLength: {
                            value: 8,
                            message: 'Must be 8 characters or longer'
                        }
                    })} name="password" placeholder='Password' />
                    <label className="label">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                    </label>
                    <div className='grid grid-cols-1'>
                        {signInError}
                        <input className=' w-full px-6 py-2.5 mb-5 bg-cyan-600 text-white font- text-lg leading-tight rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out' type="submit" value="Sign Up" />
                    </div>
                </form>
                <p>Already have an account? <Link to="/login" className='text-cyan-600 mx-3'>Please Login</Link> </p>
                <div className='description'>
                    <div className=' flex items-center'>
                        <div style={{ height: '1px' }} className='bg-cyan-600 w-48'></div>
                        <p className='mt-2 px-2'>or</p>
                        <div style={{ height: '1px' }} className='bg-cyan-600 w-48'></div>
                    </div>

                    <div>
                        <button onClick={() => signInWithGoogle()} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="bg-white border-2 rounded-lg hover:bg-cyan-600 mx-auto text-lg flex items-center gap-4 px-8 py-2.5 mb-2 text-cyan-900 hover:text-white font-medium leading-tight shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512" className="w-4 h-4">
                                <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                            </svg> <p>Google Login</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;