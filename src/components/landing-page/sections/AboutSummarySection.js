import React from 'react'

function AboutSummarySection() {
    return (
        <section id="about-summary-section" className="section-base-layout bg-gray text-center font-primaryFont">
            <div className="wrapper">
                <h1 className="font-bold text-5xl lg:text-6xl text-white">
                 About Pine Ridge
                </h1>
            </div>
            <div className="wrapper">
                <h2 className="summary-section-p">
                    This is the greatest humanitarian crisis in the United States today.
                </h2>
            </div>
            <div className="wrapper">
                <h2 className="summary-section-p">
                    The Sioux of Pine Ridge have endured the harshest conditions of human
                    suffering in the United States for over 100 years.
                </h2>
            </div>
        </section>
    )
}

export  default AboutSummarySection;