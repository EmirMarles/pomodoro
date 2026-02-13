import './SettingsWindow.css'
import iconClose from '../../assets/icon-close.svg'
import iconDown from '../../assets/icon-arrow-down.svg'
import iconUp from '../../assets/icon-arrow-up.svg'
import { formatTimeMinutes } from '../utils/formatTime.js'

export function SettingsWindow({ setOpenSettings, pomodoroTimeSettings, setPomodoroTimeSettings, appSettings, setAppSettings }) {

    const handleCloseSettings = () => {
        setOpenSettings(false)
    }

    const handleAddTime = (whatToChange, action) => {

        let mainObj = { ...pomodoroTimeSettings }

        if (whatToChange === 'pomodoro') {
            let time = pomodoroTimeSettings.main
            if (action === '-') {
                if (time <= 300) {
                    return
                }
                time = time - 300
            }
            else {
                console.log('adding time ')
                time = time + 300
            }
            mainObj.main = time
            setPomodoroTimeSettings(mainObj)
        } else if (whatToChange === 'short-break') {
            let time = pomodoroTimeSettings.short
            if (action === '-') {
                if (time <= 300) {
                    return
                }
                time = time - 300
            }
            else {
                time = time + 300
            }
            mainObj.short = time
            setPomodoroTimeSettings(mainObj)
        } else {
            let time = pomodoroTimeSettings.long
            if (action === '-') {
                if (time <= 300) {
                    return
                }
                time = time - 300
            }
            else {
                time = time + 300
            }
            mainObj.long = time
            setPomodoroTimeSettings(mainObj)
        }
    }

    const handleChangeFont = (font) => {
        setAppSettings(prev => ({
            ...prev,
            font
        }))
    }

    const handleChangeColor = (color) => {
        setAppSettings(prev => ({
            ...prev,
            color
        }))
    }

    return (
        <div className="settings-window">
            <div className="settings-header">
                <h1>Settings</h1>
                <img src={iconClose} alt="close" onClick={handleCloseSettings} />
            </div>

            <div className="time-settings">
                <h4>Time (Minutes)</h4>
                <div className="time-toggle-container">
                    <div className="pomodoro">
                        <p className='header-pomodoro'>pomodoro</p>
                        <div className="time-choosing">
                            <p>{formatTimeMinutes(pomodoroTimeSettings.main)}</p>
                            <div className="up-down">
                                <img src={iconUp} alt="icon up" onClick={() => handleAddTime('pomodoro', '+')} />
                                <img src={iconDown} alt="icon down" onClick={() => handleAddTime('pomodoro', '-')} />
                            </div>
                        </div>
                    </div>
                    <div className="pomodoro">
                        <p className='header-pomodoro'>short break</p>
                        <div className="time-choosing">
                            <p>{formatTimeMinutes(pomodoroTimeSettings.short)}</p>
                            <div className="up-down">
                                <img src={iconUp} alt="icon up" onClick={() => handleAddTime('short-break', '+')} />
                                <img src={iconDown} alt="icon down" onClick={() => handleAddTime('short-break', '-')} />
                            </div>
                        </div>
                    </div>
                    <div className="pomodoro">
                        <p className='header-pomodoro'>long break</p>
                        <div className="time-choosing">
                            <p>{formatTimeMinutes(pomodoroTimeSettings.long)}</p>
                            <div className="up-down">
                                <img src={iconUp} alt="icon up" onClick={() => handleAddTime('long-break', '+')} />
                                <img src={iconDown} alt="icon down" onClick={() => handleAddTime('long-break', '-')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="font-settings">
                <h4>FONT</h4>
                <div className="colors">
                    <div className={`font-choose ${appSettings.font === "'Kumbh Sans', sans-serif" ? "chosen" : ""}`} onClick={() => handleChangeFont("'Kumbh Sans', sans-serif")}>Aa</div>
                    <div className={`font-choose ${appSettings.font === "'Roboto Slab', sans-serif" ? "chosen" : ""}`} onClick={() => handleChangeFont("'Roboto Slab', sans-serif")}>Aa</div>
                    <div className={`font-choose ${appSettings.font === "'Space Mono', monospace" ? "chosen" : ""}`} onClick={() => handleChangeFont("'Space Mono', monospace")}>Aa</div>
                </div>
            </div>

            <div className="color-settings">
                <h4>COLOR</h4>
                <div className="colors">
                    <div className="red" onClick={() => handleChangeColor('rgb(248, 112, 112)')}>{appSettings.color === 'rgb(248, 112, 112)' ? '✓' : ''}</div>
                    <div className="blue" onClick={() => handleChangeColor('rgb(112, 243, 248)')}>{appSettings.color === 'rgb(112, 243, 248)' ? '✓' : ''}</div>
                    <div className="purple" onClick={() => handleChangeColor('rgb(216, 129, 248)')}>{appSettings.color === 'rgb(216, 129, 248)' ? '✓' : ''}</div>
                </div>
            </div>
        </div>
    )
}