import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#f5ebe0' }}>
            <div className="container">
                <Link className="navbar-brand fw-bold text-dark" style={{ fontSize: '1.5rem' }}>
                    🛒 Product Manager
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-semibold" to="/">Add Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark fw-semibold" to="/products">View Products</Link>
                        </li>
                    </ul>

                    {/* Optional: search bar */}
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            style={{ borderColor: '#deb887', backgroundColor: '#fffaf0' }}
                        />
                        <button className="btn" style={{ backgroundColor: '#d6ccc2', color: '#4b3832' }} type="submit">
                            Search
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
