import React, { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../../Hooks/useToken';
import Loading from '../../Loading/Loading';
import auth from '../../../firebase.init';


const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [token] = useToken(user || gUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    if (user || gUser) {
        navigate('/home');
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent e-mail');
        }
        else {
            toast('Please enter your e-mail address');
        }
    }

    return (
        <div>
            <div className="description block p-6 rounded-lg shadow-lg bg-white max-w-sm my-8 mx-auto border-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-6">
                        <label htmlFor="exampleInputEmail2" className="form-label inline-block mb-2 text-cyan-700">Email Address</label>
                        <input ref={emailRef} type="email" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none"

                            id="exampleInputEmail2"
                            aria-describedby="emailHelp" placeholder="Enter email" {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is Required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid Email'
                                }
                            })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label inline-block mb-2 text-cyan-700">Password</label>
                        <input ref={passwordRef} type="password" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none" id="exampleInputPassword2"
                            placeholder="Password" {...register("password", {
                                required: {
                                    value: true,
                                    message: 'Password is Required'
                                },
                                minLength: {
                                    value: 8,
                                    message: 'Must be 8 characters or longer'
                                }
                            })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                        </label>
                    </div>
                    {signInError}
                    <div className="flex justify-between items-center mb-6">
                        <p>Forgot Password?</p>
                        <button
                            className="text-cyan-500 hover:text-cyan-600 focus:text-red-700 transition duration-200 ease-in-out" onClick={resetPassword}>Click Here</button>
                    </div>
                    <button type="submit" className=" w-full px-6 py-2.5 bg-cyan-600 text-white font- text-lg leading-tight rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"> <Link to="/home">Login</Link> </button>
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
                    <p className="text-gray-800 mt-6 text-center">Not a member? <Link to="/signup"
                        className="text-cyan-600 hover:text-cyan-700 focus:text-red-700 transition duration-200 ease-in-out">Register</Link>
                    </p>
                </form>

                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;