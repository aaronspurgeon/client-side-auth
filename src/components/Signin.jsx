import React, { useState } from 'react'
import api from '../utils/api'

function Signin(props) {
    const [err, setErr] = useState();
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        api()
            .post('/signin', data)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                props.history.push('/account')
            })
            .catch(err => {
                setErr(err.response.data.message)
            })
    }
    return (
        <form onSubmit={handleSubmit}>
            {err && <div className='error'>{err}</div>}
            <input type="email" name='email' placeholder='Email' onChange={handleChange} value={data.email} />
            <input type="password" name='password' placeholder='Password' onChange={handleChange} value={data.password} />

            <button type='submit'>Sign In</button>
        </form>
    )
}

export default Signin