import { useState } from 'react'
import actionsIcon from '../../../assets/headerIcons/actionsIcons.svg'
import burgerIcon from '../../../assets/headerIcons/burger.svg'
import closeIcon from '../../../assets/headerIcons/closeIcon.svg'
import Button from '../Button/Button'
import Input from '../Input/Input'
import styles from './Header.module.css'
import Side from './Side'

const Header = ({
  variant,
  blocked,
  selected,
  selectedCount,
  prefix,
  days,
  onDelete,
  onBlock,
  onUnblock,
  onRefuse,
  onClose,
  page,
}) => {
  const [showActions, setShowActions] = useState(false)
  const showActionsHandler = () => {
    setShowActions((prev) => !prev)
  }
  const [showSide, setShowSide] = useState(false)
  const showSideHandler = () => {
    setShowSide(true)
  }
  const hideSideHandler = () => {
    setShowSide(false)
  }
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {!selected && (
          <>
            <h1 className={styles.title}>Grade Assure</h1>
            {variant === 'menu' && prefix === 'admin' && (
              <div className={styles.menu}>
                <p>Users</p>
                <p>Request</p>
              </div>
            )}
            {variant === 'menu' && prefix === 'schoolAdmin' && (
              <div className={styles.menu}>
                <p>Users</p>
                <p>Reports</p>
                <p>Request</p>
              </div>
            )}
            {variant === 'menu' && prefix === 'teacher' && (
              <div className={styles.menu}>
                <p>My tests</p>
                <p>Test check</p>
                <p>Creating a test</p>
              </div>
            )}
            {variant === 'menu' && prefix === 'student' && (
              <div className={styles.menu}>
                <p>Test result</p>
                <p>Take the test</p>
              </div>
            )}
            {variant === 'search' && (
              <div className={styles.search}>
                <Input placeholder='Search users' variant='search' />
                {blocked && !prefix && (
                  <h3 className={styles.blockedText}>Blocked</h3>
                )}
                {(prefix === 'teacher' && !blocked && days) ||
                (prefix === 'student' && !blocked && days) ? (
                  <h3 className={styles.timeText}>{days} days left</h3>
                ) : (
                  ''
                )}
              </div>
            )}
            {variant !== 'search' && variant && (
              <img
                onClick={showSideHandler}
                className={styles.burger}
                src={burgerIcon}
                alt='none'
              />
            )}
            {prefix === 'teacher' &&
              variant !== 'search' &&
              variant !== 'menu' && (
                <div className={styles.teacherButton}>
                  <Button variant='headerButton'>Send report</Button>
                </div>
              )}
          </>
        )}
        {selected && (
          <>
            <div className={styles.selected}>
              <img
                onClick={onClose}
                className={styles.closeIcon}
                src={closeIcon}
                alt='none'
              />
              <p>Selected: {selectedCount}</p>
              {prefix === 'teacher' && (
                <p className={styles.maximumQuantity}>maximum quantity 5</p>
              )}
            </div>
            {prefix === 'teacher' ? (
              <div className={styles.teacherButton}>
                <Button variant='headerButton'>Choose</Button>
              </div>
            ) : (
              <img
                className={styles.actionsIcon}
                src={actionsIcon}
                alt='none'
                onClick={showActionsHandler}
              />
            )}
            {showActions && (
              <div className={styles.actions}>
                {(page !== 'requests' && page !== 'blockedRequests' && (
                  <p onClick={onDelete} className={styles.action}>
                    Delete
                  </p>
                )) ||
                  (page === 'requests' && (
                    <p onClick={onRefuse} className={styles.action}>
                      Refuse
                    </p>
                  )) ||
                  (page === 'blockedRequests' && (
                    <p onClick={onUnblock} className={styles.action}>
                      Unblock
                    </p>
                  ))}
                <p onClick={onBlock} className={styles.action}>
                  Block
                </p>
              </div>
            )}
          </>
        )}
      </nav>
      {showSide && (
        <Side onClose={hideSideHandler}>
          {variant === 'menu' && prefix === 'admin' && (
            <>
              <p>Users</p>
              <p>Request</p>
            </>
          )}
          {variant === 'menu' && prefix === 'schoolAdmin' && (
            <>
              <p>Users</p>
              <p>Reports</p>
              <p>Request</p>
            </>
          )}
          {variant === 'menu' && prefix === 'teacher' && (
            <>
              <p>My tests</p>
              <p>Test check</p>
              <p>Creating a test</p>
            </>
          )}
          {variant === 'menu' && prefix === 'student' && (
            <>
              <p>Test result</p>
              <p>Take the test</p>
            </>
          )}
        </Side>
      )}
    </header>
  )
}

export default Header
