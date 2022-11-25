import Link from "next/link"
import { useEffect, useState } from "react"
import { Icon } from "./icons/Icon"

interface Props {
    activePopular: number;
    setActivePopular: (activePopular: number) => void;
}

export const PopularSeriesItem = ({ activePopular, setActivePopular }: Props) => {
    let timeout: NodeJS.Timeout;
    useEffect(() => {
        timeout = setTimeout(() => {
            handleActivePopularChange();
        }, 2000)
    }, [activePopular])

    const handleActivePopularChange = () => {
        clearTimeout(timeout);
        if (activePopular < 5) {
            setActivePopular(activePopular + 1);
        } else {
            setActivePopular(1);
        }
    }

    return (
        <article className='h-[600px] min-w-[100%] overflow-hidden relative rounded-t-2xl'>
            <div>
                <div className="absolute bottom-0 z-10">
                    <h2 className=" text-white text-3xl ">
                        <Link href='/'>Death Is the Only Ending for the Villainess</Link>
                    </h2>
                    <p className="text-[#9ba7bf] text-base h-[76px] leading-6 overflow-hidden mt-3">
                        An F-rank Hunter.
                        More than that, a useless, pathetic F-rank older brother who’s holding back his younger brother, who’s doing well as an S-rank.
                        The title that was given to me, who regressed after living a shitty life halfheartedly and sapping my younger brother’s life away, The ‘Perfect Caregiver’ Alright then. This time, I’ll just live a low-profile life, keeping to myself while watching over those amazing bastards…
                        …That was what I’d thought, but these S-ranks are… a little weird.
                    </p>
                    <div className="mt-4 flex justify-between">
                        <div className="flex gap-3">
                            <button className="py-1 px-6 text-white text-lg rounded-[60px] w-40" style={{ background: 'linear-gradient(180deg,#7334ae,#3e0251)' }}>
                                Read now
                            </button>
                            <div>
                                <div className="flex">
                                    <Icon name="star" size={12} weight='fill' color="#ffd700" />
                                    <Icon name="star" size={12} weight='fill' color="#ffd700" />
                                    <Icon name="star" size={12} weight='fill' color="#ffd700" />
                                    <Icon name="star" size={12} weight='fill' color="#ffd700" />
                                    <Icon name="star" size={12} weight='fill' color="#ffd700" />
                                </div>
                                <span className="text-xs text-white">23 Reviews</span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full" style={{ background: activePopular === 1 ? 'linear-gradient(180deg,#7334ae,#3e0251)' : 'gray' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ background: activePopular === 2 ? 'linear-gradient(180deg,#7334ae,#3e0251)' : 'gray' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ background: activePopular === 3 ? 'linear-gradient(180deg,#7334ae,#3e0251)' : 'gray' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ background: activePopular === 4 ? 'linear-gradient(180deg,#7334ae,#3e0251)' : 'gray' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ background: activePopular === 5 ? 'linear-gradient(180deg,#7334ae,#3e0251)' : 'gray' }}></div>
                            </div>
                            <div>
                                <div onClick={handleActivePopularChange} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(180deg,#7334ae,#3e0251)' }}>
                                    <Icon name="carretLeft" size={20} color='#FFF' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 bottom-0 right-0 left-0" style={{ background: 'linear-gradient(0deg,#121111 34.69%,rgba(28,0,37,0))' }}></div>
            <img
                src="https://img.asurascans.com/poster/451fead0-1ab9-4088-9cae-55e927bd8d62.jpg"
                alt=""
                width="100%"
            />
        </article>
    )
}