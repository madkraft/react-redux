import ArticleList from '../ArticleList'
import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    articles: state.articles
})

const MainView = props => {
    return (
        <div>
            <ul>
                <li>
                    <a href="">Global Feed</a>
                </li>
            </ul>

            <ArticleList articles={props.articles} />
        </div>
    )
}

export default connect(mapStateToProps, () => ({}))(MainView)
