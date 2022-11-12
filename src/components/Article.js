import React from 'react';

function Article(props) {
    return(
        <div className="container">
            <div className="card">
                <h5 className="article-title">{props.articles.title}</h5>
                <img className="article-img" src={props.articles.img}/>
                <p className="article-description">{props.articles.desc}</p>
                <a className="article-link" href={props.articles.link}>Link to Full Article</a>
            </div>

            {/* {console.log("TEST - Key test: ", props.key)} */}
        </div>
    );
};

export default Article;