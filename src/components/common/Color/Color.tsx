import React, {FC} from 'react';
import s from './Color.module.scss';
import {ColorType} from '@/components/screens/Home/ProductSection/ProductSection';
import cn from 'classnames';

type PropsType = {
    colorItem: ColorType
    activeColor: boolean
    changeColor: (name: string) => void
}

// eslint-disable-next-line react/display-name
export const Color: FC<PropsType> = ({colorItem, activeColor, changeColor}) => {
    const onClickHandler = () => {
      changeColor(colorItem.colorName)
    }
    return (
        <li className={cn(s.colorItem, {[s.active]: activeColor})} onClick={onClickHandler}>
            <div className={s.colorRound} style={{backgroundColor: colorItem.color}}></div>
        </li>
    );
};

