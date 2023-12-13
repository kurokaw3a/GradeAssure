import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from '@mui/material'
import arrowIcon from '../../../assets/selectIcons/arrowIcon.png'
import styles from './Select.module.css'

const iconComponent = () => {
  return <img className={styles.arrowIcon} src={arrowIcon} alt='error' />
}

const UiSelect = ({ variant, value, onChange, options, placeholder }) => {
  return variant === 'role' ? (
    <StyledFormControl variant='standard' size='small'>
      <StyledInputLabel htmlFor='select-styled'>Role</StyledInputLabel>
      <StyledSelect
        value={value}
        onChange={onChange}
        IconComponent={iconComponent}
        id='select-styled'
      >
        {options?.map((el) => (
          <StyledMenuItem value={el}>{el}</StyledMenuItem>
        ))}
      </StyledSelect>
    </StyledFormControl>
  ) : (
    <select onChange={onChange} className={styles.select} value={value}>
      {placeholder && (
        <option className={styles.option} disabled selected>
          {placeholder}
        </option>
      )}
      {options?.map((el) => (
        <option className={styles.option} value={el}>
          {el}
        </option>
      ))}
    </select>
  )
}

export default UiSelect

const StyledFormControl = styled(FormControl)`
  width: 411px;
  border: none;
  @media (max-width: 450px) {
    width: 290px;
  }
`

const StyledInputLabel = styled(InputLabel)`
  font-size: 20px;
  font-family: Inter, sans-serif;
  color: rgba(0, 0, 0, 0.4);
  font-family: Inter;
  font-weight: 500;
`
const StyledSelect = styled(Select)`
  font-family: Inter, sans-serif;
  font-size: 20px;
  color: rgba(112, 161, 255, 1);
`
const StyledMenuItem = styled(MenuItem)`
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin: 5px;
  font-family: Inter, sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: rgba(112, 161, 255, 1);
`
