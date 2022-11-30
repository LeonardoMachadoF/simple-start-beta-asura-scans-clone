interface Props {
    data: {
        title: string;
        imageUrl: string;
        chapters: {
            chapter: string;
            createdAt: string;
        }[]
    }
}

export const LatestUpdateItem = ({ data }: Props) => {
    return (
        <article className="w-48 h-[420px] text-white  text-center sm:w-32 sm:h-[320px]">
            <img className="rounded-2xl" src={data.imageUrl} alt="" />
            <h3 className="text-xl font-bold flex mt-6 mb-2 sm:text-base">{data.title}</h3>
            <div>
                {data.chapters.map((chapter, index) => (
                    <div className="flex justify-between" key={index}>
                        <span className="sm:text-xs">{chapter.chapter}</span>
                        <span className="text-gray-200 text-sm sm:text-xs">{chapter.createdAt}</span>
                    </div>
                ))}
            </div>
        </article>
    )
}