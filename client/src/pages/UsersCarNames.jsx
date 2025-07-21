
import React, { useEffect, useState } from 'react';
import useAuthStore from '../store/authStore';


const CarsPage = () => {
    const { getAllUsersWithCars,token } = useAuthStore();
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await getAllUsersWithCars(token);
            if (res.success) {
                setUsers(res.users);
            } else {
                setError(res.message);
            }
        };
        fetchUsers();
    }, [getAllUsersWithCars]);

    return (
        <div className="p-8 max-w-7xl mx-auto bg-gray-50 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
                🧑‍🔧 רשימת משתמשים ורכבים
            </h2>

            {error && (
                <div className="text-red-500 text-center mb-4 font-medium">
                    {error}
                </div>
            )}

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {users.map((user, index) => (
                    <li key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-lg font-semibold text-gray-700 mb-2">
                            👤 {user.name}
                        </h3>
                        <p className="text-gray-600">
                            🚗 רכב: <span className="font-medium">{user.carName || 'לא הוזן'}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default CarsPage;
