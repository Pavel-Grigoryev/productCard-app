import React, {FC, PropsWithChildren} from 'react';

import s from './Layout.module.scss';


export const Layout: FC<PropsWithChildren<unknown>> = ({children}) => {
    return (
        <div className={s.container}>
            {children}
        </div>
    );
};

