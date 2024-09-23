import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons if not already

export default function Header() {
    // State to manage the search filter
    const [filter, setFilter] = useState('');

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-transparent nav-sec">
            <div className="container-fluid">
                <i className="bi bi-justify-left fs-4 navbar-brand"></i>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <form className="d-flex h-form" role="search" style={{marginLeft:'50%'}}>
                    <input 
                        className="form-control me-2" 
                        type="search" 
                        value={filter} 
                        onChange={(e) => setFilter(e.target.value)} // Corrected onChange
                        placeholder="Search" 
                        aria-label="Search" 
                    />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Employee
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Profile
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Settings
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
