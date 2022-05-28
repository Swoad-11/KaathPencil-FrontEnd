import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);


    useEffect(() => {

        fetch('https://peaceful-taiga-28630.herokuapp.com/purchase/', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data))

    }, []);

    // delete item
    const orderCencel = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://peaceful-taiga-28630.herokuapp.com/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                });
        };

    };

    // payment an order
    const handlePayment = (id) => {
        console.log(id)
    }

    return (
        <div className='p-8'>
            <h3 className='secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900'>Total Orders: {orders.length}</h3>
            <div className="overflow-x-auto mx-3">
                <table className="table table-compact w-full text-center">
                    <thead>
                        <tr className='border-b bg-cyan-800 secondary-title'>
                            <th className='text-sm font-medium text-white px-6 py-4'>#</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Client Name</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Email</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Product Name</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Payment Staus</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Order Status</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Cencel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr className='bg-cyan-100 border-b secondary-title' key={order._id}>
                                <th>{index + 1}</th>
                                <td className='text-sm font-medium description  px-6 py-4'>{order.clientName}</td>
                                <td className='text-sm font-medium description  px-6 py-4'>{order.email}</td>
                                <td className='text-sm font-medium description  px-6 py-4'>{order.name}</td>
                                <td className='text-sm font-medium  px-6 py-4'>Pending</td>
                                <td className='text-sm font-medium  px-6 py-4'><button onClick={() => handlePayment(order._id)}
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block px-6 py-2.5 bg-teal-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-teal-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-teal-800 active:shadow-lg transition duration-150 ease-in-out">Pending</button></td>
                                <td className='text-sm font-medium px-6 py-4'><button onClick={() => orderCencel(order._id)}
                                    data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Cancel</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;