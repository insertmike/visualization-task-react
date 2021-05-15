import React from 'react'
import { useState, useEffect } from 'react'

export const Rectangle = ({rect}) => {

    const [active, setActive] = useState(localStorage.getItem(`rect-${rect.id}-active`) || false)

    const onActiveStatusChange = (active) => {
        setActive(active);
        if(!active){
            localStorage.removeItem(`rect-${rect.id}-active`);
            return;
        }
        localStorage.setItem(`rect-${rect.id}-active`, active);
        setActive(active);
    }


    return (

        <div className={`grid-element ${active && 'grid-element--active'}`} onClick={() => onActiveStatusChange(!active)}>
            <div
            style={{backgroundColor: rect.color}}
            className={`rect rect-${rect.size} `}>
                {
                    rect.dot &&
                    <div className='dot'>

                    </div>
                }
            </div>
        </div>

    )
}
