import React, {useEffect} from 'react'

const Alert = ({message, warning, setMessage, items}) => {

    useEffect(() => {
        const timeout = setTimeout(() => setMessage(""), 2000)
        return () => clearTimeout(timeout)
    }, [items])

    return <div className={`alert ${warning ? "alert-danger" : "alert-success"}`}>{message}</div>
}

export default Alert
