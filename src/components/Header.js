import React from 'react'

export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className="row">
            <div className="col-md-8">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a href="#home"
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link text-dark'}
                        >
                            Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link text-dark'}
                        >
                            About
                        </a>
                    </li>

                </ul>

            </div>

        </div>
    );
};