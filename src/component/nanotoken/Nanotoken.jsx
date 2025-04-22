import React from 'react'
import './Nanotoken.scss'
import nanotokenimg from './../img/nanotoken.png';

const Nanotoken = () => {
    return (
        <section className='nanotoken-section'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-12" data-aos="flip-left" data-aos-duration="1500">
                        <div className="nanoroken-img">
                            <img src={nanotokenimg} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-12" data-aos="fade-up" data-aos-duration="2000">
                        <div className="nanotoken-content">
                            <div className="heading-section">
                                <h2 className='heading-title'>nRWA Token</h2>
                                <h6 className='heading-tag'> Powering the NanoEx RWA Ecosystem </h6>
                                <p>The nRWA token is the utility and governance token of the NanoEx RWA ecosystem, enabling secure, efficient, and decentralized real-world asset tokenization. It offers trading fee discounts, governance rights, staking rewards, and exclusive investment opportunities. With a deflationary buyback and burn mechanism, nRWA enhances value by reducing supply over time. Token holders benefit from liquidity incentives, passive income, and access to premium asset offerings, making nRWA essential for the future of asset tokenization. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nanotoken