import React from 'react'
import { useState, useEffect } from 'react'

export const Rectangle = ({rect, onToggle, selected}) => {

    return (

        <div className={`grid-element ${selected && 'grid-element--active'}`} onClick={() => onToggle(rect.id)}>
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
