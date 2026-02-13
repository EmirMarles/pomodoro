import './CircularProgress.css'

export function CircularProgress({ percentage }) {

    const WIDTH = 255
    const STROKE_WIDTH = 9

    const radius = (WIDTH - STROKE_WIDTH) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <svg width={WIDTH} height={WIDTH} viewBox={`0 0 ${WIDTH} ${WIDTH}`}>
            <circle
                className='progress-track'
                cx={WIDTH / 2}
                cy={WIDTH / 2}
                r={radius}
                strokeWidth={STROKE_WIDTH}
                fill='transparent'
            />

            <circle
                className='progress-indicator'
                cx={WIDTH / 2}
                cy={WIDTH / 2}
                r={radius}
                strokeWidth={STROKE_WIDTH}
                fill='transparent'
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap='round'
            />
        </svg>
    )
}