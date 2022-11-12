import React from 'react';
//import necessary components
import Feed from '../Feed';
import Article from '../Article';

export default function Home(props) {
    return (
        <div className="container">
            <h3 className="text-center">XYZ News Feed</h3>

            <Feed articles={props.articles} />
        </div>
    );
};