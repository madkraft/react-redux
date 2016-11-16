import React from 'react'

const ArticleList = props => {
    if (!props.articles) {
        return (
            <div>Loading...</div>
        )
    }

    if (props.articles.length === 0) {
        return (
            <div>No articles are here.</div>
        )
    }
    
    return (
        <div>
            {
                props.articles.map(article => {
                    return (
                        <h2>{article.title}</h2>
                    )
                })
            }
        </div>
    )
}

export default ArticleList
