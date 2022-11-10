//imports
import React, { useState } from 'react';

//import any necessary page JS files
import Home from './pages/Home';
import About from './pages/About';

// import necessary components
import Article from './Article';
import Feed from './Feed';
import Footer from './Footer';
import Header from './Header';

//house logic pertaining to creating an array of object of news stories once looped - API call
const articlesArrObj = [

];

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home'); //use this if creating multiple page site, to switch between pages

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        else if (currentPage === 'About') {
            return <About />;
        }
        else {
            return <Home />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>

            {/* <Home articles = {articlesArrObj}/> */}
            {renderPage()}

            <Footer />
            
        </div>
    );
};

