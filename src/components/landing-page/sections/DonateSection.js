import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'
function DonateSection () {
    return (
        <section id="donate-section" className="section-base-layout bg-darkTan">
                <div id="donate-card" className="flex flex-col justify-evenly items-center bg-gray rounded-2xl py-16 px-10 shadow-2xl">
                    <h2 className="donate-card-heading text-lightTan pb-10 text-lg md:text-2xl lg:text-3xl md:w-10/12 lg:w-8/12">
                        Please help by donating to, and sharing the Pine Ridge Tiny Homes Project
                    </h2>
                    <a href="https://www.paypal.com/paypalme/RezTinyHome?locale.x=en_US&fbclid=IwAR0CDMTEUgnqjoKgfmhMhRHAR6251SWe7h_yUL55JYe5Zcf_gMuKcawXPQc" className="donate-link">
                        <button className="btn-base btn-hover bg-darkTan">
                            <FontAwesomeIcon icon={faHandHoldingHeart} />
                            <span className="donate-card-span font-semibold ">
                                Donate
                            </span>
                        </button>
                    </a>
                </div>

            <article id="donation-article" className="flex flex-col justify-center items-center text-center">
                <div className="wrapper">
                    <p className="text-lg md:text-2xl lg:text-4xl md:w-10/12 lg:w-8/12 text-gray">
                        All donations help support the conversion of shipping containers into cozy,
                        energy-efficient, tornado-proof homes, and transport them to Pine Ridge, South
                        Dakota to ease the stress of homelessness and overpopulated households on the reservation.
                        Any and all Help is greatly appreciated!
                    </p>
                </div>
            </article>
        </section>
    )
}

export default DonateSection;