import React from 'react'
import tokenomicimg from './../img/chart.png';
import './Tokenomics.scss'
const Tokenomics = () => {
    return (
        <section className='tokenomics-section'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="heading-section text-center" data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='heading-title'>Tokenomics</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 text-center" data-aos="flip-left" data-aos-duration="2000">
                        <div className="tokenomics-chart">
                            <img src={tokenomicimg} alt="img" />
                        </div>
                    </div>
                </div>
                <div className="token-dis-section">
                    <div className="row justify-content-center">
                        <div className="col-lg-10" data-aos="fade-up" data-aos-duration="2000">
                            <div className="token-title">
                                Token Distribution
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-6">
                                    <div className="token-box">
                                        <div className="token-inner">
                                            <ul>
                                                <li>
                                                    Token Name
                                                </li>
                                                <li>
                                                    Token Standard
                                                </li>
                                                <li>
                                                    Blockchain Network
                                                </li>
                                                <li>
                                                    Total Supply
                                                </li>
                                                <li>
                                                    Token Decimals
                                                </li>
                                                <li>
                                                    Initial Token Price
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-6 col-6">
                                    <div className="token-box token-box-two ">
                                        <div className="token-inner">
                                            <ul>
                                                <li>
                                                    nRWA
                                                </li>
                                                <li>
                                                    BEP-20
                                                </li>
                                                <li>
                                                    Binance Smart Chain (BSC)
                                                </li>
                                                <li>
                                                    100,000,000 nRWA tokens
                                                </li>
                                                <li>
                                                    18
                                                </li>
                                                <li>
                                                    $0.10 USD (Private Sale), $0.50 USD (Public Sale)
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tokenomics