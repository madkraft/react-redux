import React from 'react'

const Banner = ({ appName }) => {
    return (
        <div>
            <h1>
                {appName.toLowerCase()}
            </h1>
            <p>A place to share your knowledge</p>
        </div>
    )
}

export default Banner
