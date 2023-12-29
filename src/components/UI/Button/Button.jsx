import styles from './Button.module.css'

const Button = ({ variant, children, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className={
          (variant === 'login' && styles.button) ||
          (variant === 'students' && styles.buttonStudents) ||
          (variant === 'teacher' && styles.teacher) ||
          (variant === 'back' && styles.backBtn) ||
          (variant === 'headerButton' && styles.headerButton) ||
          (variant === 'submit' && styles.submit) ||
          (variant === 'testCheck' && styles.testCheck) ||
          (variant === 'testGreen' && styles.testGreen) ||
          (variant === 'type' && styles.type) ||
          (variant === 'arrow' && styles.arrow) ||
          (variant === 'testBlack' && styles.testBlack) ||
          (variant === 'check' && styles.check) ||
          (variant === 'createTest' && styles.createTest) ||
          (variant === 'choose' && styles.chooseBtn) ||
          (variant === 'otkaz' && styles.otkaz) ||
          (variant === 'agree' && styles.agree) ||
          (variant === 'finishHome' && styles.finishHome) ||
          (variant === 'blockBtn' && styles.blockBtn)
        }
      >
        {children}
      </button>
    </div>
  )
}

export default Button
