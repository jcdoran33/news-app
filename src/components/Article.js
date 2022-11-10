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
            {/* {console.log("TEST - Article props - title: ", props.articles[props.articles.key].title)} */}
            {console.log("TEST - Key test: ", props.key)}
        </div>
    );
};

export default Article;


{/* <div className="container">
            <div className="card">
                <h5 className="article-title">Article Title</h5>
                <img className="article-img" src="#"/>
                <p className="article-description"></p>
                <a className="article-link" href="">Link to Full Article</a>
            </div>
        </div> */}