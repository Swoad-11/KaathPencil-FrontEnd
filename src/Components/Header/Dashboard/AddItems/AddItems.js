import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../../firebase.init';


const AddItems = () => {

    const [user] = useAuthState(auth);
    const [item, setItem] = useState([])
    console.log(user);
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {

        const proceed = window.confirm("Are you sure , you want to add new product?");
        if (proceed) {
            const url = 'https://peaceful-taiga-28630.herokuapp.com/product';
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {

                    const newItem = [...item, data];
                    setItem(newItem);
                })
        }
    };

    return (
        <div>
            <div>
                <h1 className="secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900">Add A Product</h1>
            </div>
            <div className="description block p-6 rounded-lg shadow-lg bg-white max-w-sm my-8 mx-auto border-2">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-6">
                        <label className="form-label inline-block mb-2 text-cyan-700">Name</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none" placeholder="Name" {...register("name", { required: true, maxLength: 75 })} />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label inline-block mb-2 text-cyan-700">E-Mail</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none" value={user.email} {...register("email", { required: true, maxLength: 75 })} />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label inline-block mb-2 text-cyan-700">Description</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                            placeholder="Description" {...register("description")} />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label inline-block mb-2 text-cyan-700">Image URL</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                            placeholder="Image URL" {...register("image")} />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label inline-block mb-2 text-cyan-700">Quantity</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                            placeholder="Quantity" {...register("quantity")} />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label inline-block mb-2 text-cyan-700">Supplier Name</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                            placeholder="Supplier Name" {...register("supplier")} />
                    </div>
                    <div className="form-group mb-6">
                        <label className="form-label inline-block mb-2 text-cyan-700">Price</label>
                        <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-cyan-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-cyan-700 focus:bg-white focus:border-cyan-600 focus:outline-none"
                            placeholder="Price" {...register("price")} />
                    </div>

                    <button type="submit" className=" w-full px-6 py-2.5 bg-cyan-600 text-white font- text-lg leading-tight rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out">Add Item</button>
                </form>
            </div>

        </div>
    );
};

export default AddItems;