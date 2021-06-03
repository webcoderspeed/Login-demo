  
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

const SignIn = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory();

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin);
  const { error } = userLogin;

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(login(email,password));
        setTimeout(() => {
         history.push('/')   
        }, 2000)
   }

  return (
    <div className='container' > 
            <form onSubmit={handleSubmit} className="white"> 
                <h5 className="grey-text text-darken-3">Sign In</h5>
                <div className="input-field">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={e => setEmail(e.target.value)} value={email} required/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} required/>
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign In</button>
                    <Link to='/signup' className="btn pink lighten-1 z-depth-0" style={{
                        marginLeft:'1rem'
                    }}>Sign Up</Link>
                     <div className="red-text center">
                        {error ? <p>Login Failed</p> : null}
                    </div>
                </div>
            </form>
        </div>
  )
}

export default SignIn
