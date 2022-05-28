import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ index, user, refetch }) => {
    const { email, role } = user;
    if (email) {

    }

    // make admin function
    const makeAdmin = () => {
        fetch(`https://sheltered-cliffs-05732.herokuapp.com/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: ` Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to Make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin');
                }
            })
    }

    return (
        <tr className='bg-cyan-100 border-b' key={user._id}>
            <th>{index + 1}</th>
            <td className='text-center py-4 description'>{user.name}</td>
            <td className='text-center py-4 description'>{user.email}</td>
            <td className='text-center text-green-600 py-4'>{(role === 'admin' && 'Admin') || (role !== 'admin' && 'User')}</td>
            <td className='text-center py-4'>{role !== 'admin' && <button
                onClick={makeAdmin}
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-cyan-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-700 hover:shadow-lg focus:bg-cyan-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-800 active:shadow-lg transition duration-150 ease-in-out"
            >Make Admin</button>}</td>
        </tr >
    );
};

export default UserRow;