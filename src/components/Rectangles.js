

export const Rectangles = ({rectList, onToggle, selectedRectIDs}) => {

    return (
        <div className="grid-box">
            {
                rectList.length > 0 ?
                rectList.map((rect) => (
                    <Rectangle key={rect.id} rect={rect} onToggle={onToggle} selected={selectedRectIDs.includes(rect.id)}  />
                    )) : 'No Data :('
            }
        </div>
    )
}

export default Rectangles;