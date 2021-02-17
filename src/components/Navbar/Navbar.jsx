import React from 'react'

const Navbar = () => {
  const classes = {
    nav: 'py-5 shadow-md text-yellow-300 bg-gray-700 text-5xl font-extrabold flex flex-wrap justify-center',
  }
  return (
    <div className={classes.nav}>
      <div>EuroJackpot</div>     
    </div>
  )
}

export default Navbar
