import React from 'react'
import ecosystemimg from './../img/ecosystem.png';
import './Ecosystem.scss'
const Ecosystem = () => {
    return (
        <section className='ecosystem-section'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="ecosystem-img" data-aos="flip-left" data-aos-duration="1500">
                            <img src={ecosystemimg} alt="img" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 " data-aos="fade-up" data-aos-duration="2000">
                        <div className="ecosystem-content">
                            <div className="heading-section">
                                <h2 className='heading-title'>NanoEx Ecosystem</h2>
                                <p>Our ecosystem supports the entire lifecycle of digital asset trading and investment,
                                    offering seamless transactions, secure payments, automation, and rewarding opportunities.
                                </p>
                            </div>
                            <div className='inner-content'>
                                <div className='inner-line'>
                                    <h3>RWA Marketplace </h3>
                                    <p>
                                        A blockchain-powered platform for tokenizing real-world assets, enabling fractional ownership, enhanced liquidity, and secure global asset trading.
                                    </p>
                                </div>
                                <div className='inner-line'>
                                    <h3>Affiliate Program </h3>
                                    <p>
                                        Earn rewards by referring users, promoting the platform, and growing the ecosystem through strategic partnerships and community-driven incentives.
                                    </p>
                                </div>
                                <div className='inner-line'>
                                    <h3>Fiat-to-Crypto (P2P) </h3>
                                    <p>
                                        Convert fiat to crypto securely through a decentralized peer-to-peer network, enabling fast and transparent transactions without intermediaries.
                                    </p>
                                </div>
                                <div className='inner-line'>
                                    <h3>Nano Pay (Bank Transfers) </h3>
                                    <p>
                                        Facilitate seamless and instant bank transfers for crypto-related transactions, bridging traditional finance with blockchain-powered payments.
                                    </p>
                                </div>
                                <div className='inner-line'>
                                    <h3>Fiat-to-Crypto (P2P) </h3>
                                    <p>
                                        Convert fiat to crypto securely through a decentralized peer-to-peer network, enabling fast and transparent transactions without intermediaries.
                                    </p>
                                </div>
                                <div className='inner-line'>
                                    <h3>Nano Pay (Bank Transfers) </h3>
                                    <p>
                                        Facilitate seamless and instant bank transfers for crypto-related transactions, bridging traditional finance with blockchain-powered payments.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Ecosystem