import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/signin'>Sing in</Link>
        </li>
        <li>
          <Link to='/signup'>sing up</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
