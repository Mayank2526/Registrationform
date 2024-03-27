// Display.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Display = () => {
    const userData = JSON.parse(localStorage.getItem('useryoutube')) || [];

    return (
        <>
            <div className="container mt-3">
                <h3 className='text-center'>User List</h3>
                <ul>
                    {userData.map((user, index) => (
                        <li key={index}>
                            Username: {user.username} - Email: {user.email} - Name: {user.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Display;
