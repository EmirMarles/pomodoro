import './SettingsButton.css'
import iconSettings from '../../assets/icon-settings.svg'

export function SettingsButton({ openSettings, setOpenSettings }) {
    return (
        <div className='settings'>
            <img src={iconSettings} alt="setting icon" className='settings-btn' onClick={() => setOpenSettings(!openSettings)} />
        </div>
    )
}