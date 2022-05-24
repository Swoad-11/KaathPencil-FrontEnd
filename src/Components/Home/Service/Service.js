import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import useItems from '../../../Hooks/useItems';
import Items from '../../../Items/Items';


const Service = () => {
    const [items, setItems] = useItems();


    const lessItems = items.slice(0, 6);
    const navigate = useNavigate();

    const navigateInventory = () => {
        navigate('/inventory');
    }
    return (
        <div>
            <hr className='h-0 my-8 border border-solid border-t-0 border-cyan-400 w-3/5 mx-auto' />
            <div>
                <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900">Items</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-5 p-5 mx-auto items-center'>
                {
                    lessItems.map(item => <Items
                        key={item._id}
                        item={item}
                    >
                    </Items>)
                }
            </div>
        </div >
    );
};

export default Service;