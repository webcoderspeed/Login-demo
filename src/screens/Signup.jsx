  
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

const Signup = () => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const history = useHistory();

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister;

   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(register(email,password));
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
                    <input type="email" id="email" onChange={e => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} value={password} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Sign In</button>
                </div>
            </form>
        </div>
  )
}

export default Signup
