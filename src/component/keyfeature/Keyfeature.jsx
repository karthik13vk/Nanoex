import React from 'react'
import keyfeatureimg1 from './../img/keyfeature-1.png';
import keyfeatureimg2 from './../img/keyfeature-2.png';
import keyfeatureimg3 from './../img/keyfeature-3.png';
import keyfeatureimg4 from './../img/keyfeature-4.png';
import keyfeatureimg5 from './../img/keyfeature-5.png';
import keyfeatureimg6 from './../img/keyfeature-6.png';
import keyfeatureimg7 from './../img/keyfeature-7.png';
import keyfeatureimg8 from './../img/keyfeature-8.png';
import './Keyfeature.scss'
const keyFeatures = [
    {
        img: keyfeatureimg1,
        title: "Advanced RWA Tokenization",
        desc: "Enables secure and seamless conversion of real-world assets into blockchain-based tokens, ensuring legal ownership verification, valuation, & regulatory compliance."
    },
    {
        img: keyfeatureimg2,
        title: "Dual Token Models",
        desc: "Supports BEP-20 fungible tokens for fractional ownership and BEP-721/BEP-1155 non-fungible tokens for unique assets, offering flexibility in RWA asset tokenization."
    },
    {
        img: keyfeatureimg3,
        title: "Secure & Transparent Transactions",
        desc: "All transactions are recorded on the blockchain, ensuring immutability, fraud prevention, and verifiable ownership for secure asset trading, investment, & management."
    },
    {
        img: keyfeatureimg4,
        title: "Global Liquidity Access",
        desc: "Trade tokenized assets in a decentralized marketplace with market-making, staking incentives, and fiat-to-crypto conversion for seamless liquidity and accessibility."
    },
    {
        img: keyfeatureimg5,
        title: "Comprehensive Platform Integration",
        desc: "Features NFT marketplace, fiat-to-crypto gateway, governance portal, launchpad, trading bots, staking, reward hub, and a global crypto card for real-world transactions."
    },
    {
        img: keyfeatureimg6,
        title: "Exclusive Investment Opportunities",
        desc: "Provides early access to premium assets, revenue-sharing models, and customized investment strategies, benefiting nRWA token holders and institutional investors."
    },
    {
        img: keyfeatureimg7,
        title: "Scalable & Cross-Chain Compatibility",
        desc: "Designed for multi-chain functionality, ensuring interoperability, scalability, and cross-border asset tokenization across global blockchain networks for efficiency."
    },
    {
        img: keyfeatureimg8,
        title: "Diverse Asset Classes",
        desc: "Tokenizes real estate, commodities, infrastructure, vehicles, art, collectibles, and intellectual property, unlocking global investment accessibility and liquidity."
    },
    // Add more objects as needed...
];

