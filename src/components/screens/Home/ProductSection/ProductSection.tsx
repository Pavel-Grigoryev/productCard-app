import React from 'react';
import s from './ProductSection.module.scss';
import {ProductCard} from '@/components/common/ProductCard/ProductCard';
import headPhone from '@/assets/images/HeadPhone.png';
import {StaticImageData} from 'next/image';

const product: ProductType = {
    id: 1,
    title: 'Zebronics head phone',
    price: '100',
    colors: [
        {colorName: 'red', color: '#EE4444'},
        {colorName: 'blue', color: '#3C81F6'},
        {colorName: 'black', color: '#000000'}
    ],
    description: 'A portable headphone with a battery life of 20 hours and IP67 rating. Comes with a 3 years warranty.',
    images: {
        src: headPhone,
        alt: 'Head phone image'
    }
};

export const ProductSection = () => {
    return (
        <section className={s.section}>
            <ProductCard product={product}/>
        </section>
    );
};

// Types

export type ProductType = {
    id: number
    title: string
    price: string
    description: string
    colors: ColorType[]
    images: ImagesType
}

type ImagesType = {
    src: StaticImageData
    alt: string
}

export type ColorType = {
    colorName: string
    color: string
}