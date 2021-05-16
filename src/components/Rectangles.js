import {Rectangle} from "./Rectangle"

export const Rectangles = ({rectList, onToggleRect, selectedRectIDs}) => {

    return (
        <div className="grid-box">
            {
                rectList.length > 0 ?
                rectList.map((rect) => (
                    <Rectangle key={rect.id} rect={rect} onToggle={onToggleRect} selected={selectedRectIDs.includes(rect.id)}  />
                    )) : 'No Data :('
            }
        </div>
    )
}

export default Rectangles;