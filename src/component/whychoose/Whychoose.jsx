import React from 'react'
import './Whychoose.scss'
import whychooseimg from './../img/whychooseimg.png';
const Whychoose = () => {
    return (
        <>
            <section className='whychoose-section'>
                <div className="container">
                    <div className="whychoose-inner">
                        <div className="border-bg">
                            <div className="row  align-items-center">
                                <div className="col-lg-8">
                                    <div className="whychoose-left" data-aos="fade-up" data-aos-duration="1500">
                                        <div className="heading-section text-left">
                                            <h2 className='heading-title'>Why Choose NanoEx RWA?</h2>
                                            <p>NanoEx RWA revolutionizes real-world asset tokenization, offering secure, fractional, and globally accessible investments. With blockchain-backed transparency, seamless liquidity, and automated yield generation, investors gain unmatched financial opportunities. The platform ensures regulatory compliance, multi-chain integration, and institutional-grade security, making asset trading efficient and trustable. Backed by governance rights, staking rewards, and exclusive investment access, NanoEx RWA bridges traditional finance with blockchain innovation, redefining how assets are owned, traded, and managed worldwide.</p>
                                        </div>
                                        <div className="btn-area d-flex mt-lg-4">
                                            <a href="#" className="main-btn">Join The Giveaway</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="whychoose-right" data-aos="flip-left" data-aos-duration="2000">
                                        <div className="whychoose-img">
                                            <img src={whychooseimg} alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='investing-section'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-duration="2000">
                            <div className="heading-section text-center">
                                <h2 className='heading-title'>Start Investing in Tokenized <br /> Real-World Assets Today!</h2>
                                <p>
                                    Join NanoEx RWA and unlock secure, fractional, and globally accessible investments with blockchain-powered asset tokenization. Seize new financial opportunities now!
                                </p>
                            </div>
                            <div className="btn-area d-flex justify-content-center mt-lg-4">
                                <a href="#" className="main-btn">Sign Up Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Whychoose