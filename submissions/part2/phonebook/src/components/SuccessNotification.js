import React from 'react'

const SuccessNotification = ({ message }) => {

    const successNotificationStyle = {
        color: 'green',
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    }
    if (message === null) {
        return null
    }

    return (
        <div style={successNotificationStyle}>
            {message}
        </div>

    )
}

export default SuccessNotification