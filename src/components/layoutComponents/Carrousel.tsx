import Image from "next/image"
import { useState, useEffect } from 'react';

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
        <div className="relative h-[480px]">
            <Image
                src="https://beta.asurascans.com/img/banner-bkg.png"
                alt=""
                fill
                className="-z-10"
                priority
            />
            <div className="flex overflow-hidden h-full items-center relative">
                <div className="flex w-fit absolute" style={{ translate: `${left}%`, transition: left != -20 ? 'all ease .3s' : '' }}>
                    <img
                        src="https://img.asurascans.com/sliders/6440196e-260e-455f-a46d-33766c1a0679.png"
                        alt=""
                        width="46%"
                    />
                    <img
                        src="https://img.asurascans.com/sliders/5f1383ba-9ccd-44d5-a659-13536102feed.png"
                        alt=""
                        width="46%"
                    />
                    <img
                        src="https://img.asurascans.com/sliders/74639cd5-6b4e-4a06-9486-1b2cdb6cd1b6.png"
                        alt=""
                        width="46%"
                    />
                    <img
                        src="https://img.asurascans.com/sliders/6440196e-260e-455f-a46d-33766c1a0679.png"
                        alt=""
                        width="46%"
                    />
                    <img
                        src="https://img.asurascans.com/sliders/5f1383ba-9ccd-44d5-a659-13536102feed.png"
                        alt=""
                        width="46%"
                    />
                    <img
                        src="https://img.asurascans.com/sliders/74639cd5-6b4e-4a06-9486-1b2cdb6cd1b6.png"
                        alt=""
                        width="46%"
                    />
                </div>
            </div>
        </div>
    )
}