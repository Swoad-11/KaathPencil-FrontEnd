import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import Items from '../../Items/Items';
import UseMyItem from '../../Items/useMyItem/UseMyItem';

const ManageInventory = () => {
    const [items, setItems] = useItems();
    return (
        <div>
            <div>
                <div>
                    <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900">Manage Inventory</h1>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-5 p-5 mx-auto items-center'>
                    {
                        items.map(item => <UseMyItem
                            key={item._id}
                            item={item}>
                        </UseMyItem>)
                    }
                </div>
                <div className='flex space-x-2 justify-center mb-8'>
                    <Link to="/additems">
                        <button type="button" className="secondary-title inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out">Add New Item</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;