interface Props {
    src: 0 | 1 | 2;
}

export const CarrouselImage = ({ src }: Props) => {
    const imageOptions = {
        0: "https://img.asurascans.com/sliders/5f1383ba-9ccd-44d5-a659-13536102feed.png",
        1: "https://img.asurascans.com/sliders/74639cd5-6b4e-4a06-9486-1b2cdb6cd1b6.png",
        2: "https://img.asurascans.com/sliders/6440196e-260e-455f-a46d-33766c1a0679.png"
    }
    return (
        <img
            src={imageOptions[src]}
            alt=""
            className="w-[46%] xl:w-[50%]"
        />
    )
}