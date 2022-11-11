import React from 'react';

import Article from './Article';

function Feed(props) {
    return (
        <div className="container">
            <h5 className="text-center">News Feed Title</h5>

            {props.articles.map((article, index) => (
                
                // <li key={index}>
                    <div className="card m-2">
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