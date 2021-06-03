import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { logout } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  console.log(userInfo)

  const logoutHandler = () => {
    dispatch(logout())
  }

    return (
       <nav className="nav-wrapper" style={{
           backgroundColor:'#101522'
       }}>
           <div className="container">
                <Link to='/' className="brand-logo left">
                    Search Education
                </Link>
          <ul className="right">
            <li>
                <NavLink to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink to='/contact'>Contact</NavLink>
            </li>
           { userInfo ? (
             
            <li>
                <NavLink to='/' onClick={logoutHandler}>Logout</NavLink>
            </li>
           ) : 
           (
               <li>
                   <NavLink to='/login'>Login</NavLink>
                </li>
           )
           }
        </ul>
           </div>
       </nav>
    )
}



export default Navbar