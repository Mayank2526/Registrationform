

// export default Login

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import SIgn_img from './SIgn_img';
import { NavLink, useNavigate } from 'react-router-dom';

const Login = () => {
    const history = useNavigate();
    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    });
    const [errorMessage, setErrorMessage] = useState("");

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval((prevInputVal) => ({
            ...prevInputVal,
            [name]: value
        }));
    };

    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube");

        const { email, password } = inpval;
        if (email === "" || password === "") {
            setErrorMessage('All fields are required');
        } else if (!email.includes("@")) {
            setErrorMessage('Please enter a valid email address');
        } else if (password.length < 5) {
            setErrorMessage('Password length must be at least five characters');
        } else {
            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });
                if (userlogin.length === 0) {
                    setErrorMessage('Email or password is incorrect');
                } else {
                    localStorage.setItem("user_login", JSON.stringify(userlogin));
                    history("/details");
                }
            }
        }
    };

    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign IN</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/">Register</NavLink></span> </p>
                    </div>
                    <SIgn_img />
                </section>  
            </div>
        </>
    )
}

export default Login;

