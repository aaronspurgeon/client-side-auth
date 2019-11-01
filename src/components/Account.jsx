import React, { useState, useEffect } from "react"
import api from '../utils/api'

function Account(props) {
    const [user, setUser] = useState({
        name: '',
        email: ''
    })

    useEffect(() => {
        api().get('/me')
            .then(res => {
                setUser({
                    name: res.data.name,
                    email: res.data.email
                })
            })
            .catch(err => {
                throw (err)
            })
    }, [])
    return (
        <>
            <h1>My account</h1>
            <div className='account-row'>Name {user.name}</div>
            <div className='account-row'>Email {user.email}</div>
        </>
    )
}

export default Account;