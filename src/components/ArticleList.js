import React, { useEffect, useState } from 'react'
import Constants from '../lib/Constants'
import Fetch from '../lib/Fetch'

const ArticleList = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        Fetch.get(Constants.API.ENDPOINTS.ARTICLE.LIST)
            .then(res => {
                console.log(res);
                setArticles(res.data);
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return (
        <div className="main-menu">
            {
                articles.map((cat, i) => (
                    <div key={i}>
                        <h2>{cat.CategoryName}</h2>
                        <div className="flex-row-wrap">
                            {
                                cat.articles.map(article => (
                                    <a href={"/" + article.url} key={article.id}>
                                        <div class='article-date-menu'>22 Oct</div>
                                        <div class='text'>
                                            <h5>{article.title}</h5>
                                            <h6>{article.subtitle}</h6>
                                            <div style={{ marginTop: 10, display: 'none' }}><span class='tag'></span></div>
                                        </div>
                                    </a>
                                ))
                            }

                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ArticleList;
