import { ENV } from './env_mock';

import { useState, useEffect } from 'react'

import Header from './components/Header'
import Rectangles from './components/Rectangles'

function App() {
  const [rectangles, setRectangles] = useState([])

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
      <Rectangles rectList={rectangles} />
    </div>
  );
}

export default App;
