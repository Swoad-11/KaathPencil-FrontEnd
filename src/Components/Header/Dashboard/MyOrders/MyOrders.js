import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const MyOrders = () => {
    const [purchases, setPurchases] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://peaceful-taiga-28630.herokuapp.com/purchase/${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => setPurchases(data))
        }
    }, [user, navigate]);

    // delete item
    const deleteOrder = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://peaceful-taiga-28630.herokuapp.com/purchase/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = purchases.filter(purchase => purchase._id !== id);
                    setPurchases(remaining);
                });
        };

    };
    return (
        <div className='p-8'>
            <h3 className='secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900'>My Order:{purchases.length}</h3>
            <div className="overflow-x-auto mx-3">
                <table className="table table-compact w-full text-center">
                    <thead>
                        <tr className='border-b bg-cyan-800 secondary-title'>
                            <th className='text-sm font-medium text-white px-6 py-4'>#</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Name</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Unite Price</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Quantity</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Total Price</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Payment Status</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            purchases.map((order, index) => <tr className='bg-cyan-100 border-b secondary-title' key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.name}</td>
                                <td className='text-sm font-medium px-6 py-4'>{order.price}</td>
                                <td className='text-sm font-medium px-6 py-4'>{order.quantity}</td>
                                <td className='text-sm font-medium px-6 py-4'>{order.totalPrice}</td>
                                <td className='text-sm font-medium description px-6 py-4'><Link to={`/dashboard/payment/${order._id}`}>
                                    <button className="btn btn-xs btn-accent btn-outline">Pay Now</button> </Link></td>
                                <td className='text-sm font-medium px-6 py-4'><button onClick={() => deleteOrder(order._id)} data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out">Cancel</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;