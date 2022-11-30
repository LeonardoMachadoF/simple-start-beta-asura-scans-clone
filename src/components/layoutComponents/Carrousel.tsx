import Image from "next/image"
import { useState, useEffect } from 'react';
import { CarrouselImage } from "../generalComponents/CarrouselImage";

export const Carrousel = () => {
    const [left, setLeft] = useState(-20)
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (left === -158) {
                setLeft(-20)
            } else {
                setLeft(state => state - 46)
            }
        }, 2000)

        return () => clearTimeout(timeout);
    }, [left])

    return (
        <div className="relative h-[480px]  md:hidden">
            <Image
                src="https://beta.asurascans.com/img/banner-bkg.png"
                alt=""
                fill
                className="-z-10"
                priority
            />
            <div className="flex overflow-hidden h-full items-center relative">
                <div className="flex w-fit absolute" style={{ translate: `${left}%`, transition: left != -20 ? 'all ease .3s' : '' }}>
                    <CarrouselImage src={0} />
                    <CarrouselImage src={1} />
                    <CarrouselImage src={2} />
                    <CarrouselImage src={0} />
                    <CarrouselImage src={1} />
                    <CarrouselImage src={2} />
                </div>
            </div>
        </div>
    )
}