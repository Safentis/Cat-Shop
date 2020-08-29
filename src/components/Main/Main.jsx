import React, {useState, useEffect} from 'react';
import './Main.scss';

import items from './items.json';
import ShopItem from './ShopItem/ShopItem';

const Main = (props) => {
    return (
        <>
            <main className="main">
                <div className="main__inner">
                    {items.map((item, i) => 
                        <ShopItem key={i} data={item}/>
                    )}
                </div>
            </main>
        </>
    );
}

export default Main;