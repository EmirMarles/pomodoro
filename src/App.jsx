import './App.css'
import { ToggleButtons } from './components/ToggleButtons'
import { PomodoroTimer } from './components/PomodoroTimer'
import { SettingsButton } from './components/SettingsButton'
import { useState, useEffect } from 'react'
import { SettingsWindow } from './components/SettingsWindow'
import pomodoroLogo from '../assets/logo.svg'

function App() {

  const [timerStarted, setTimerStarted] = useState(false)
  const [currentButton, setCurrentButton] = useState('pomodoro')
  const [initialSeconds, setInitialSeconds] = useState(1500)
  const [openSettings, setOpenSettings] = useState(false)
  const [pomodoroTimeSettings, setPomodoroTimeSettings] = useState(
    {
      main: 1500,
      short: 300,
      long: 600
    }
  )
  const [appSettings, setAppSettings] = useState(
    {
      color: 'rgb(248, 112, 112)',
      font: "'Space Mono', monospace"
    }
  )
  // effect to change initial time
  useEffect(() => {
    if (currentButton === 'pomodoro') {
      setInitialSeconds(pomodoroTimeSettings.main);
    }
    else if (currentButton === 'short-pause') {
      setInitialSeconds(pomodoroTimeSettings.short)
    }
    else {
      setInitialSeconds(pomodoroTimeSettings.long)
    }
  }, [currentButton, pomodoroTimeSettings])

  const toggleOpenSettings = () => {
    setOpenSettings(!openSettings)
  }

  // setting up the font

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--main-font",
      appSettings.font
    );

    document.documentElement.style.setProperty(
      "--app-color",
      appSettings.color
    );
  }, [appSettings]);

  return (
    <>
      <div className="main-app">
        <img src={pomodoroLogo} alt="pomodoro log" className='logo' />
        <ToggleButtons currentButton={currentButton} setCurrentButton={setCurrentButton} timerStarted={timerStarted} setTimerStarted={setTimerStarted}></ToggleButtons>
        <PomodoroTimer timerStarted={timerStarted} setTimerStarted={setTimerStarted} currentButton={currentButton} initialSeconds={initialSeconds}></PomodoroTimer>
        <SettingsButton openSettings={openSettings} setOpenSettings={setOpenSettings}></SettingsButton>
        {openSettings &&
          <SettingsWindow
            setOpenSettings={setOpenSettings}
            pomodoroTimeSettings={pomodoroTimeSettings}
            setPomodoroTimeSettings={setPomodoroTimeSettings}
            appSettings={appSettings}
            setAppSettings={setAppSettings}
          />
        }
      </div>
    </>
  )
}

export default App
