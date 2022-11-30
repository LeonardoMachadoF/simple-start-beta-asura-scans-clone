import { Carrousel } from "../src/components/layoutComponents/Carrousel";
import { Header } from "../src/components/layoutComponents/Header";
import { LatestsUpdates } from "../src/components/layoutComponents/LatestsUpdates";
import { PopularSeries } from "../src/components/layoutComponents/PopularSeries";

export default function Home() {

    return (
        <div className=''>
            <Header />
            <Carrousel />
            <main className="flex flex-col gap-16 max-w-7xl m-auto mt-16 md:px-2">
                <PopularSeries />
                <LatestsUpdates />
            </main>
            <div className="relative mt-10 max-w-7xl m-auto h-[580px] overflow-hidden flex flex-col">
                <img className="max-h-full w-fit" src="https://img.asurascans.com/static/register-banner.png" alt="" />
                <div className="absolute right-0 top-0 bottom-0 flex flex-col items-end justify-center gap-4">
                    <h4 className="text-6xl text-white font-bold w-[420px] text-end">Register to keep up with your favourites</h4>
                    <p className="text-2xl w-[500px] text-end text-gray-200">Logged in users have access to history and bookmarks.</p>
                    <button className="text-white font-bold px-12 py-4 rounded-3xl" style={{ background: 'linear-gradient(180deg,#7334ae,#3e0251)' }}>Register now</button>
                </div>
            </div>
        </div>
    )
}
