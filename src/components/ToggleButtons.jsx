import './ToggleButtons.css'
import { useWindowWidth } from '../customHooks/useWindowWidth';
import { useEffect } from 'react';

export function ToggleButtons({ currentButton, setCurrentButton, timerStarted, setTimerStarted }) {

    const toggleButtons = (button) => {
        setCurrentButton(button);
        setTimerStarted(false);
    }

    const width = useWindowWidth()

    useEffect(() => {
        console.log('width!', width)
    }, [width])

    return (
        <div className={ width < 500 ? "buttons-container-small" : "buttons-container"}>
            <button className={`btn ${currentButton === 'pomodoro' ? 'chosen-btn' : ''}`} onClick={() => toggleButtons('pomodoro')}>pomodoro</button>
            <button className={`btn ${currentButton === 'short-pause' ? 'chosen-btn' : ''}`} onClick={() => toggleButtons('short-pause')}>short break</button>
            <button className={`btn ${currentButton === 'long-pause' ? 'chosen-btn' : ''}`} onClick={() => toggleButtons('long-pause')}>long break</button>
        </div>
    )
}