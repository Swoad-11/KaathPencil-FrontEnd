import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import useItemDetail from '../../Hooks/useItemDetail';
import auth from '../../firebase.init';

const Purchase = () => {
    const { itemId } = useParams();
    const [item] = useItemDetail(itemId);
    const [product, setProduct] = useState({});
    const [orderQuantity, setOrderQuantity] = useState(0);
    const { _id, name, image, description, price, available, quantity } = item;
    const [user] = useAuthState(auth);

    const searchQuantity = e => {
        setOrderQuantity(e.target.value);
    };

    const handleOrder = event => {
        event.preventDefault();
        // const quantity = event.target.quantity.value;
        const order = {
            productId: _id,
            name: name,
            totalPrice,
            quantity,
            clientName: user.displayName,
            email: user.email,
            phone: event.target.phone.value,
            address: event.target.address.value
        };
        console.log(order)

        // fetch('https://sheltered-cliffs-05732.herokuapp.com/order', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(order)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         if (data.success) {
        //             toast('Successfully added!')
        //         }
        //         // refetch();
        //     });
    };

    console.log(quantity);
    const totalPrice = parseInt(price) * quantity;

    return (
        <div>
            <div>
                <h1 className="secondary-title text-3xl font-bold mt-8 mb-2 text-center text-cyan-900">Order for: <span className='text-cyan-600'>{name}</span></h1>
            </div>
            <div className='mx-auto p-8'>
                <div className="flex flex-wrap justify-center">
                    <img
                        src={image}
                        className="p-1 bg-white hover:scale-110 transition duration-300 ease-in-out border rounded-lg max-w-sm"
                        alt="..."
                    />
                </div>
                <div className='p-12 grid lg:grid-cols-2 sm:grid-cols-1 gap-6 mx-auto'>
                    <div >
                        <p className='description text-cyan-700 text-base my-5'>
                            <span className='font-semibold'>Product-Id: </span> {_id}
                        </p>
                        <p className='description text-cyan-700 text-base my-5'>
                            <span className='font-semibold'>Description: </span> {description}
                        </p>
                        <p className='description text-cyan-700 text-base my-5'>
                            <span className='font-semibold'>Quanity: </span> <span id='quantity'>{quantity}</span>
                        </p>
                        <p className='description text-base my-5 text-cyan-900'>
                            <span className='font-semibold text-cyan-700'>Price: </span> {price}
                        </p>
                    </div>

                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
                        <form onSubmit={handleOrder} className='grid grid-cols-1 gap-4'>
                            <input type="text" value={user.displayName} className=" w-full" />
                            <input type="text" value={user.email} className="w-full" />
                            <input type="text" name='phone' placeholder="Phone" className="w-full" required />
                            <input type="text" name='address' placeholder="Shipping adderss" className="w-full" required />
                            <div>
                                <label className="my-2">Quantity</label>
                                <input type="number" onBlur={searchQuantity} placeholder={quantity} className="w-full" />
                            </div>
                            <div>
                                <label className="mb-2">Total Price</label>
                                <input type="text" value={totalPrice} className=" w-full text-2xl" />
                            </div>
                            <input type="submit" value='Place Order' className="btn w-full" disabled={parseInt(orderQuantity) < parseInt(quantity) || parseInt(quantity) > parseInt(available) || quantity === ''} />
                        </form>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;