import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import useItemDetail from '../../Hooks/useItemDetail';
import auth from '../../firebase.init';

const Purchase = () => {
    const { itemId } = useParams();
    const [inputQuantity, setInputQuantity] = useState(0);
    const [user] = useAuthState(auth);
    const [item] = useItemDetail(itemId);
    const { _id, name, image, description, price, available, quantity } = item;
    const input = parseInt(inputQuantity);
    const quantityAvailable = parseInt(available)
    const minimumQuantity = parseInt(quantity);

    const totalPrice = parseInt(price) * inputQuantity;


    const searchQuantity = e => {
        setInputQuantity(e.target.value);
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
        //         console.log(data)
        //         if (data.success) {
        //             toast('Successfully added!')
        //         }


        //         // refetch();
        //     });
    };


    return (
        <div>
            <div>
                <h1 className="secondary-title text-3xl font-bold mt-8 mb-2 text-center text-cyan-600">{name}</h1>
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
                            <span className='font-semibold text-gray-700'>Product-Id: </span> {_id}
                        </p>
                        <p className='description text-gray-700 text-base my-5'>
                            <span className='font-semibold'>Description: </span> {description}
                        </p>
                        <p className='description text-gray-700 text-base my-5'>
                            <span className='font-semibold'>Available: </span> <span id='quantity'>{available}</span>
                        </p>
                        <p className='description text-gray-700 text-base my-5'>
                            <span className='font-semibold'>Minimum Quantity For Order: </span>{quantity}
                        </p>
                        <p className='description text-base my-5 text-gray-700'>
                            <span className='font-semibold'>Price: $</span>{price}
                        </p>
                    </div>

                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto description">
                        <form onSubmit={handleOrder}>
                            <h1 className="secondary-title text-xl font-bold mt-8 mb-2 text-center text-cyan-600"><span className='text-gray-700'>Restock Product</span> {_id}</h1>
                            <div className="form-group">
                                <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none mb-2" type="text" value={user.displayName} />
                                <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none mb-2" type="text" value={user.email} />
                                <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none mb-2" type="text" name='phone' placeholder="Phone" required />
                                <input className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none mb-2" type="text" name='address' placeholder="Shipping adderss" required />
                            </div>
                            <div className='mb-2 flex justify-between items-center'>
                                <p>Quantity:</p>
                                <input className="form-control block w-3/4 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none" type="number" onBlur={searchQuantity} placeholder={quantity} />
                            </div>
                            <div className='mb-2'>
                                <p>Total Price: {totalPrice}</p>
                            </div>
                            <button
                                type="submit"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                                class="w-full inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out" disabled={parseInt(inputQuantity) < parseInt(quantity) || parseInt(inputQuantity) > parseInt(available) || inputQuantity === ''}
                            >Place Order</button>
                        </form>
                    </div>

                </div>
                <div className='flex space-x-2 justify-center'>
                    <Link to="/allproducts">
                        <button type="button" className="secondary-title inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out">All Products</button>
                    </Link>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;