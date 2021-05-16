
import SmallTargetProgressBar from './SmallTargetProgressBar'
import { useState, useEffect } from 'react'
import {Button} from './Button'

//selectedRectIDs={selectedRectIDs}

export const SmallTargetAnalytics = ({rectList, selectedRectIDs, selectedSmallRectPercentageTarget}) => {
    const [showAnalytics, setShowAnalytics] =  useState(false)

    const selectedSmallRect = rectList.filter((rect) => rect.size === "small" && selectedRectIDs.includes(rect.id) ).length

    const toggleShowButton = (value) => {
        setShowAnalytics(!value)
    }

    const calcSelectedSmallRect = () => {


        let selectedSmallRectPercentage = (selectedSmallRect / selectedRectIDs.length) * 100

        return selectedSmallRectPercentage ? Math.floor(selectedSmallRectPercentage,0) : 0;
    }

    return (

        <div className="small-target-analytics">
            <div className="small-target-analytics-header">
                <h2>Small Target Analytics</h2>
                    <Button
                    text={showAnalytics ? 'Close' : 'Show'}
                    onClick={() => toggleShowButton(showAnalytics)}
                    color={showAnalytics? 'grey' : 'black'}
                    />
            </div>
            {
            showAnalytics &&
            <div className="small-target-analytics-body">
                <div className="small-target-analytics-body__box">
                    <h3><b>Actual:</b> {calcSelectedSmallRect()}%</h3>
                    <h3><b>Difference:</b> {Math.abs(selectedSmallRectPercentageTarget - calcSelectedSmallRect())}%</h3>
                </div>
                <h3>Percentage target to select small rectangles:</h3>
                <SmallTargetProgressBar percentage={selectedSmallRectPercentageTarget} />
                <br/>
                <h3>Percentage of selected small rectangles:</h3>
                <SmallTargetProgressBar percentage={calcSelectedSmallRect()} />
            </div>
            }
        </div>
    )
}

export default SmallTargetAnalytics;