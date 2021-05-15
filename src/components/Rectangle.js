import React from 'react'
import { useState } from 'react'

export const Rectangle = ({rect}) => {

    const [active, setActive] = useState(false)

    return (

        <div className={`grid-element ${active && 'grid-element--active'}`} onClick={() => setActive(!active)}>
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
