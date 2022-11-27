import { Carrousel } from "../src/components/layoutComponents/Carrousel";
import { Header } from "../src/components/layoutComponents/Header";
import { LatestsUpdates } from "../src/components/layoutComponents/LatestsUpdates";
import { PopularSeries } from "../src/components/layoutComponents/PopularSeries";

export default function Home() {

    return (
        <div className=''>
            <Header />
            <Carrousel />
            <main className="flex flex-col gap-16 max-w-7xl m-auto mt-16">
                <PopularSeries />
                <LatestsUpdates />
            </main>
            <div className="mt-10"></div>
        </div>
    )
}
