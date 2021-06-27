import React from 'react'

function FactsSection() {
    return (
        <section id="facts-section" className="section-base-layout bg-darkTan">
            <aside className="flex flex-col items-center py-8">
                <h3 className="text-gray text-xl w-8/12 md:text-2xl lg:text-4xl">
                    The average life expectancy on the reservation is only
                    <div className="flex flex-row justify-center items-start">
                        <span className="green-span-emphasis text-green font-bold font-secondayFont text-4xl md:text-5xl lg:text-7xl">
                            48
                        </span>
                        <span className="lg:mt-2">
                            years old
                        </span>
                    </div>
                </h3>
            </aside>

            <span className="border-b-3 border-green w-9/12"/>

            <span className="divider"/>
            <aside className="flex flex-col items-center justify-center py-8">
                <h3 className="text-gray text-xl w-11/12 md:text-2xl lg:text-4xl">
                    <div className="flex flex-col justify-center items-center">
                        <span className="green-span-emphasis text-green font-bold font-secondayFont text-4xl md:text-5xl lg:text-7xl">
                            Teenage suicide
                        </span>
                        <span className="w-9/12">
                            has directly affected every family on the reservation.
                        </span>
                    </div>
                </h3>
            </aside>

            <span className="border-b-3 border-green w-9/12"/>

            <span className="divider"/>
            <aside className="flex flex-col items-center py-8">
                <h3 className="flex flex-col text-gray text-xl w-9/12 md:text-3xl lg:text-4xl">
                    <span>
                        Half of the population is under the age of
                    </span>
                    <span className="green-span-emphasis text-green font-bold font-secondayFont text-4xl md:text-5xl lg:text-7xl">
                        18
                    </span>
                </h3>
            </aside>

            <span className="border-b-3 border-green w-9/12"/>
        </section>
    )
}

export default FactsSection;