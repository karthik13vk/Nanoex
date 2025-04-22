import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Faq.scss'

const Faq = () => {
    return (
        <section className='faq-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section text-left text-md-center"  data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='heading-title'>FAQs</h2>
                        </div>
                    </div>
                </div>
                <Accordion defaultActiveKey="0" flush  data-aos="fade-up" data-aos-duration="2000">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>1. What is NanoEx RWA?</Accordion.Header>
                        <Accordion.Body>
                        NanoEx RWA is a blockchain-powered platform that enables tokenization, trading, and management of real-world assets (RWAs) like real estate, commodities, and collectibles. It provides fractional ownership, enhanced liquidity, and secure investment opportunities, allowing investors to access and trade tokenized assets seamlessly in a decentralized marketplace with global accessibility.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>2. How does real-world asset tokenization work?</Accordion.Header>
                        <Accordion.Body>
                        Real-world asset tokenization involves converting physical assets into blockchain-based digital tokens, allowing them to be fractionally owned, traded, and managed securely. Each token represents a share of an asset, providing improved liquidity, transparency, and investment accessibility while ensuring verifiable ownership, automated transactions, and decentralized trading on the NanoEx RWA platform.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>3. What assets can be tokenized on NanoEx RWA?</Accordion.Header>
                        <Accordion.Body>
                        NanoEx RWA supports the tokenization of various asset classes, including real estate, fine art, commodities, intellectual property, luxury collectibles, infrastructure, and income-generating assets. By tokenizing these assets, investors can access previously illiquid markets, diversify their portfolios, and trade fractionalized ownership with ease, improving market efficiency and accessibility.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>4. What are the benefits of investing in tokenized assets?</Accordion.Header>
                        <Accordion.Body>
                        Tokenized assets offer fractional ownership, 24/7 trading, increased liquidity, secure transactions, and reduced investment costs. Investors can trade globally without restrictions, earn passive income through staking, and benefit from blockchain’s transparent and immutable records. Tokenization eliminates intermediaries, reduces fraud, and provides a seamless, decentralized investment experience with enhanced market efficiency and financial inclusion.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>5. What is the role of the nRWA token?</Accordion.Header>
                        <Accordion.Body>
                        The nRWA token serves as the utility and governance token within the NanoEx RWA ecosystem. It provides trading fee discounts, staking rewards, voting rights, and exclusive access to premium asset offerings. nRWA token holders benefit from ecosystem growth, passive income opportunities, and governance participation, ensuring a decentralized and transparent investment environment.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>6. Is NanoEx RWA compliant with regulations?</Accordion.Header>
                        <Accordion.Body>
                        Yes, NanoEx RWA follows global financial regulations, ensuring that all tokenized assets meet legal, audit, and compliance standards. The platform incorporates identity verification (KYC), anti-money laundering (AML) policies, and smart contract security to maintain a legally compliant and trustworthy investment ecosystem, providing investors with secure and auditable investment opportunities.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>7. How can I start investing in tokenized assets?</Accordion.Header>
                        <Accordion.Body>
                        To start investing, create an account, complete KYC verification, and fund your wallet using fiat or crypto. Explore the NFT marketplace, choose an asset, and invest in fractional or full ownership tokens. Manage your holdings, stake assets for rewards, and trade in a decentralized marketplace for liquidity and growth.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>8. Can I trade tokenized assets instantly?</Accordion.Header>
                        <Accordion.Body>
                        Yes, tokenized assets can be traded instantly through the NanoEx RWA decentralized marketplace. The platform supports automated market-making, staking rewards, and seamless fiat-to-crypto conversion, ensuring smooth transactions. Unlike traditional markets, tokenized assets enable real-time trading with no delays, providing investors with global liquidity and market accessibility at all times.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>9. How does NanoEx RWA ensure security?</Accordion.Header>
                        <Accordion.Body>
                        NanoEx RWA integrates advanced blockchain security, encryption protocols, and institutional-grade custody solutions to protect investor assets. All transactions are recorded on-chain, making them immutable and verifiable. The platform also conducts regular smart contract audits, compliance monitoring, and fraud prevention measures, ensuring a secure and transparent trading environment for all users.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                        <Accordion.Header>10. How do I earn passive income with NanoEx RWA?</Accordion.Header>
                        <Accordion.Body>
                        NanoEx RWA offers multiple passive income opportunities through staking, yield farming, governance participation, and revenue-sharing models. Token holders can stake nRWA tokens to earn high APY rewards, participate in ecosystem governance, and receive revenue from tokenized assets. These mechanisms ensure long-term profitability and sustainable financial growth for investors.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </section>
    )
}

export default Faq