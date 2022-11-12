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


//define constants - for URL
// const apiKey = process.env.REACT_APP_API_KEY; //retreiving env variables not working on GH pages
const apiKey = 'd33901c470614752bc602ebd91c7ff10';
let searchQuery; //to be redefined later with search field .value

//house an array of object of news stories once looped - API call
const articlesArrObj = [];

//deinfe the function that will call API, and then store/append the article info to the articlesArrObj above
function newsFetch() {
    var apiURL = 'https://newsapi.org/v2/everything?q=' + searchQuery + '&apiKey=' + apiKey
    fetch(apiURL)
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            console.log(data);
            //save required data from each loop
            for (let i = 0; i < 15; i++) {
                //save as a let variable the Title, Image, Description, and Hyperlink
                let articleTitle = data.articles[i].title;
                let articleImg = data.articles[i].urlToImage;
                let articleDesc = data.articles[i].description;
                let articleLink = data.articles[i].url;

                //then create an object containing all just-defined data
                let apiObject = {
                    key: i,
                    title: articleTitle,
                    img: articleImg,
                    desc: articleDesc,
                    link: articleLink
                };

                articlesArrObj.push(apiObject); //then push data to array as an Object
            };
            // console.log("TEST - articlesArrObj: ", articlesArrObj);
        });

};

// call newsFetch upon loading the page...
newsFetch();

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About'); //use this if creating multiple page site, to switch between pages

    const renderPage = () => {
        // console.log("TEST - renderPage function launched!");
        if (currentPage === 'About') {
            return <About />
        } else {
            return <Home articles={articlesArrObj} change={handlePageChange} />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />

            {/* <Home articles = {articlesArrObj}/> */}
            {renderPage()}

            <Footer />

        </div>
    );
};

