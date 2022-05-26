import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../Hooks/useItemDetail';

const Purchase = () => {
    const { itemId } = useParams();

    const [item] = useItemDetail(itemId);
    const { _id, name, image, description, price, quantity, supplier } = item;

    const decreaseItem = () => {
        let quantity = document.getElementById('quantity');
        let quantityNumber = quantity.innerText;

        let newQuantity = parseInt(quantityNumber) - 1;
        if (newQuantity > 0) {
            quantity.innerText = newQuantity;
        }
        else {
            const zero = 0;
            quantity.innerText = zero;
        }
    }


    const restockItem = (event) => {
        event.preventDefault();
        const newQuantity = event.target.quantity.value

        let oldQuantity = document.getElementById('quantity');
        let quantityNumber = oldQuantity.innerText;
        if (newQuantity > 0) {
            let totalQuantity = parseInt(quantityNumber) + parseInt(newQuantity);
            oldQuantity.innerText = totalQuantity;
            const finalValue = totalQuantity.toString();
            console.log(finalValue);

            const updatedQuantity = { finalValue };

            console.log(updatedQuantity);

            // send data to the server

            const url = `https://shrouded-sands-14035.herokuapp.com/items/${_id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    alert('Added successfully!!!');
                    event.target.reset();
                });

        }

        //const quantity = event.target.quantity.value;


    }


    return (
        <div>
            <div>
                <h1 className="secondary-title text-3xl font-bold mt-8 mb-2 text-center text-cyan-900">{name}</h1>
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
                        <p className='description text-cyan-700 text-base my-5'>
                            <span className='font-semibold'>Supplier: </span> {supplier}
                        </p>
                        <p className='description text-base my-5 text-cyan-900'>
                            <span className='font-semibold text-cyan-700'>Price: </span> {price}
                        </p>
                        <button onClick={decreaseItem} type="button" className="secondary-title inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out">Delivered</button>
                    </div>

                    <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mx-auto">
                        <form onSubmit={restockItem}>
                            <h1 className="secondary-title text-xl font-bold mt-8 mb-2 text-center text-cyan-900"><span className='text-cyan-700'>Restock Product</span> {_id}</h1>
                            <div className="form-group mb-6">
                                <input type="text" name="quantity" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none" id="inputQuantity"
                                    placeholder="0" />
                            </div>
                            <button type="submit" className=" w-full px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg  focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out">Restock</button>
                        </form>
                    </div>

                </div>
                <div className='flex space-x-2 justify-center'>
                    <Link to="/manageinventory">
                        <button type="button" className="secondary-title inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out">Manage Inventory</button>
                    </Link>
                </div>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;