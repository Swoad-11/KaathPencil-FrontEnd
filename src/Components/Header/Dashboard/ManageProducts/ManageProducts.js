import React from 'react';
import useProducts from '../../../../Hooks/useItems';

const ManageProducts = () => {
    const [products, setProducts] = useProducts();

    // delete product
    const deleteProduct = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://peaceful-taiga-28630.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(order => order._id !== id);
                    setProducts(remaining);
                });
        };

    };
    return (

        <div className='p-8'>
            <h3 className='secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900'>Manage Products</h3>
            <div className="overflow-x-auto mx-3">
                <table className="table table-compact w-full text-center">
                    <thead>
                        <tr className='border-b bg-cyan-800 secondary-title'>
                            <th className='text-sm font-medium text-white px-6 py-4'>#</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Name</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Image</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Id</th>
                            <th className='text-sm font-medium text-white px-6 py-4'>Delete Product</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product, index) => <tr className='bg-cyan-100 border-b secondary-title' key={product._id}>
                                <th>{index + 1}</th>
                                <td className=' font-medium px-6 py-4'>{product.name}</td>
                                <td className=' font-medium px-6 py-4'>
                                    <div class="avatar">
                                        <div>
                                            <img className='rounded-lg w-24 mx-auto' src={product.image} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td className=' font-medium px-6 py-4 description'>{product._id}</td>
                                <td className='text-center font-medium px-6 py-4 description'><button onClick={() => deleteProduct(product._id)} data-mdb-ripple="true"
                                    data-mdb-ripple-color="light"
                                    className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out">Delete</button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default ManageProducts;