import React from 'react';

import Article from './Article';

function Feed(props) {
    return (
        <div className="container">
            <h5>Feed test text.</h5>
            
            {props.articles.map( (article, index) => (
                <li key={index}>
                <Article articles={props.articles} key={index}/> {/* should articles equal to {article}?*/}
                </li>
                
            ))}

            {console.log("TEST - Feed props: ", props)}
            {console.log("TEST - index from map: ", index)}
            {/* <Article /> */}
        </div>
    );
};

export default Feed;