import React, {useState} from 'react';

const Tour = ({place, removeTour}) => {
    const { id, name, info, image, price } = place;
    const shortPara = info.split(" ").slice(0, 50);
    const strings = "".concat(shortPara).replaceAll(",", " ");
    const [show, noShow] = useState(true);
    

    const readMore = () => {
        noShow(() => {
            return (show === true) ? false : true  
        });

    }


    return (
        <article className='single-tour'>
            <img src={image} alt={name} />
            <footer>
                <div className='tour-info'>
                    <h4>{ name }</h4>
                    <h4 className='tour-price'>${ price}</h4>
                </div>
                <p>
                    {(show === true) ? strings : info}
                    <button onClick={readMore}>{show ? "read more" : "read less"}</button>    
                </p>
            <button onClick={()=>removeTour(id)}>not interested</button>
            </footer>
        </article>
    )
};

export default Tour;