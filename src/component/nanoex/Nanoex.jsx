import React from 'react'
import './Nanoex.scss'
import nanoimg1 from './../img/nano1.png';
import nanoimg2 from './../img/nano2.png';
import nanoimg3 from './../img/nano3.png';
import nanoimg4 from './../img/nano4.png';
import nanoimg5 from './../img/nano5.png';
const Nanoex = () => {
    return (
        <section className='nano-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section text-center"  data-aos="fade-up">
                            <h2 className='heading-title'>NanoEx RWA</h2>
                            <h6 className='heading-tag'>Transforming Real-World Assets into <br></br>
                                Digital Investments!
                            </h6>
                            <p>Welcome to NanoEx RWA, the ultimate platform for tokenizing real-world assets (RWAs) and unlocking a new era of liquidity, accessibility, and security in the investment landscape. The nRWA token is the backbone of the NanoEx RWA ecosystem, providing utility, governance, and exclusive investment opportunities for investors. By transforming traditionally illiquid assets—like real estate, fine art, commodities, and infrastructure—into fractionalized digital tokens, NanoEx RWA enables seamless trading, transparency, and enhanced liquidity.</p>
                        </div>
                    </div>
                </div>
                <div className="nano-details">
                    <div className="row">
                        <div className="col-lg-2 col-md-6"  data-aos="fade-up" data-aos-duration="1000">
                            <div className="nano-box">
                                <img src={nanoimg1} alt="img" loading="lazy" />
                                <h5>Up to 50% <br />
                                    Fee Discounts</h5>
                                <p>
                                    Reduced trading, tokenization, and custody fees.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6"  data-aos="fade-up" data-aos-duration="1500">
                            <div className="nano-box">
                                <img src={nanoimg2} alt="img" loading="lazy" />
                                <h5>Governance &  <br />
                                    Voting Rights</h5>
                                <p>
                                    Influence platform upgrades, fees, and asset listings.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6"  data-aos="fade-up" data-aos-duration="2000">
                            <div className="nano-box">
                                <img src={nanoimg3} alt="img" loading="lazy" />
                                <h5>Exclusive  <br />
                                    Investment Access</h5>
                                <p>
                                    Early participation in premium tokenized assets.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6"  data-aos="fade-up" data-aos-duration="1500">
                            <div className="nano-box">
                                <img src={nanoimg4} alt="img" loading="lazy" />
                                <h5>Staking
                                    <br />
                                    & Rewards</h5>
                                <p>
                                    Earn high APY staking rewards and platform incentives.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6"  data-aos="fade-up" data-aos-duration="1000">
                            <div className="nano-box">
                                <img src={nanoimg5} alt="img" loading="lazy" />
                                <h5>Global
                                    <br />
                                    
                                    Crypto Card</h5>
                                <p>
                                    Use tokenized assets
                                    for real-world transactions.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 justify-content-center"  data-aos="fade-up" data-aos-duration="3000">
                        <div className="col-lg-10 text-center">
                            <p>
                                NanoEx RWA is pioneering the future of asset ownership by bridging the gap between physical assets and blockchain technology. Join us in reshaping the future of real-world asset investment with blockchain technology!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Nanoex