import Link from "next/link";
import { IconNames } from "../../types/iconNames";
import { Icon } from "./icons/Icon";


interface Props {
    title: string;
    iconName?: IconNames;
    iconWeight?: 'fill' | 'light' | 'regular' | 'thin' | 'bold';
    iconPosition?: 'right' | 'left';
    iconColor?: string;
}

export const HeaderMenuListItem = ({ title, iconName, iconPosition, iconWeight, iconColor }: Props) => {
    return (
        <li className={`flex text-sm items-center hover:text-hoverText-200 transition-colors ${iconName && 'gap-1'}`}>
            {iconName && iconPosition === 'left' &&
                <Icon
                    name={iconName}
                    size={16}
                    weight={iconWeight}
                    color={iconColor}
                />
            }
            <Link href="/">{title}</Link>
            {iconName && iconPosition === 'right' &&
                <Icon
                    name={iconName}
                    size={16}
                    weight={iconWeight}
                    color={iconColor}
                />
            }
        </li>
    )
}