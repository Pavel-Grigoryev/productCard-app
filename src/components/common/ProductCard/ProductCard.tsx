import React, {FC, useEffect, useState} from 'react';
import s from './ProductCard.module.scss';
import {ProductType} from '@/components/screens/Home/ProductSection/ProductSection';
import Link from 'next/link';
import Image from 'next/image';
import {Color} from '@/components/common/Color/Color';
import {Button} from '@/components/common/Button/Button';

type PropsType = {
    product: ProductType
}
export const ProductCard: FC<PropsType> = ({product}) => {

    const [currentColor, setCurrentColor] = useState('');

    useEffect(() => {
        if (product.colors.length > 0) {
            setCurrentColor(product.colors[0].colorName);
        }
    }, [product.colors]);

    const colors = product.colors.map(colorItem => {
        const isActiveColor = currentColor === colorItem.colorName;
        return (
            <Color key={colorItem.color} colorItem={colorItem} activeColor={isActiveColor}
                   changeColor={setCurrentColor}/>
        );

    });

    return (
        <article className={s.product}>
            <Image className={s.image} src={product.images.src} alt={product.images.alt} width={258} height={258}/>
            <p className={s.price}><span>$</span>{product.price}</p>
            <h3 className={s.title}>{product.title}</h3>
            <p className={s.description}>{product.description}</p>
            <div className={s.colorBlock}>
                <p className={s.colorTitle}>Choose your colour</p>
                <ul className={s.colorsList}>
                    {colors}
                </ul>

            </div>
            <div className={s.buttonBlock}>
                <Button>Add to card</Button>
                <Button xType={'secondary'}>Buy now</Button>
                <Link className={s.link} href={'#'}> Read reviews </Link>
            </div>
        </article>
    );
};

