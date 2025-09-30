import { Navigate, Route, Routes } from "react-router-dom"
import Header from "./Pages/TimerPage/Components/Header"
import TimerPage from "./Pages/TimerPage/TimerPage"
import SettingsPage from "./Pages/SettingsPage/SettingsPage.tsx"
import MySpacePage from "./Pages/MySpacePage"
import CardContextProvider from "./Pages/TimerPage/Contexts/CardContext"
import TimeContextProvider from "./Pages/TimerPage/Contexts/TimeContext"
import PomodoroContextProvider from "./Pages/SettingsPage/Contexts/PomodoroContext.tsx"

function App() {


  return (
    <>
      <Header/>

      <CardContextProvider>
        <TimeContextProvider>
          <PomodoroContextProvider>
            <Routes>
              <Route path="/" element={<Navigate to="/timer" />} />
              <Route path="/timer" element={<TimerPage/>}/>
              <Route path="/settings" element={<SettingsPage/>}/>
              <Route path="/my-space" element={<MySpacePage/>}/>
            </Routes>
          </PomodoroContextProvider>
        </TimeContextProvider>
      </CardContextProvider>
    </>
  )
}

export default App
