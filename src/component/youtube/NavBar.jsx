import React from 'react'
import NavRight from './NavRight.jsx'
import NavCenter from './NavCenter.jsx'
import NavLeft from './NavLeft.jsx'

function NavBar() {
  return (
    <div className='nav-container'>
      <NavLeft/>
      <NavCenter/>
      <NavRight/>
    </div>
  )
}

export default NavBar
