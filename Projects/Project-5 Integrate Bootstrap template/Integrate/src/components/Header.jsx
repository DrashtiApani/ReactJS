import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaSearch, FaHeart, FaShoppingCart, FaUser, FaPhone, FaBars, FaAngleDown } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import logo from "./img/logo.png";

const Header = () => {
    return (
        <>
            {/* Inline CSS for hover dropdown */}
            <style>{`
                .nav-item.dropdown:hover .dropdown-menu,
                .dropdown:hover .dropdown-menu {
                    display: block;
                    margin-top: 0;
                }
                .dropdown-menu {
                    transition: none !important;
                }
                .categories-dropdown {
                    width: 650px;
                    padding: 0;
                    left: 0 !important;
                }
                .categories-dropdown .dropdown-item {
                    white-space: normal;
                }
                .category-column {
                    padding: 0.5rem;
                }
            `}</style>

            {/* Main Header */}
            <header className="shadow-sm py-3">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    {/* Logo */}
                    <a className="navbar-brand d-flex align-items-center" href="#">
                        <img src={logo} alt="Company Logo" width="100" />
                    </a>

                    {/* Search Bar */}
                    <div className="d-flex flex-grow-1 mx-4" style={{ maxWidth: '700px' }}>
                        <input
                            className="form-control border-success"
                            type="search"
                            placeholder="Search For items..."
                            aria-label="Search"
                            style={{ borderRadius: '6px 0 0 6px' }}
                        />
                        <select 
                            name="Categories" 
                            className="px-2 border-success"
                           
                        >
                            <option value="All" selected>All Categories</option>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Electronics">Electronics</option>
                        </select>
                        <button
                            className="btn btn-success"
                            style={{ borderRadius: '0 6px 6px 0' }}
                            type="submit"
                        >
                            <FaSearch />
                        </button>
                    </div>

                    {/* Right Icons */}
                    <div className="d-flex align-items-center gap-4">
                        <div className="d-flex align-items-center position-relative dropdown">
                            <FaUser className="me-1" />
                            <button
                                type="button"
                                className="btn p-0 border-0 bg-transparent text-dark"
                                style={{ backgroundColor: "transparent" }}
                            >
                                Account
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Register</a></li>
                                <li><a className="dropdown-item" href="#">CheckOut</a></li>
                                <li><a className="dropdown-item" href="#">LogIn</a></li>
                            </ul>
                        </div>
                        <div className="d-flex align-items-center">
                            <FaHeart className="me-1" />
                            <span>Wishlist</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <FaShoppingCart className="me-1" />
                            <span>Cart</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Top Navigation Bar */}
            <div className="bg-white border-bottom py-2">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <div className="dropdown">
                        <button className="btn border rounded p-2">
                            <FaBars />
                        </button>
                        <ul className="dropdown-menu categories-dropdown p-0">
                            <div className="d-flex">
                                <div className="category-column col-4">
                                    <button className='dropdown-item btn border text-start py-2 my-1 border-success text-success w-100'>Dairy & Bakery</button>
                                    <button className='dropdown-item btn border text-start py-2 my-1 w-100'>Fruits & Vegetable</button>
                                    <button className='dropdown-item btn border text-start py-2 my-1 w-100'>Snack & Spice</button>
                                    <button className='dropdown-item btn border text-start py-2 my-1 w-100'>Juice & Drinks</button>
                                    <button className='dropdown-item btn border text-start py-2 my-1 w-100'>View All</button>
                                </div>
                                <div className="category-column col-4" style={{fontSize:'15px'}}>
                                    <h5 className='text-success border-bottom pb-2 mt-2 mb-3'>Dairy</h5>
                                    <p><a href="#" className='dropdown-item text-secondary'>Milk</a></p>
                                    <p><a href="#" className='dropdown-item text-secondary'>Ice Cream</a></p>
                                    <p><a href="#" className='dropdown-item text-secondary'>Cheese</a></p>
                                    <p><a href="#" className='dropdown-item text-secondary'>Frozen Custard</a></p>
                                    <p><a href="#" className='dropdown-item text-secondary'>Frozen Yogurt</a></p>
                                </div>
                                <div className="category-column col-4" style={{fontSize:'15px'}}>
                                    <h5 className='text-success border-bottom pb-2 mt-2 mb-3'>Bakery</h5>
                                    <p><a href="#" className='dropdown-item text-secondary'>Cake & Pastry</a></p>
                                    <p><a href="#" className='dropdown-item text-secondary'>Rusk Toast</a></p>
                                    <p><a href="#" className='dropdown-item text-secondary'>Bread & Buns</a></p>
                                    <p><a href="#" className='dropdown-item text-secondary'>Chocolate Brownie</a></p>
                                    <p><a href="#" className='dropdown-item text-secondary'>Cream Roll</a></p>
                                </div>
                            </div>
                        </ul>
                    </div>

                    {/* Menu Links */}
                    <ul className="nav d-none d-md-flex m-0">
                        <li className="nav-item px-2">
                            <a className="nav-link text-dark fw-semibold" href="#">Home</a>
                        </li>
                        <li className="nav-item px-2 dropdown">
                            <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                                Category <FaAngleDown style={{ fontSize: '10px' }} />
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Shop Left Sliderbar</a></li>
                                <li><a className="dropdown-item" href="#">Shop Right Sliderbar</a></li>
                                <li><a className="dropdown-item" href="#">Full Width</a></li>
                            </ul>
                        </li>
                        <li className="nav-item px-2 dropdown">
                            <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                                Products <FaAngleDown style={{ fontSize: '10px' }} />
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Product Left Sliderbar</a></li>
                                <li><a className="dropdown-item" href="#">Product Right Sliderbar</a></li>
                                <li><a className="dropdown-item" href="#">Product Full Width</a></li>
                            </ul>
                        </li>
                        <li className="nav-item px-2 dropdown">
                            <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                                Pages <FaAngleDown style={{ fontSize: '10px' }} />
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">About Us</a></li>
                                <li><a className="dropdown-item" href="#">Contact Us</a></li>
                                <li><a className="dropdown-item" href="#">Cart</a></li>
                                <li><a className="dropdown-item" href="#">Chechout</a></li>
                                <li><a className="dropdown-item" href="#">Track Order</a></li>
                                <li><a className="dropdown-item" href="#">Wishlist</a></li>
                                <li><a className="dropdown-item" href="#">Faq</a></li>
                                <li><a className="dropdown-item" href="#">Login</a></li>
                                <li><a className="dropdown-item" href="#">Resister</a></li>
                                <li><a className="dropdown-item" href="#">Policy</a></li>
                            </ul>
                        </li>
                        <li className="nav-item px-2 dropdown">
                            <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                                Blog <FaAngleDown style={{ fontSize: '10px' }} />
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Left Sliderbar</a></li>
                                <li><a className="dropdown-item" href="#">Right Sliderbar</a></li>
                                <li><a className="dropdown-item" href="#">Full Width</a></li>
                                <li><a className="dropdown-item" href="#">Detail Left Sliderbar</a></li>
                                <li><a className="dropdown-item" href="#">Detail Right Sliderbar</a></li>
                                <li><a className="dropdown-item" href="#">Detail Full Width</a></li>
                            </ul>
                        </li>
                        <li className="nav-item px-2 dropdown">
                            <a className="nav-link dropdown-toggle text-dark fw-semibold" href="#">
                                Elements <FaAngleDown style={{ fontSize: '10px' }} />
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Products</a></li>
                                <li><a className="dropdown-item" href="#">Typography</a></li>
                                <li><a className="dropdown-item" href="#">Buttons</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Phone Number */}
                    <div className="d-flex align-items-center text-dark">
                        <FaPhone className="me-2" />
                        <span>+123 ( 456 ) ( 7890 )</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;