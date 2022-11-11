import React from 'react';

import Article from './Article';

function Feed(props) {
    return (
        <div className="container">
            <h5>Feed test text.</h5>

            {props.articles.map((article, index) => (
                <li key={index}>
                    <div className="card">
                        <h5 className="article-title">{props.articles[index].title}</h5>
                        <img className="article-img" src={props.articles[index].img} />
                        <p className="article-description">{props.articles[index].desc}</p>
                        <a className="article-link" href={props.articles[index].link}>Link to Full Article</a>
                    </div>
                    {console.log("TEST - index: ", index)}
                    {/* <Article articles={props.articles} key={index}/>  */}
                </li>

            ))}

            {console.log("TEST - Feed props: ", props)}

            {/* <Article /> */}
        </div>
    );
};

export default Feed;