import actionsIcon from '../../../assets/headerIcons/actionsIcons.svg'
import burgerIcon from '../../../assets/headerIcons/burger.svg'
import closeIcon from '../../../assets/headerIcons/closeIcon.svg'
import Input from '../Input/Input'
import styles from './Header.module.css'

const Header = ({
  variant,
  blocked,
  selected,
  selectedCount,
  selectVariant,
}) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {!selected && (
          <>
            <h1 className={styles.title}>Grade Assure</h1>
            {variant === 'menu' && (
              <div className={styles.menu}>
                <p>Users</p>
                <p>Request</p>
              </div>
            )}
            {variant === 'search' && (
              <div className={styles.search}>
                <Input placeholder='Search users' variant='search' />
                {blocked && <h3 className={styles.blockedText}>Blocked</h3>}
              </div>
            )}
            {variant !== 'search' && variant && (
              <img className={styles.burger} src={burgerIcon} alt='none' />
            )}
          </>
        )}
        {selected && (
          <>
            <div className={styles.selected}>
              <img className={styles.closeIcon} src={closeIcon} alt='none' />
              <p>Selected: {selectedCount}</p>
            </div>
            {selectVariant === 'teacher' ? (
              <div />
            ) : (
              <img
                className={styles.actionsIcon}
                src={actionsIcon}
                alt='none'
              />
            )}
          </>
        )}
      </nav>
    </header>
  )
}

export default Header
