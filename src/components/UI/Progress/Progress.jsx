import styles from './Progress.module.css'

const Progress = ({ percent }) => {
  return (
    <div className={styles.progress}>
      <div
        className={styles.bar}
        style={{
          background: `conic-gradient(rgba(0, 255, 56, 1) ${
            percent.toFixed() * 3.6
          }deg, gray 0deg)`,
        }}
      >
        <h1 className={styles.percent}>{percent.toFixed()}%</h1>
      </div>
    </div>
  )
}

export default Progress
