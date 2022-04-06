import React from 'react'

const Alert = ({message, warning}) => {

    return <div className={`alert ${warning ? "alert-danger" : "alert-success"}`}>{message}</div>
}

export default Alert
