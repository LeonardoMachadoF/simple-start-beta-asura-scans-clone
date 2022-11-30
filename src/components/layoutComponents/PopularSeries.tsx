import { useEffect, useState } from "react";
import { PopularSeriesItem } from "../generalComponents/PopularSeriesItem";

export const PopularSeries = () => {
    const [activePopular, setActivePopular] = useState(1);
    const [activeSection, setActiveSection] = useState(1);

    const handleActiveSectionChange = () => {
        if (activeSection == 2) {
            setActiveSection(1)
        } else {
            setActiveSection(2)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            handleActiveSectionChange()
        }, 3000)
    }, [activeSection])


    return (

        <section className="flex flex-col gap-6">
            <h1 className="text-white text-4xl">Popular Series</h1>
            <div className="flex gap-6 h-[560px] md:flex-col md:h-[760px]">
                <div className="flex w-full overflow-hidden">
                    <div className="flex" style={{ translate: `${activePopular * -100 + 100}%`, transition: 'all ease .5s' }}>
                        <PopularSeriesItem activePopular={activePopular} setActivePopular={setActivePopular} />
                        <PopularSeriesItem activePopular={activePopular} setActivePopular={setActivePopular} />
                        <PopularSeriesItem activePopular={activePopular} setActivePopular={setActivePopular} />
                        <PopularSeriesItem activePopular={activePopular} setActivePopular={setActivePopular} />
                        <PopularSeriesItem activePopular={activePopular} setActivePopular={setActivePopular} />
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="flex overflow-hidden" >
                        <div className="flex" style={{ translate: `${activeSection * -100 + 100}%`, transition: 'all ease .5s' }}>
                            <div className="grid grid-cols-3 min-w-full gap-5 rounded-lg md:grid-cols-3">
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                            </div>
                            <div className="grid grid-cols-3 min-w-full gap-5 rounded-lg md:grid-cols-3">
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                            </div>
                            <div className="grid grid-cols-3 min-w-full gap-5 rounded-lg md:grid-cols-3">
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                                <img className="w-[100%] h-[100%] rounded-lg" src="https://img.asurascans.com/thumbnail/7dbfee07-e1d9-4c3a-902f-1203662284df.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}