

// export default Register;

// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Display from './Display';

// const Register = () => {
//     const navigate = useNavigate();

//     const [userData, setUserData] = useState({
//         username: "",
//         email: "",
//         password: ""
//     });

//     const getdata = (e) => {
//         const { value, name } = e.target;

//         setUserData((prevUserData) => ({
//             ...prevUserData,
//             [name]: value
//         }));
//     };

//     const addData = (e) => {
//         e.preventDefault();

//         const { username, email, password } = userData;

//         const usernameRegex = /^[a-zA-Z]+$/; // Regular expression to match only alphabets

//         if (username === "") {
//             alert('Please enter your username!');
//         } else if (!username.match(usernameRegex)) {
//             alert('Username should contain only alphabets!');
//         } else if (email === "") {
//             alert('Please enter your email address!');
//         } else if (!email.includes("@")) {
//             alert('Please enter a valid email address!');
//         } else if (password === "") {
//             alert('Please enter a password!');
//         } else if (password.length < 5) {
//             alert('Password length must be at least five characters!');
//         } else {
//             console.log("Data added successfully");
//             const newUser = { username, email, password };
//             const storedData = JSON.parse(localStorage.getItem('useryoutube')) || [];
//             storedData.push(newUser);
//             localStorage.setItem('useryoutube', JSON.stringify(storedData));
//             setUserData({
//                 username: "",
//                 email: "",
//                 password: ""
//             });
//             navigate("/login");
//         }
//     };

//     return (
//         <>
//             <div className="container mt-3">
//                 <section className='d-flex justify-content-between'>
//                     <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
//                         <h3 className='text-center col-lg-6'>Register</h3>
//                         <Form>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                                 <Form.Control type="text" name='username' onChange={getdata} placeholder="Enter Your Username" />
//                             </Form.Group>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                                 <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
//                             </Form.Group>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
//                                 <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
//                             </Form.Group>
//                             <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
//                                 Register
//                             </Button>
//                         </Form>
//                         <p className='mt-3'>Already Have an Account <span><NavLink to="/login">Login</NavLink></span> </p>
//                     </div>
//                 </section>
//                 <ToastContainer />
//             </div>
//         </>
//     );
// };

// export default Register;

//----------------------------------------
//---orignalcode

// import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import bcrypt from 'bcryptjs'; // Import bcrypt library for password hashing
// import Display from './Display';

// const Register = () => {
//     const navigate = useNavigate();

//     const [userData, setUserData] = useState({
//         username: "",
//         email: "",
//         password: ""
//     });

//     const getdata = (e) => {
//         const { value, name } = e.target;
//         setUserData((prevUserData) => ({
//             ...prevUserData,
//             [name]: value
//         }));
//     };

//     const addData = (e) => {
//         e.preventDefault();

//         const { username, email, password } = userData;
//         const usernameRegex = /^[a-zA-Z]+$/; // Regular expression to match only alphabets

//         if (username === "") {
//             toast.error('Please enter your username!');
//         } else if (!username.match(usernameRegex)) {
//             toast.error('Username should contain only alphabets!');
//         } else if (email === "") {
//             toast.error('Please enter your email address!');
//         } else if (!email.includes("@")) {
//             toast.error('Please enter a valid email address!');
//         } else if (password === "") {
//             toast.error('Please enter a password!');
//         } else if (password.length < 5) {
//             toast.error('Password length must be at least five characters!');
//         } else {
//             // Hash the password
//             const hashedPassword = bcrypt.hashSync(password, 10); // Hash password with bcrypt
//             console.log("Hashed password:", hashedPassword);

//             console.log("Data added successfully");
//             const newUser = { username, email, password: hashedPassword }; // Store hashed password
//             const storedData = JSON.parse(localStorage.getItem('useryoutube')) || [];
//             storedData.push(newUser);
//             localStorage.setItem('useryoutube', JSON.stringify(storedData));
//             setUserData({
//                 username: "",
//                 email: "",
//                 password: ""
//             });
//             navigate("/login");
//         }
//     };

//     return (
//         <>
//             <div className="container mt-3 bg-info">
//                 <section className='d-flex justify-content-between '>
//                     <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
//                         <h3 className='text-center col-lg-6'>Register</h3>
//                         <Form>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                                 <Form.Control type="text" name='username' onChange={getdata} placeholder="Enter Your Username" />
//                             </Form.Group>

//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
//                                 <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
//                             </Form.Group>
//                             <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
//                                 <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
//                             </Form.Group>
//                             <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
//                                 Register
//                             </Button>
//                         </Form>
//                         <p className='mt-3'>Already Have an Account <span><NavLink to="/login">Login</NavLink></span> </p>
//                     </div>
//                 </section>
//                 <ToastContainer />
//             </div>
//         </>
//     );
// };

// export default Register;

//------------------------------------------------ 

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import bcrypt from 'bcryptjs'; // Import bcrypt library for password hashing

const Register = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        email: "",
        password: ""
    });

    const getdata = (e) => {
        const { value, name } = e.target;
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value
        }));
    };

    const addData = (e) => {
        e.preventDefault();

        const { username, email, password } = userData;
        const usernameRegex = /^[a-zA-Z]+$/; // Regular expression to match only alphabets

        if (username === "") {
            toast.error('Please enter your username!');
        } else if (!username.match(usernameRegex)) {
            toast.error('Username should contain only alphabets!');
        } else if (email === "") {
            toast.error('Please enter your email address!');
        } else if (!email.includes("@")) {
            toast.error('Please enter a valid email address!');
        } else if (password === "") {
            toast.error('Please enter a password!');
        } else if (password.length < 5) {
            toast.error('Password length must be at least five characters!');
        } else {
            // Generate unique ID based on current date and sequential number
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            const sequentialNumber = localStorage.getItem('sequentialNumber') || '0001';
            const id = `${year}${month}${day}${sequentialNumber}`;

            // Hash the password
            const hashedPassword = bcrypt.hashSync(password, 10); // Hash password with bcrypt

            console.log("Data added successfully");
            const newUser = { id, username, email, password: hashedPassword }; // Store hashed password
            const storedData = JSON.parse(localStorage.getItem('useryoutube')) || [];
            storedData.push(newUser);
            localStorage.setItem('useryoutube', JSON.stringify(storedData));
            
            // Increment sequential number for next user
            const updatedSequentialNumber = String(parseInt(sequentialNumber) + 1).padStart(4, '0');
            localStorage.setItem('sequentialNumber', updatedSequentialNumber);

            setUserData({
                username: "",
                email: "",
                password: ""
            });
            navigate("/login");
        }
    };

    return (
        <>
            <div className="container mt-3 bg-info">
                <section className='d-flex justify-content-between '>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Register</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="text" name='username' onChange={getdata} placeholder="Enter Your Username" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Register
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">Login</NavLink></span> </p>
                    </div>
                </section>
                <ToastContainer />
            </div>
        </>
    );
};

export default Register;





