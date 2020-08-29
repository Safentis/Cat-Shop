import React, {useState, useEffect} from 'react';
import './ShopItem.scss';

import Description from './Description/Description';

const ShopItem = (props) => {
    const { data } = props;
    const [selected, setSelected] = useState(false);
    const [hover, setHover] = useState({
        enter: false,
        leave: false,
    });
    const cleareHover = (boolEnter = false, boolLeave = false) => {
        const obj = {...hover};
        
        if (obj.enter && obj.leave) {
            obj.enter = boolEnter;
            obj.leave = boolLeave;
            setHover(obj);
        }
    }
    const handleSelected = (e) => {
        const textTarget = e.target.classList.contains('text');
        const dezenableItem = 
        ~!e.currentTarget.className.indexOf('shop-item_dezenable');

        if (textTarget) return;
        if (dezenableItem) {
            setSelected(!selected);
            cleareHover();
        }
    }
    const handleMouseEnter = (e) => {
        const textTarget = e.target.classList.contains('text');

        if (textTarget) return;
        if (selected) {
            const obj = {...hover};
            obj.enter = true;
            setHover(obj);
        }
    }
    const handleMouseLeave = (e) => {
        if (selected) {
            const obj = {...hover};
            obj.leave = true;
            setHover(obj);
            cleareHover(false, true);
        }
    }

    // images
    const images = (data.availability) 
    ? "center / cover no-repeat url('images/dezenable-back.png')" 
    : (selected)
        ? "center / cover no-repeat url('images/selected-back.png')" 
        : "center / cover no-repeat url('images/default-back.png')";

    // section
    const section = (data.availability) 
    ? "shop-item_dezenable" 
    : (selected)
        ? "shop-item_selected" 
        : "shop-item_default";
    
    // weight
    const weight = (data.availability) 
    ? "dezenable-weight" 
    : (selected)
        ? "selected-weight" 
        : "default-weight";
    
    // tagline
    const tagline = (selected) 
    ? (hover.enter) 
        ? <p className="shop-item__tagline_selected">Котэ не одобряет?</p> 
        : <p className="shop-item__tagline">{data.tagline}</p>
            : <p className="shop-item__tagline">{data.tagline}</p>
    return (
        <>
            <section className={`shop-item  ${section}`}
                style={{background: images}} 
                onClick={handleSelected} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="shop-item__inner">
                    {tagline}
                    <hgroup className="shop-item__hgroup">
                        <h3 className="shop-item__title">
                            {data.title}
                        </h3>
                        <h4 className="shop-item__subtitle">
                            {data.subtitle}
                        </h4>
                    </hgroup>
                    <ul className="shop-item__list">
                        {data.contents.map((value, i) => 
                            <li className="shop-item__data" key={i}>
                                {value}
                            </li>
                        )}
                    </ul>
                    <p className={`shop-item__weight ${weight}`}>
                        <span className="float">{data.width}</span>
                        <span className="weight">кг</span>
                    </p>
                    <img className="shop-item__image" 
                        src="./images/cat.png" 
                        alt="kitty"
                    />
                    <Description 
                        availability={data.availability}
                        subtitle={data.subtitle}
                        description={data.description}
                        selected={selected}
                        handleSelected={handleSelected}
                    />
                </div>
            </section>
        </>
    )
}

export default ShopItem;