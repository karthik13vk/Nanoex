import React from 'react'
import './Banner.scss'
import bannerimg from './../img/banner-img1.png';
import bannerimgres from './../img/banner-img.png';
const Banner = () => {
    return (
        <section className='Banner-section'>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-6 col-md-12 order-md-2 order-2 order-lg-1"  data-aos="fade-up">
                        <div className="banner-content">
                            <h1>nRWA Token</h1>
                            <h6> Powering the Future of Real-World Asset Tokenization</h6>
                            <p>
                                The NanoEx RWA ecosystem, powered by nRWA Token, revolutionizes how real-world assets are tokenized, traded, and managed on the blockchain. Through a transparent tokenization framework, we enable fractional ownership, enhanced liquidity, and secure investments in traditionally illiquid assets like real estate, fine art, and infrastructure. Join the Future of Asset Tokenization Today!
                            </p>
                            <div className='btn-area d-flex gap-2 mt-4'>
                                <a href='javascript:void(0)' className='main-btn'>Whitepaper</a>
                                <a href='javascript:void(0)' className='gray-btn'>How to Buy</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-12 order-md-1 order-1 order-lg-2"  data-aos="fade-up">
                        <div className="banner-right-bg">
                            <img src={bannerimg} alt="bannerimg" className='d-none d-lg-block' />
                            <img src={bannerimgres} alt="bannerimg" className='d-block d-lg-none' />
                        </div>
                    </div>
                </div>
            </div></section>
    )
}

export default Banner