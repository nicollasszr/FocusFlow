import { Navigate, Route, Routes } from "react-router-dom"
import Header from "./Pages/TimerPage/Components/Header"
import TimerPage from "./Pages/TimerPage/TimerPage"
import SettingsPage from "./Pages/SettingsPage"
import MySpacePage from "./Pages/MySpacePage"
import CardContextProvider from "./Pages/TimerPage/Contexts/CardContext"
import TimeContextProvider from "./Pages/TimerPage/Contexts/TimeContext"

function App() {


  return (
    <>
      <Header/>

      <CardContextProvider>
        <TimeContextProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/timer" />} />
            <Route path="/timer" element={<TimerPage/>}/>
            <Route path="/settings" element={<SettingsPage/>}/>
            <Route path="/my-space" element={<MySpacePage/>}/>
          </Routes>
        </TimeContextProvider>
      </CardContextProvider>
    </>
  )
}

export default App
