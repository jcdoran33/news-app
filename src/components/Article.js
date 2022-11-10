import React from 'react';

function Article() {
    return(
        <div className="container">
            <div className="card">
                <h5 className="article-title">Article Title</h5>
                <img className="article-img" src="#"/>
                <p className="article-description"></p>
                <a className="article-link" href="">Link to Full Article</a>
            </div>
        </div>
    );
};

export default Article;