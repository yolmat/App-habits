import { Habit } from "./components/habit"

function App() {
  return (
    <div>
      <Habit completed={3}/>
      <Habit completed={7}/>
      <Habit completed={5}/>
      <Habit completed={2}/>
    </div>
  )
}

export default App
