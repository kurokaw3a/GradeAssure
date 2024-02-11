import { useReactMediaRecorder } from 'react-media-recorder'
import pauseIcon from '../../../assets/recorderIcons/pauseIcon.png'
import recordIcon from '../../../assets/recorderIcons/recordIcon.svg'
import Player from './Player'
import styles from './Recorder.module.css'

const Recorder = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ audio: true })
  const stop = () => {
    setTimeout(() => {
      stopRecording()
    }, 1000)
  }
  // const handleSave = async () => {
  //   const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob())
  //   const audioFile = new File([audioBlob], 'audio.wav', { type: 'audio/wav' })
  //   const formData = new FormData()
  //   formData.append('file', audioFile)
  // }
  return (
    <div className={styles.container}>
      <img
        className={styles.recorder}
        src={status === 'recording' ? pauseIcon : recordIcon}
        onClick={status === 'recording' ? stop : startRecording}
        alt='error'
      />
      {mediaBlobUrl && <Player mediaBlobUrl={mediaBlobUrl} />}
    </div>
  )
}

export default Recorder
