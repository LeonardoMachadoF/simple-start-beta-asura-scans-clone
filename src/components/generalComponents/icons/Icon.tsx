import { IconNames } from '../../../types/iconNames';
import { MagnifyingGlass, User, CaretDown, Star } from 'phosphor-react';

interface Props {
    name: IconNames;
    size: number;
    color?: string;
    weight?: 'fill' | 'light' | 'regular' | 'thin' | 'bold';
}

export const Icon = ({ name, size, color, weight }: Props) => {
    const icons = {
        magnifyingGlass: <MagnifyingGlass size={size} color={color} weight={weight} />,
        user: <User size={size} color={color} weight={weight} />,
        carretDown: <CaretDown size={16} color={color} weight={weight} />,
        star: <Star size={16} color={color} weight={weight} />
    }
    return (
        icons[name]
    )
}