import React from 'react'
import containerImg from '../../../img/container.jpg'
function HeroSection () {
    return (
        <section
            id="hero-section"
            className="section-base-layout pt-12 min-h-screen text-center h-screen w-screen bg-no-repeat"
            style={{
                    'background-image': `url(${containerImg})`,
                    'backgroundSize': "cover",
                    'boxShadow': 'inset 0 0 0 1000px rgba(152, 160, 153, 0.7)',
                    'background-position': '90% 62%',
                    'width': '100%'
                    }}
                    >
            <div className="sm:mx-0 lg:mx-48">
                <h1 className="text-green font-bold mx-8 my-20 text-center uppercase text-4xl sm:text-5xl md:text-5xl md: xl:text-7xl font-primaryFont">
                    Pine ridge Reservation needs our help
                </h1>
            </div>

            <div className="wrapper">
                <a href="https://www.paypal.com/paypalme/RezTinyHome?locale.x=en_US&fbclid=IwAR0CDMTEUgnqjoKgfmhMhRHAR6251SWe7h_yUL55JYe5Zcf_gMuKcawXPQc"
                className="flex flex-col justify-center items-center">
                    <button className="btn-base btn-hover bg-lightTanOpac shadow-2xl">
                        <span className="font-primaryFont">Donate</span>
                    </button>
                </a>
            </div>
        </section>
    )
}

export  default HeroSection;