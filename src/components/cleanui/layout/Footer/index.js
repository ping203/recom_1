import React from 'react'
import style from './style.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.footerInner}>
        <a
          href="https://ayracs.com"
          target="_blank"
          rel="noopener noreferrer"
          className={style.logo}
        >
          ayracs
          <span />
        </a>
        <br />
        <p className="mb-0">
          Copyright © 2017-2020 Ayracs |{' '}
          <a href="https://www.aryacs.org/privacy" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
