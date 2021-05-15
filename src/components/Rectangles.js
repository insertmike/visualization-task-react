
export const Rectangles = ({rectList}) => {
    return (
        <div className="grid-box">
            {
                rectList.length > 0 ?
                rectList.map((rect) => (
                    <div className="grid-element"> Rectangle :) </div>
                    )) : 'No Data :('
            }
        </div>
    )
}

export default Rectangles;