/* eslint-disable prettier/prettier */
import SearchIcon from '../../../assets/inputIcons/searchIcon.svg'
import styles from './Input.module.css'

const Input = ({
  variant,
  label,
  placeholder,
  type,
  value,
  onChange,
  inputType,
}) => {
  return (
    <div>
      {inputType === 'textarea' ? (
        <textarea className={variant === 'question' && styles.question || variant === 'correct' && styles.correct}/>
      ) : (
        <input
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          type={type}
          className={
            (variant === 'search' && styles.searchInput) ||
            (variant === 'login' && styles.loginInput) ||
            (variant === 'test' && styles.testInput) ||
            (variant === 'variantInput' && styles.variantInput)
          }
          required
        />
      )}

      {variant === 'search' && (
        <img className={styles.searchIcon} src={SearchIcon} alt='error' />
      )}
      <label>{label}</label>
    </div>
  )
}

export default Input
