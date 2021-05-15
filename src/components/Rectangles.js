
import {Rectangle} from "./Rectangle"

export const Rectangles = ({rectList}) => {
    return (
        <div className="grid-box">
            {
                rectList.length > 0 ?
                rectList.map((rect) => (
                    <Rectangle rect={rect}/>
                    )) : 'No Data :('
            }
        </div>
    )
}

export default Rectangles;