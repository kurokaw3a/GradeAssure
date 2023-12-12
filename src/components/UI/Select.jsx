/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from '@mui/material'
import arrowIcon from '../../assets/selectIcons/arrowIcon.png'

const iconComponent = (rotate) => {
  return (
    <img
      style={{
        width: '25px',
        height: '25px',
        rotate: '-90deg',
        position: 'absolute',
        left: '100',
        right: '0',
        pointerEvents: 'none',
        userSelect: 'none',
      }}
      src={arrowIcon}
      alt='error'
    />
  )
}

const UiSelect = () => {
  const [role, setRole] = useState('')
  const selectRole = (event) => {
    setRole(event.target.value)
  }
  console.log(role)
  return (
    <StyledFormControl variant='standard'>
      <StyledInputLabel htmlFor='select-styled'>Role</StyledInputLabel>
      <StyledSelect
        value={role}
        onChange={selectRole}
        id='select-styled'
        IconComponent={iconComponent}
      >
        <MenuItem value='Student'>Student</MenuItem>
        <MenuItem value='Admin'>Admin</MenuItem>
        <MenuItem value='SchoolAdmin'>School Admin</MenuItem>
        <MenuItem value='Teacher'>Teacher</MenuItem>
      </StyledSelect>
    </StyledFormControl>
  )
}

export default UiSelect

const StyledFormControl = styled(FormControl)`
  width: 411px;
  @media (max-width: 450px) {
    width: 290px;
  }
`

const StyledInputLabel = styled(InputLabel)`
  font-size: 20px;
  font-family: Inter, sans-serif;
`
const StyledSelect = styled(Select)`
  font-family: Inter, sans-serif;
  font-size: 23px;
  text-align: left;
  color: rgba(112, 161, 255, 1);
`
