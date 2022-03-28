import './App.css'
import MyLineChart from './components/MyLineChart/MyLineChart'
import { useSpring, animated } from 'react-spring'
import { useState } from 'react'
import SpecialChart from './components/SpecialChart/SpecialChart'

function App() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  })

  return (

    <div className="App">
      < animated.div style={props} > I will fade in</ animated.div>
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
    </div>
  )
}

export default App
