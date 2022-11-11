import React from 'react';

import Article from './Article';

function Feed(props) {
    
    const searchButton = document.querySelector("#search-button");
    const searchBar = document.querySelector("#searchbar");

    function runSearch() {
        //save the text value as a const
        const searchedText = searchBar.value;
        console.log("Value of searchedText var: ", searchedText);
        //clear the text field
        searchBar.textContent = '';
        //run the API fetch again using the search criteria as the search value

    };
    // searchButton.addEventListener("click", runSearch);

    

    
    return (
        <div className="container">
            <h5 className="text-center">News Feed Title</h5>

            {/* area for search bar here */}

            <label className="text-center" for="searchbar">Search for news:</label><br></br>
            <input className="text-center" placeholder="Search for news..." type="text" id="searchbar" name="searchbar" required minLength="4" maxLength="35"></input>
            <button id="search-button" className="text-center">Search</button>

            {props.articles.map((article, index) => (
                
                // <li key={index}>
                    <div className="card m-2 p-1">
                        <h5 className="article-title">{props.articles[index].title}</h5>
                        <img className="article-img" src={props.articles[index].img} />
                        <p className="article-description">{props.articles[index].desc}</p>
                        <a className="article-link" href={props.articles[index].link}>Link to Full Article</a>
                    </div>
                 

                // </li>
                

            ))}

            {console.log("TEST - Feed props: ", props)}

            {/* <Article /> */}
        </div>
    );
};

export default Feed;