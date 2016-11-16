import Banner from './Banner'
import MainView from './MainView'
import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    appName: state.appName
})

class Home extends React.Component {
    render () {
        return (
            <div className="home-page">
                <Banner appName={this.props.appName} />
                <MainView />
                <p>Popular tags</p>
            </div>
        )
    }
}

export default connect(mapStateToProps, () => ({}))(Home)
