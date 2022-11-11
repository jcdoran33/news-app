import React from 'react';
//import necessary components
import Feed from '../Feed';
import Article from '../Article';

export default function Home(props) {
    return (
        //use a .map here on props.articles.map (article => ...) to create a <Article /> for each article in the ArticlesObjs
        <div className="container">
            <h3 className="text-center">XYZ News Feed</h3>

            <Feed articles={props.articles}/>
        </div>
    );
};