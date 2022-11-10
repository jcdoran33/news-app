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


//define constants - URL
const apiKey = '';
let searchQuery;

//house logic pertaining to creating an array of object of news stories once looped - API call
const articlesArrObj = [

];

//deinfe the function that will call API, and then store/append the article info to the articlesArrObj above
function newsFetch () {
    var apiURL = 'https://newsapi.org/v2/everything?q='+searchQuery+'&apiKey='+apiKey
    fetch(apiURL)
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {
            console.log(data);
            //save required data from each loop
            for (let i=0; i < 2; i++){
                //save as a let variable the Title, Image, Description, and Hyperlink
                let articleTitle = data.articles[i].title;
                // console.log("articleTitle test: ", articleTitle);
                let articleImg = data.articles[i].urlToImage;
                // console.log("articleImg test: ", articleImg);
                let articleDesc = data.articles[i].description;
                // console.log("articleDesc test: ", articleDesc);
                let articleLink = data.articles[i].url;
                // console.log("articleLink test: ", articleLink);

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
            console.log("TEST - articlesArrObj: ", articlesArrObj);
        });
    
};

// call newsFetch upon loading the page...
newsFetch();

export default function Container() {
    const [currentPage, setCurrentPage] = useState('Home'); //use this if creating multiple page site, to switch between pages

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home articles={articlesArrObj}/>;
        }
        else if (currentPage === 'About') {
            return <About />;
        }
        else {
            return <Home articles={articlesArrObj}/>;
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