const Keyfeature = () => {
    return (
        <section className='keyfeature-section'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="heading-section text-center" data-aos="fade-up" data-aos-duration="2000">
                            <h2 className='heading-title'>Key Features</h2>
                            <h6 className='heading-tag'> of the NanoEx RWA Ecosystem </h6>
                            <p>The NanoEx RWA ecosystem is designed to provide a seamless and secure experience for tokenizing, trading, and managing real-world assets. With its advanced blockchain infrastructure, users benefit from enhanced liquidity, fractional ownership, and global accessibility.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="keyfeature-inner">
                    <div className="row" >
                        {keyFeatures.map((feature, index) => (
                            <div className="col-lg-3 col-md-6" key={index} data-aos="fade-up">
                                <div className="keyfeature-box border-line">
                                    <div className="keyfeature-content">
                                        <div className="keyfeature-icon">
                                            <img src={feature.img} alt="icon" loading="lazy" />
                                        </div>
                                        <h5 className="keyfeature-title">
                                            {feature.title.split(" ").slice(0, 2).join(" ")} <br />
                                            {feature.title.split(" ").slice(2).join(" ")}
                                        </h5>
                                        <p>{feature.desc}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <div className="col-lg-3 col-md-6">
                            <div className="keyfeature-box">
                                <div className="keyfeature-content">
                                    <div className="keyfeature-icon">
                                        <img src={keyfeatureimg1} alt="img" />
                                    </div>
                                    <h5 className='keyfeature-title'>Advanced RWA <br />
                                        Tokenization</h5>
                                    <p>Enables secure and seamless conversion of real-world assets into blockchain-based tokens, ensuring legal ownership verification, valuation, & regulatory compliance.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="keyfeature-box">
                                <div className="keyfeature-content">
                                    <div className="keyfeature-icon">
                                        <img src={keyfeatureimg1} alt="img" />
                                    </div>
                                    <h5 className='keyfeature-title'>Dual
                                        <br />
                                        Token Models</h5>
                                    <p>Supports BEP-20 fungible tokens for fractional ownership and BEP-721/BEP-1155 non-fungible tokens for unique assets, offering flexibility in RWA asset tokenization.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="keyfeature-box">
                                <div className="keyfeature-content">
                                    <div className="keyfeature-icon">
                                        <img src={keyfeatureimg1} alt="img" />
                                    </div>
                                    <h5 className='keyfeature-title'>Secure & Transparent <br />
                                        Transactions</h5>
                                    <p>All transactions are recorded on the blockchain, ensuring immutability, fraud prevention, and verifiable ownership for secure asset trading, investment, & management.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="keyfeature-box">
                                <div className="keyfeature-content">
                                    <div className="keyfeature-icon">
                                        <img src={keyfeatureimg1} alt="img" />
                                    </div>
                                    <h5 className='keyfeature-title'>Global
                                        <br />
                                        Liquidity Access</h5>
                                    <p>Trade tokenized assets in a decentralized marketplace with market-making, staking incentives, and fiat-to-crypto conversion for seamless liquidity and accessibility.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="keyfeature-box">
                                <div className="keyfeature-content">
                                    <div className="keyfeature-icon">
                                        <img src={keyfeatureimg1} alt="img" />
                                    </div>
                                    <h5 className='keyfeature-title'>Comprehensive Platform <br />
                                        Integration</h5>
                                    <p>Features NFT marketplace, fiat-to-crypto gateway, governance portal, launchpad, trading bots, staking, reward hub, and a global crypto card for real-world transactions.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="keyfeature-box">
                                <div className="keyfeature-content">
                                    <div className="keyfeature-icon">
                                        <img src={keyfeatureimg1} alt="img" />
                                    </div>
                                    <h5 className='keyfeature-title'>Exclusive Investment  <br />
                                        Opportunities</h5>
                                    <p>Provides early access to premium assets, revenue-sharing models, and customized investment strategies, benefiting nRWA token holders and institutional investors.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="keyfeature-box">
                                <div className="keyfeature-content">
                                    <div className="keyfeature-icon">
                                        <img src={keyfeatureimg1} alt="img" />
                                    </div>
                                    <h5 className='keyfeature-title'>Scalable & Cross-Chain <br />
                                        Compatibility</h5>
                                    <p>Designed for multi-chain functionality, ensuring interoperability, scalability, and cross-border asset tokenization across global blockchain networks for efficiency.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="keyfeature-box">
                                <div className="keyfeature-content">
                                    <div className="keyfeature-icon">
                                        <img src={keyfeatureimg1} alt="img" />
                                    </div>
                                    <h5 className='keyfeature-title'>Diverse
                                        <br />
                                        Asset Classes</h5>
                                    <p>Tokenizes real estate, commodities, infrastructure, vehicles, art, collectibles, and intellectual property, unlocking global investment accessibility and liquidity.</p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row justify-content-center text-center" data-aos="fade-up" data-aos-duration="1000">
                        <div className="col-lg-10">
                            <p>
                                NanoEx RWA is transforming the future of asset ownership and investment—bridging real-world value with blockchain efficiency!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Keyfeature