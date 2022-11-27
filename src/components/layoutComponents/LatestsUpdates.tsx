import { useEffect, useState } from "react";
import { LatestUpdateItem } from "../generalComponents/LatestUpdateItem"

export const LatestsUpdates = () => {
    const [items, setItems] = useState<{
        title: string;
        imageUrl: string;
        chapters: {
            chapter: string;
            createdAt: string;
        }[]
    }[]>([])

    const addMoreItens = () => {
        const newItems = [...items];
        for (let i = 0; i < 12; i++) {
            newItems.push({
                title: "Regressor Instruction Manual",
                imageUrl: "https://img.asurascans.com/thumbnail/37b7af9b-43a6-4592-9526-f2ff1227255f.jpg",
                chapters: [
                    { chapter: "Chapter 69", createdAt: "3 days ago" },
                    { chapter: "Chapter 68", createdAt: "3 days ago" },
                    { chapter: "Chapter 67", createdAt: "3 days ago" },
                ]
            });
        }
        setItems(newItems);
    }

    useEffect(() => {
        addMoreItens();
    }, [])


    return (
        <section className="flex flex-col gap-8">
            <h1 className="text-4xl text-white">Latest Updates</h1>
            <div className="flex justify-between gap-6 flex-wrap">
                {items.map((item, index) => {
                    return <LatestUpdateItem key={index} data={item} />
                })}
            </div>
            <button
                className="w-60 h-12 rounded-full flex m-auto items-center justify-center font-bold text-xl"
                style={{ background: 'linear-gradient(180deg,#7334ae,#3e0251)' }}
                onClick={addMoreItens}
            >
                Load more
            </button>
        </section>
    )
}