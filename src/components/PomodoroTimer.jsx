import './PomodoroTimer.css'
import { useState, useEffect } from 'react'
import { formatTime } from '../utils/formatTime'
import { CircularProgress } from './CircularProgress'
import { calculatePercentage } from '../utils/percentageCalucation'

export function PomodoroTimer({ timerStarted, setTimerStarted, currentButton, initialSeconds }) {

    // ASSIGNS THE STATE ON FIRT RENDER //

    // STATE INSIDE COMPONENTS IS BEING ASSINGED ONCE PER MOUNT UNLESS 
    // EXPLICITLY DECLARED

    const [timeLeft, setTimeLeft] = useState(initialSeconds)

    useEffect(() => {
        if (!timerStarted) return
        if (timeLeft <= 0) {
            console.log('timer started:', timerStarted)
            console.log('time left', timeLeft)
            setTimerStarted(false)
            return
        }

        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1)
        }, 1000)

        return () => clearInterval(intervalId)
    }, [timerStarted, timeLeft, setTimerStarted])

    useEffect(() => {
        setTimeLeft(initialSeconds)
    }, [initialSeconds])

    const handleToggleTimer = () => {
        if (timeLeft === 0) {
            setTimeLeft(initialSeconds)
        }
        setTimerStarted(!timerStarted)
    }

    return (
        <div className="pomodoro-timer" onClick={handleToggleTimer}>
            <div className="inner-circle">
                <div className="timer">
                    <h1 className='time'>{formatTime(timeLeft)}</h1>
                    {timerStarted
                        ? <p className='pause'>pause</p>
                        : <p className='pause'>
                            {timeLeft === 0
                                ? <span>restart</span>
                                : <span>start</span>
                            }
                        </p>
                    }
                </div>
            </div>
            <div className="progress-svg">
                <CircularProgress percentage={calculatePercentage(timeLeft, initialSeconds)}>

                </CircularProgress>
            </div>
        </div>
    )
}