import { useState } from 'react'
import actionsIcon from '../../../assets/actionsIcons/actionsIcon.svg'
import styles from './Actions.module.css'

const Actions = ({
  variant,
  page,
  onDelete,
  onRefuse,
  onUnblock,
  onBlock,
  onLock,
  onAllow,
  onUpdate,
  onLook,
  onDownload,
}) => {
  const [showActions, setShowActions] = useState(false)
  const showActionsHandler = () => {
    setShowActions((prev) => !prev)
  }
  return (
    <div>
      {showActions && variant === 'header' && (
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
      {showActions && variant === 'admin' && (
        <div className={styles.actions}>
          {(page !== 'requests' && page !== 'blockedRequests' && (
            <>
              <p onClick={onLock} className={styles.action}>
                Lock
              </p>
              <p onClick={onDelete} className={styles.action}>
                Delete
              </p>
            </>
          )) ||
            (page === 'requests' && (
              <>
                <p onClick={onAllow} className={styles.action}>
                  Allow
                </p>
                <p onClick={onRefuse} className={styles.action}>
                  Refuse
                </p>
              </>
            )) ||
            (page === 'blockedRequests' && (
              <p onClick={onUnblock} className={styles.action}>
                Unblock
              </p>
            ))}
          {page !== 'blockedRequests' ? (
            <p onClick={onBlock} className={styles.action}>
              Block
            </p>
          ) : (
            <p onClick={onDelete} className={styles.action}>
              Delete
            </p>
          )}
        </div>
      )}
      {showActions && variant === 'schoolAdmin' && (
        <div className={styles.actions}>
          {(page !== 'requests' &&
            page !== 'blockedRequests' &&
            page !== 'reports' && (
              <>
                <p onClick={onLock} className={styles.action}>
                  Lock
                </p>
                <p onClick={onDelete} className={styles.action}>
                  Delete
                </p>
                <p onClick={onUpdate} className={styles.action}>
                  Update Role
                </p>
              </>
            )) ||
            (page === 'requests' && (
              <>
                <p onClick={onAllow} className={styles.action}>
                  Allow
                </p>
                <p onClick={onRefuse} className={styles.action}>
                  Refuse
                </p>
              </>
            )) ||
            (page === 'reports' && (
              <>
                <p onClick={onLook} className={styles.action}>
                  Look
                </p>
                <p onClick={onDelete} className={styles.action}>
                  Delete
                </p>
              </>
            )) ||
            (page === 'blockedRequests' && (
              <>
                <p onClick={onUnblock} className={styles.action}>
                  Unblock
                </p>
                <p onClick={onDelete} className={styles.action}>
                  Delete
                </p>
              </>
            ))}
          {page === 'reports' ? (
            <p onClick={onDownload} className={styles.action}>
              Download pdf
            </p>
          ) : (
            page !== 'blockedRequests' && (
              <p onClick={onBlock} className={styles.action}>
                Block
              </p>
            )
          )}
        </div>
      )}
      {showActions && variant === 'teacher' && (
        <div className={styles.actions}>
          <p onClick={onLook} className={styles.action}>
            Look
          </p>
        </div>
      )}
      <img
        onClick={showActionsHandler}
        className={
          (variant === 'header' && styles.headerActionsIcon) ||
          styles.actionsIcon
        }
        src={actionsIcon}
        alt='error'
      />
      {showActions && (
        <div className={styles.backdrop} onClickCapture={showActionsHandler} />
      )}
    </div>
  )
}

export default Actions
