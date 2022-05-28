import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../Loading/Loading';
import UserRow from '../UserRow/UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://peaceful-taiga-28630.herokuapp.com/user/', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    };
    return (
        <div>
            <div className='p-8'>
                <h3 className='secondary-title text-4xl font-bold mt-8 mb-5 text-center text-cyan-900'>Total Users:{users.length}</h3>
                <div className="overflow-x-auto mx-3">

                    <table className="table table-compact w-full lg:w-3/4 mx-auto secondary-title">
                        <thead>
                            <tr className='border-b bg-cyan-800'>
                                <th className='text-sm font-medium text-white px-6 py-4'>#</th>
                                <th className='text-sm font-medium text-white px-6 py-4'>Name</th>
                                <th className='text-sm font-medium text-white px-6 py-4'>Email</th>
                                <th className='text-sm font-medium text-white px-6 py-4'>Status</th>
                                <th className='text-sm font-medium text-white px-6 py-4'>Admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <UserRow
                                    index={index}
                                    key={user._id}
                                    user={user}
                                    refetch={refetch}
                                ></UserRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;