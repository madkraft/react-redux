import React from 'react'

class Header extends React.Component {
    render () {
        return (
            <nav>
                Navigation { this.props.appName.toLowerCase() }
            </nav>
        )
    }
}

export default Header
