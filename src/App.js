import { ENV } from './env_mock';

import { useState, useEffect } from 'react'

import Header from './components/Header'
import Rectangles from './components/Rectangles'
import SmallTargetAnalytics from './components/SmallTargetAnalytics'

function App() {
  const [rectangles, setRectangles] = useState([])

  const [selectedRectIDs, setSelected] = useState([])

  // Toggle Reminder
  const  toggleRectangle = async (id) => {

    if(selectedRectIDs.includes(id)){
      setSelected(selectedRectIDs.filter((currId) => currId != id))

    } else {
      setSelected([...selectedRectIDs, id])
    }


  }

  useEffect(() => {
    const getTasks = async () => {
      const rectanglesFromServer = await fetchRectangles()
      setRectangles(rectanglesFromServer)
    }

    getTasks()
  }, [])

  const fetchRectangles = async () => {
    const res = await fetch(ENV.SERVER_URL + ENV.RECTANGLE_LIST_PATH)
    const data = await res.json()
    return data;
  }

  return (
    <div className="container">
      <Header/>
      {
        rectangles && <SmallTargetAnalytics selectedSmall rectList={rectangles} selectedRectIDs={selectedRectIDs}/>
      }
      <Rectangles rectList={rectangles} selectedRectIDs={selectedRectIDs} onToggle={toggleRectangle} />
    </div>
  );
}

export default App;
