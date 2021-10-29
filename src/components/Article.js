import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Constants from '../lib/Constants';
import Fetch from '../lib/Fetch';
const showdown = require('showdown');

const Article = () => {

    const { slug } = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        Fetch.get(Constants.API.ENDPOINTS.ARTICLE.DETAILS + "/" + slug)
            .then(res => {
                console.log(res);
                let article = res.data;
                article.text = new showdown.Converter().makeHtml(article.markdown)
                setArticle(article)
            })
    }, [])

    return (
        <article className="article-container">
            <div className="article-page-category">
                {article.CategoryName}
            </div>
            <h1>
                {article.title}
            </h1>
            <h4 style={{ marginTop: 2 }}>
                {article.subtitle}
            </h4>
            <div style={{ marginBottom: 12 }}>
                <i className="fas fa-user-circle"></i>
                {article.FullName}    
            </div>
            <div className="article-date">
                Posted on Saturday, 23 October 2021, 1:04 PM
            </div>
            <div className="article-date">
                Last updated on Tuesday, 26 October 2021, 11:10 AM
            </div>
            <div style={{ marginTop: 6, marginBottom: 6 }}>
            </div>
            <div style={{ borderBottom: '1px solid #3332' }}></div>
            <div dangerouslySetInnerHTML={{__html: article.text}}></div>
        </article>
    )
}

export default Article
