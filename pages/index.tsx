import { Carrousel } from "../src/components/layoutComponents/Carrousel";
import { Header } from "../src/components/layoutComponents/Header";
import { PopularSeries } from "../src/components/layoutComponents/PopularSeries";

export default function Home() {

    return (
        <div className=''>
            <Header />
            <Carrousel />
            <main className="max-w-7xl m-auto mt-16">
                <PopularSeries />
            </main>
        </div>
    )
}
