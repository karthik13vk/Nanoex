import React from 'react'
import './Teams.scss'
import team1 from './../img/team1.png'
import team2 from './../img/team2.png'
import team3 from './../img/team3.png'
import team4 from './../img/team4.png'
import team5 from './../img/team5.png'
import team6 from './../img/team6.png'
import team7 from './../img/team7.png'
import team8 from './../img/team8.png'
import team9 from './../img/team9.png'
import team10 from './../img/team10.png'
import team11 from './../img/team11.png'
import team12 from './../img/team12.png'
import team13 from './../img/team13.png'


import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

const teamData = [
    {
        id: 1,
        name: "Michael Briggs",
        title: "Chief Executive Officer (CEO)",
        image: team1,
        description:
            "An expert in blockchain finance and RWA tokenization, leading NanoEx RWA with a strategic vision for financial inclusion, asset security, and global accessibility through decentralized investments."
    },
    {
        id: 2,
        name: "Rotimi Micheal",
        title: "Chief Operating Officer (COO)",
        image: team2,
        description:
            "A blockchain strategist with over a decade of experience in crypto trading, DeFi, and risk management, optimizing platform efficiency, ecosystem growth, and operational scalability."
    },
    {
        id: 3,
        name: "Dancharles Tonye",
        title: "Chief Technology Officer (CTO)",
        image: team3,
        description:
            "A specialist in blockchain architecture, AI integration, and cybersecurity, responsible for developing scalable, secure, and high-performance digital asset infrastructures for NanoEx RWA’s ecosystem."
    },
    {
        id: 4,
        name: "Gabriel Idakolo",
        title: "Chief Financial Officer (CFO)",
        image: team4,
        description:
            "A finance expert with over 20 years in financial planning, risk assessment, and investment strategy, ensuring NanoEx RWA’s financial stability and long-term growth."
    },
    {
        id: 5,
        name: "Goni Musa Tijjani",
        title: "Head of Customer Support (HCS)",
        image: team5,
        description:
            "With expertise in digital finance and risk analysis, he ensures seamless customer experience, compliance, and security within NanoEx RWA’s trading and investment ecosystem."
    },
    {
        id: 6,
        name: "Pius Onojah",
        title: "Chief Marketing Officer (CMO)",
        image: team6,
        description:
            "A marketing strategist with 18+ years in financial services, leading brand positioning, investor outreach, and ecosystem expansion for NanoEx RWA’s adoption and growth."
    },
    {
        id: 7,
        name: "Muhammad Tahir",
        title: "Chief Security Officer (CSO)",
        image: team7,
        description:
            "A cybersecurity specialist overseeing blockchain security, fraud prevention, and AI-driven risk management to protect digital assets, transactions, and investor data."
    },
    {
        id: 8,
        name: "Omega Igbudu",
        title: "Deputy Chief Operating Officer (DCOO)",
        image: team8,
        description:
            "An industry educator specializing in Web3 technologies, blockchain governance, and decentralized finance, ensuring business growth, partnerships, and ecosystem sustainability."
    },
    {
        id: 9,
        name: "Olowu Azeez Babs",
        title: "Deputy Chief Marketing Officer (DCMO)",
        image: team9,
        description:
            "A fintech entrepreneur with 22+ years in digital finance, mobile money solutions, and business strategy, driving marketing innovation and financial service expansion."
    },

    {
        id: 10,
        name: "Babatunde Olayemi",
        title: "Deputy Head of Customer Support (DHCS)",
        image: team10,
        description:
            "A customer experience specialist improving service automation, user engagement, and support quality, ensuring seamless investor onboarding and retention."
    },
    {
        id: 11,
        name: "Olanrewaju Hussein",
        title: "Chief Executive Officer (CEO)",
        image: team11,
        description:
            "An expert in blockchain finance and RWA tokenization, leading NanoEx RWA with a strategic vision for financial inclusion, asset security, and global accessibility through decentralized investments."
    },
    {
        id: 12,
        name: "Salimon Sarafadeen",
        title: "Chief Compliance Officer (CCO)",
        image: team12,
        description:
            "A legal expert specializing in Shari’a law, arbitration, taxation, and corporate finance, ensuring NanoEx RWA’s compliance with financial regulations and legal security."
    },
    {
        id: 13,
        name: "Samuel Bright",
        title: "Associate Chief Operating Officer (ACOO)",
        image: team13,
        description:
            "A blockchain strategist and educator specializing in crypto trading, DeFi solutions, and investor community building, driving NanoEx RWA’s adoption and engagement."
    },

];

const Teams = () => {
    return (
        <section className='team-section'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="heading-section text-center" data-aos="fade-up" data-aos-duration="1500">
                            <h2 className='heading-title'>Meet Our Leadership Team</h2>
                            <p>
                                Our team consists of industry leaders in blockchain, finance, cybersecurity, and real-world asset tokenization, driving innovation, security, and global adoption at NanoEx RWA.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="team-slider">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-duration="2000">

                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
                                spaceBetween={20}
                                // slidesPerView={4}
                                autoplay={{
                                    delay: 2500,
                                    disableOnInteraction: false,
                                }}
                                breakpoints={{
                                    640: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    767: {
                                        slidesPerView: 1,
                                        spaceBetween: 20,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 30,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                }}
                                loop={false}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                // onSwiper={(swiper) => console.log(swiper)}
                                // onSlideChange={() => console.log('slide change')}
                            >
                                {teamData.map((member) => (
                                    <SwiperSlide key={member.id}>
                                        <div className="team-box">
                                            <div className="team-content">
                                                <div className="team-img">
                                                    <img src={member.image} alt={member.name} />
                                                </div>
                                                <h4 className="team-title">{member.name}</h4>
                                                <h6 className="team-subtitle">{member.title}</h6>
                                                <p>{member.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teams