import closeIcon from '../../../assets/headerIcons/closeIcon.svg'
import styles from './Header.module.css'

const Side = ({ onClose, children }) => {
  return (
    <>
      <div className={styles.backdrop} />
      <div className={styles.side}>
        <img
          className={styles.closeSide}
          onClick={onClose}
          src={closeIcon}
          alt='none'
        />
        <nav className={styles.sideNav}>{children}</nav>
      </div>
    </>
  )
}

export default Side
