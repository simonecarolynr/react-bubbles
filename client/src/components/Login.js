import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {

  const [ user, setUser ] = useState({ 
    username: 'Lambda School', 
    password: 'i<3Lambd4' 
  });

  const hanldeSubmit = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', user)
      .then(res => {
        console.log(res.data.payload)
        localStorage.setItem('token', res.data.payload);
        props.history.push('/bubblepage');
      })
      .catch(err => console.log(err))
  }

  const handleChange = e => {
    setUser({
        [e.target.name] : e.target.value
    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={hanldeSubmit}>
            <input name='username' placeholder='Username' onChange={handleChange} />
            <input name='password' type='password' placeholder='Password' onChange={handleChange}/>
            <button type='submit' />
        </form>
    </>
  );
};

export default Login;
