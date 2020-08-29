import React from 'react';

const Description = (props) => {
    const {
        availability, 
        subtitle, 
        description, 
        selected, 
        handleSelected
    } = props;
    return (
        <>
            <div className="shop-item__description description">
                {(availability) 
                ? <p className="description__dezenable text">
                    Печалька, {subtitle} закончился
                </p> 
                : (selected)
                    ? <p className="description__selected text">
                        {description}
                    </p> 
                    : <p className="description__default text">
                        Чего сидишь? Порадуй котэ, 
                        <span className="description__buy" onClick={handleSelected}>
                            купи.
                        </span>
                    </p>
                }
            </div>
        </>
    )
}

export default Description;