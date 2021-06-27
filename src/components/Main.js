import React from 'react'
import AboutSummarySection from './landing-page/sections/AboutSummarySection';
import HeroSection from './landing-page/sections/HeroSection';
import FactsSection from './landing-page/sections/FactsSection'
import DonateSection from './landing-page/sections/DonateSection'
import ContactForm from './contact-from/ContactForm';
function Main (){
        return (
            <main id="main-content-wrapper" className="font-semibold">
                <HeroSection/>
                <AboutSummarySection />
                <FactsSection />
                <DonateSection />
                <ContactForm />
            </main>
        )
}

export default Main;
