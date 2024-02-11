/* eslint-disable no-plusplus */
import { useEffect, useRef, useState } from 'react'
import playerStopIcon from '../../../assets/recorderIcons/playerPauseIcon.png'
import playerRecordIcon from '../../../assets/recorderIcons/playerRecordIcon.svg'
import styles from './Recorder.module.css'

const Player = ({ mediaBlobUrl }) => {
  const audioRef = useRef(new Audio(mediaBlobUrl))
  const intervalRef = useRef()
  const [isPlaying, setIsPlaying] = useState(null)
  const [trackProgress, setTrackProgress] = useState(0)
  useEffect(() => {
    audioRef.current.src = mediaBlobUrl
  }, [mediaBlobUrl])
  const songHandler = () => {
    setIsPlaying((prev) => !prev)
  }
  const startTimer = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        setIsPlaying(false)
        setTrackProgress(0)
      } else {
        setTrackProgress(audioRef.current.currentTime.toFixed())
      }
    }, 1000)
  }
  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play()
      audioRef.current.currentTime = trackProgress
      startTimer()
    } else {
      clearInterval(intervalRef.current)
      audioRef.current.pause()
    }
  }, [isPlaying])

  const progressHandler = (event) => {
    audioRef.current.currentTime = event.target.value
    setTrackProgress(event.target.value)
  }
  return (
    <div className={styles.player}>
      <img
        className={styles.recorder}
        onClick={songHandler}
        src={isPlaying ? playerStopIcon : playerRecordIcon}
        alt='error'
      />
      <input
        onChange={progressHandler}
        className={styles.range}
        value={trackProgress}
        max={Math.floor(audioRef.current.duration)}
        type='range'
      />
      <p>{`0:${trackProgress < 10 ? 0 : ''}${trackProgress}` || '0:00'}</p>
    </div>
  )
}

export default Player
