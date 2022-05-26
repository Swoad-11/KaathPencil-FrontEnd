import React from 'react';
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItems';
import Items from '../../Items/Items';


const AllProducts = () => {
    const [items, setItems] = useItems();
    return (
        <div>
            <div>
                <div>
                    <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900">All Products</h1>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-5 p-5 mx-auto items-center'>
                    {
                        items.map(item => <Items
                            key={item._id}
                            item={item}>
                        </Items>)
                    }
                </div>

            </div>
        </div>
    );
};

export default AllProducts;