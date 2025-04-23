import React from 'react'
import ecoprogramimg from './../img/nanoexprogramimg.png';
import './Nanoexprogram.scss'

const Nanoexprogram = () => {
  return (
    <section className='nanoexprogram-section'>
      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="heading-section " data-aos="fade-up" data-aos-duration="1500">
              <h2 className='heading-title'>NanoEx </h2>
              <h6 className='heading-tag'> Private Investors’ Program

              </h6>
              <p>Unlock exclusive benefits with the NanoEx Private Investors’ Program, designed for strategic investors seeking premium token allocations and early access to nRWA tokens.</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="ecoex-program-img" data-aos="fade-up" data-aos-duration="2000">
              <img src={ecoprogramimg} alt="img" loading="lazy" />
            </div>
          </div>
        </div>
        <div className="ecoprogram-inner-content">
          <div className="row">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="2000">
              <div className="ecoprogram-box">
                <h4>Platinum</h4>
                <p>
                  Limited to 10 subscribers @ $15,000, receiving 0.75% (750,000 nRWA) of the token supply each.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="2500">
              <div className="ecoprogram-box">
                <h4>Diamond</h4>
                <p>
                  Limited to 10 subscribers @ $15,000, receiving 0.75% (750,000 nRWA) of the token supply each.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
              <div className="ecoprogram-box">
                <h4>Gold</h4>
                <p>
                  Limited to 10 subscribers @ $15,000, receiving 0.75% (750,000 nRWA) of the token supply each.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="1500">
              <div className="ecoprogram-box">
                <h4>Silver</h4>
                <p>
                  Limited to 10 subscribers @ $15,000, receiving 0.75% (750,000 nRWA) of the token supply each.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="2000">
              <div className="ecoprogram-box">
                <h4>Bronze</h4>
                <p>
                  Limited to 10 subscribers @ $15,000, receiving 0.75% (750,000 nRWA) of the token supply each.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-duration="3000">
              <div className="ecoprogram-box">
                <h4>Regular</h4>
                <p>
                  Limited to 10 subscribers @ $15,000, receiving 0.75% (750,000 nRWA) of the token supply each.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center text-center mt-2" data-aos="fade-up" data-aos-duration="3000">
            <div className="col-lg-10">
              <p>
              Secure Your Spot Today! Join an elite group of investors and be part of the future <br /> of Real-World Asset Tokenization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Nanoexprogram