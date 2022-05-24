import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UseMyItem = ({ item }) => {
    const { _id, name, image, description, price, quantity, supplier } = item;
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    const navigateToInventory = id => {
        navigate(`/inventory/${_id}`);
    }

    const handleDeleteBtn = (id) => {
        console.log("deleting", id);
        const proceed = window.confirm("Are you sure , you want to delete this item?");

        if (proceed) {
            const url = `https://shrouded-sands-14035.herokuapp.com/items/${id}`;
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Successfully deleted");
                        const remaining = items.filter(item => item._id !== id);
                        setItems(remaining);
                    }
                });
        }
    };

    return (
        <div>
            <div className="flex justify-center">
                <div className="rounded-lg shadow-lg bg-cyan-100 w-80">
                    <img src={image} className="max-w-full h-80 rounded-lg p-1" alt="" />
                    <div className="p-6">
                        <h5 className="secondary-title text-gray-900 text-xl font-medium mb-2 overflow-hidden truncate"> {name} </h5>
                        <p className="description text-cyan-700 text-base mb-4 overflow-hidden truncate">
                            {description}
                        </p>
                        <p className="description text-cyan-700 text-base mb-4">
                            Price: {price}
                        </p>
                        <p className="description text-cyan-700 text-base mb-4">
                            Supplier Name: {supplier}
                        </p>
                        <p className="description text-cyan-700 text-base mb-4">
                            Quantity: {quantity}
                        </p>
                        <div className='grid grid-cols-2 gap-8'>
                            <button onClick={() => navigateToInventory(_id)} type="button" className="secondary-title inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                            <button onClick={() => handleDeleteBtn(_id)} type="button" className="secondary-title inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseMyItem;