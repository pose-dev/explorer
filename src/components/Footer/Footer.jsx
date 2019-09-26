import './Footer.scss';
import React from 'react'

function Footer() {
  return (
    <>
      <a target="_blank" rel="noopener noreferrer" href="//pose.dev/privacy/en_US.html">Privacy Policy</a>
      <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <a rel="noopener noreferrer" href="javascript:void(0)">v{process.env.REACT_APP_VERSION}</a>
    </>
  )
}

export default Footer
