import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';


function  Navbar () {
  return (
    <div className='navbar'>
        <div className='leftside'>
        <h2>HungerPanda </h2>

        <Link  to ="/">GetApp </Link>

        </div>
        <div className='rightside'>
            <Link  to ="/Login">Login </Link>
            <Link  to ="/">Sign up</Link>
        </div>
    </div>
  )
}

export default Navbar