import React from 'react'
import "../styles/component-styles/_main.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons'

function Main (){
    // render () {
        return (
            <main id="main-content-wrapper">
                <section id="hero-section">
                    <div className="flex-container-wrapper">
                        <h1 className="hero-heading">
                            Pine ridge Reservation needs our help
                        </h1>
                    </div>

                    <div className="hero-donate-btn-wrapper">
                        <a href="https://www.paypal.com/paypalme/RezTinyHome?locale.x=en_US&fbclid=IwAR0CDMTEUgnqjoKgfmhMhRHAR6251SWe7h_yUL55JYe5Zcf_gMuKcawXPQc" className="donate-link">
                            <button className="hero-donate-btn">
                                <span>Donate</span>
                            </button>
                        </a>
                    </div>
                </section>
                <section id="about-summary-section">
                    <div className="flex-container-wrapper">
                        <h1 className="summary-section-h1">
                         About Pine Ridge
                        </h1>
                    </div>
                    <div className="flex-container-wrapper">
                        <p className="summary-section-p">
                            This is the greatest humanitarian crisis in the Unites States today.
                        </p>
                    </div>
                    <div className="flex-container-wrapper">
                        <p className="summary-section-p">
                            The Sioux of Pine Ridge have endured the harshest conditions of human
                            suffering in the Unites States for over 100 years.
                        </p>
                    </div>

                </section>
                <section id="facts-section">
                     <aside className="facts">
                        The average life expectancy on the reservation is only
                        <div className="format-fix-1a">
                            <span className="emphasis-1">48</span>
                            <span className="format-fix-1b">years old</span>
                        </div>
                    </aside>
                    <span className="divider"/>
                    <aside className="facts">
                        <span className="emphasis-2">Teenage suicide</span> has directly affected every family on the reservation.
                    </aside>
                    <span className="divider"/>
                    <aside className="facts">
                        Half of the population is under the age of <span className="emphasis-1">18</span>
                    </aside>
                </section>
                <section id="donate-section">

                    <div className="donate-card-wrapper">
                        <div id="donate-card">
                            <h2 className="donate-card-heading">
                                Please help by donating to, and sharing the Pine Ridge Tiny Homes Project
                            </h2>
                            <a href="https://www.paypal.com/paypalme/RezTinyHome?locale.x=en_US&fbclid=IwAR0CDMTEUgnqjoKgfmhMhRHAR6251SWe7h_yUL55JYe5Zcf_gMuKcawXPQc" className="donate-link">
                                <button className="donate-card-btn">
                                    <FontAwesomeIcon icon={faHandHoldingHeart} />
                                    <span className="donate-card-span">
                                        Donate
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>

                    <article id="donation-article">
                        <div className="flex-container-wrapper">
                            <p className="donation-article-p">
                                All donations help support the conversion of shipping containers into cozy,
                                energy-efficient, tornado-proof homes, and transport them to Pine Ridge, South
                                Dakota to ease the stress of homelessness and overpopulated households on the reservation.
                                Any and all Help is greatly appreciated!
                            </p>
                        </div>
                    </article>
                </section>
            </main>
        )
}

export default Main;
