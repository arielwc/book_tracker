import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <>
      <div className="start">Track Your Books!</div>
      <Link to="/login">
        <div>Login</div>
      </Link>
      <div>
        <h3>Don't have an account?</h3>
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  )
}

export default Start
