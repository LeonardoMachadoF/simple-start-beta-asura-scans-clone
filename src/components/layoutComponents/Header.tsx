import { Icon } from "../generalComponents/icons/Icon";
import { HeaderMenuListItem } from "../generalComponents/HeaderMenuListItem";

export const Header = () => {
    return (
        <header className="h-16 w-full bg-gray-700 flex items-center">
            <div className="flex justify-between w-full max-w-7xl m-auto">
                <nav className="flex items-center gap-5">
                    <img
                        src="https://img.asurascans.com/img/logo-icon.png"
                        alt=""
                        className="w-12"
                    />
                    <ul className="flex gap-5 font-bold text-white">
                        <HeaderMenuListItem title="Home" />
                        <HeaderMenuListItem title="Bookmarks" />
                        <HeaderMenuListItem
                            title="Languages"
                            iconName="carretDown"
                            iconPosition="right"
                        />
                        <HeaderMenuListItem
                            title="Surprise me"
                            iconName="star"
                            iconWeight="fill"
                            iconPosition="left"
                            iconColor="#ffc403"
                        />
                    </ul>
                </nav>
                <div className="flex items-center gap-2">
                    <Icon name="magnifyingGlass" size={28} />
                    <Icon name="user" size={28} weight='bold' color="#fff" />
                </div>
            </div>
        </header>
    )
}