import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const [myOrder, setMyOrder] = useState([]);

    useEffect(() => {
        const email = user.email;
        const url = `https://shrouded-sands-14035.herokuapp.com/items?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrder(data));

    }, [user])

    const newOrder = myOrder.filter(item => item.email === user.email);
    return (
        <div>
            <div>
                <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900">My Orders</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-5 p-5 mx-auto items-center'>

            </div>
        </div>
    );
};

export default MyOrders;