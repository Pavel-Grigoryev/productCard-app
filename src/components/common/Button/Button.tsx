import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './Button.module.scss';

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {
    xType?: string
}

export const Button: React.FC<ButtonPropsType> = (
    {
        xType,
        className,
        disabled,
        ...restProps
    }
) => {
    const finalClassName = s.button
        + (disabled ? ' ' + s.disabled :
            xType === 'secondary' ? ' ' + s.secondary:
            ' ' + s.default)
        + (className ? ' ' + className : '');
    return (
        <button
            type={'button'}
            disabled={disabled}
            className={finalClassName}
            {...restProps}
        />
    );
};