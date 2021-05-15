
import SmallTargetProgressBar from './SmallTargetProgressBar'
import { useState, useEffect } from 'react'
import {Button} from './Button'

export const SmallTargetAnalytics = ({rectList}) => {
    const [selectedSmallRectanglesPercentage, setSelectedSmallRectPercentage] = useState(0)
    const [showAnalytics, setShowAnalytics] =  useState(false)

    const toggleShowButton = (value) => {
        setShowAnalytics(!value)
    }
    const calcTotalSmallRectangles = () => {
        let totalSmallRect = rectList.filter((item) => item.size === "small").length;
        let totalSmallRectPercentage = (totalSmallRect/rectList.length) * 100;
        return Math.floor(totalSmallRectPercentage,0);
    }

    return (

        <div className="small-target-analytics">
            <div className="small-target-analytics-header">
                <h4>Small Target Analytics</h4>
                    <Button
                    text={showAnalytics ? 'Close' : 'Show'}
                    onClick={() => toggleShowButton(showAnalytics)}
                    color={showAnalytics? 'grey' : 'black'}
                    />
            </div>
            {
            showAnalytics &&
            <div className="small-target-analytics-body">
                <br/>
                <p>Percentage of small rectangles available:</p>
                <SmallTargetProgressBar percentage={calcTotalSmallRectangles()} />
                <br/>
                <p>Percentage of selected small rectangles:</p>
                <p>TBD</p>
            </div>
            }

        </div>
    )
}

export default SmallTargetAnalytics;