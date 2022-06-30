import { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  id?: string
  color?: 'white' | 'black'
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({ label, id, color = 'white', onCheck }: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const onChangeHandler = async () => {
    setChecked((prevChecked) => !prevChecked)
    !!onCheck && onCheck(!checked)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={id}
        type="checkbox"
        onChange={onChangeHandler}
        checked={checked}
      />
      {label && (
        <S.Label htmlFor={id} color={color}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}

export default Checkbox
