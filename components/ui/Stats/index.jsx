import SectionWrapper from "../../SectionWrapper"

const stats = [
    {
        data: "10K+",
        desc: "AI websites already registered in our premium AI directories"
    },
    {
        data: "75%",
        desc: "increase in daily traffic reported by AI websites listed with us"
    },
    {
        data: "5k+",
        desc: "monthly visitors actively searching for AI solutions on our directories"
    },
    {
        data: "90%",
        desc: "of AI website owners experienced improved SEO rankings after registration"
    },
]

const Stats = () => (
    <SectionWrapper>
        <div className="custom-screen text-gray-600">
            <div className="max-w-xl xl:mx-auto xl:text-center">
                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    Unlock Infinite Growth: Guaranteed Daily Traffic Surge!
                </h3>
                <p className="mt-3">
                     Tap into Our Global Distribution Network for Infinite Growth!
                </p>
            </div>
            <div className="mt-12">
                <ul className="flex-wrap gap-x-12 gap-y-10 items-center space-y-8 sm:space-y-0 sm:flex xl:justify-center">
                    {
                        stats.map((item, idx) => (
                            <li key={idx} className="sm:max-w-[15rem]">
                                <h4 className="text-4xl text-blue-600 font-semibold">{item.data}</h4>
                                <p className="mt-3 font-medium">{item.desc}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </SectionWrapper>
)

export default Stats