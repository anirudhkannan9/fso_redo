import React from 'react'


const Footer = () => {
    const footerStyle = {
        color: 'green', 
        fontStyle: 'italic',
        fontSize: 16
    }

    return (
        <div style={footerStyle}>
            <em>Note app, inspired by Department of Computer Science, University of Helsinki 2021</em>
        </div>
    )
}

export default Footer