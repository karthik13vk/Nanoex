import React from 'react'
import './Footer.scss'
import logo from './../img/main-logo.png';

const Footer = () => {
  return (
    <section className='footer-section'>
      <div className="container"  data-aos="fade-up" data-aos-duration="1500"  data-aos-anchor-placement="center-bottom">
        <div className="row">
          <div className="col-lg-12 text-center">
            <img src={logo} alt="logo" className='' />
          </div>
        </div>
        <div className="col-lg-12 text-center">
          <div className="copyright">
            <span>
              2025 © <b> NanoEx RWA </b>| <br /> All Rights Reserved
            </span>
            <p>
              Empowering the Future of Finance with RWA Tokenization & Blockchain Innovation
            </p>
          </div>
        </div>
        <div className="col-lg-12 text-center footer-link">
          <ul>
            <li>
              <a href="javascript:void(0)" title='Whitepaper'>Whitepaper     </a>
            </li>
            <li>
              <a href="javascript:void(0)" title='About Us'>About Us </a>
            </li>
            <li>
              <a href="javascript:void(0)" title='Privacy Policy'>Privacy Policy </a>
            </li>
            <li>
              <a href="javascript:void(0)" title='Terms & Conditions'>Terms & Conditions </a>
            </li>
            <li>
              <a href="javascript:void(0)" title='Contact Us'>Contact Us     </a>
            </li>
          </ul>
        </div>
        <br />
        <div className='footer-para'>
          <p> Disclaimer: Asset tokenization and cryptocurrencies may be subject to regulatory restrictions in your jurisdiction. The value of digital assets may fluctuate, and profits could be subject to taxes or other legal obligations. Always conduct your own research before investing</p>
        </div>

      </div>
    </section>
  )
}

export default Footer