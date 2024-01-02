/* eslint-disable react/no-array-index-key */
import { useState, useRef, useEffect } from 'react'
import errorIcon from '../../../assets/inputIcons/errorIcon.svg'
import SearchIcon from '../../../assets/inputIcons/searchIcon.svg'
import successIcon from '../../../assets/inputIcons/successIcon.svg'
import styles from './Input.module.css'

const Input = ({
  variant,
  label,
  placeholder,
  type,
  value,
  onChange,
  inputType,
  validated,
  onBlur,
}) => {
  const codeRef = useRef()
  const [code, setCode] = useState(new Array(6).fill(''))
  const [codeIndex, setCodeIndex] = useState(0)
  const codeHandler = (e, i) => {
    const { value } = e.target
    const fullCode = [...code]
    fullCode[i] = value?.substring(value.length - 1)
    if (!value) {
      setCodeIndex(i - 1)
    } else {
      setCodeIndex(i + 1)
    }
    setCode(fullCode)
    if (onChange) {
      onChange(fullCode)
    }
  }
  useEffect(() => {
    codeRef.current?.focus()
  }, [codeIndex])
  return (
    <div>
      {inputType === 'textarea' && (
        <textarea
          className={
            (variant === 'question' && styles.question) ||
            (variant === 'correct' && styles.correct)
          }
        />
      )}
      {inputType !== 'code' ? (
        <div className={styles.inputBlock}>
          {variant === 'search' && (
            <img className={styles.searchIcon} src={SearchIcon} alt='error' />
          )}
          {variant === 'login' && validated && (
            <img
              className={styles.validateIcon}
              src={successIcon}
              alt='error'
            />
          )}
          {variant === 'login' && validated === false && (
            <img className={styles.validateIcon} src={errorIcon} alt='error' />
          )}
          <input
            name='input'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            type={type}
            className={
              (variant === 'search' && styles.searchInput) ||
              (variant === 'login' && styles.loginInput) ||
              (variant === 'test' && styles.testInput) ||
              (variant === 'variantInput' && styles.variantInput) ||
              (variant === 'correctCheckbox' && styles.correctCheckbox)
            }
            style={{
              color: variant === 'login' && validated === false && 'red',
            }}
            required
          />
          {label && <label htmlFor='input'>{label}</label>}
        </div>
      ) : (
        <div className={styles.codeInputs}>
          {code.map((_, i) => (
            <input
              key={i}
              className={styles.codeInput}
              onChange={(e) => {
                codeHandler(e, i)
              }}
              value={code[i]}
              ref={codeIndex === i ? codeRef : null}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Input
