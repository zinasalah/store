import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

import { useSelector } from 'react-redux';
import handleCart from '../redux/reducer/handleCart';
import Login from './Login';
import Register from './Register';
const Navbar = () => {
    const state = useSelector((state) => state.handleCart)
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light bg-white py-3">
                <div class="container">
                    <Link class="navbar-brand fw-bold fs-4" to="/">LA COLLECTION</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/products">Products</Link>
                            </li>

                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/contact">Contact</Link>
                            </li>


                        </ul>

                        <Login />


                        <Register />

                        <Link to="/cart" className='btn btn-outline-primary ms-2'><i className='fa fa-shopping-cart me-1'></i>Cart ({state.length})</Link>


                    </div>
                </div>

            </nav >
        </div >
    );
};

export default Navbar





