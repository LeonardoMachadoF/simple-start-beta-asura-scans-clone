import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "../generalComponents/icons/Icon"
import { PopularSeriesItem } from "../generalComponents/PopularSeriesItem";

export const PopularSeries = () => {
    const [activePopular, setActivePopular] = useState(1);

    return (
        <section className="flex flex-col gap-6">
            <h1 className="text-white text-4xl">Popular Series</h1>
            <div className="flex gap-6">
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
                    <div>tomorrow</div>
                </div>
            </div>
        </section>
    )
}