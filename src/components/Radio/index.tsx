import * as S from './styles'
import { InputHTMLAttributes } from 'react'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  label?: string
  name?: string
  id?: string
  value?: RadioValue
  color?: 'white' | 'black'
  onCheck?: (value?: RadioValue) => void
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  label,
  name,
  id,
  value,
  color = 'white',
  onCheck
}: RadioProps) => {
  const onChangeHandler = () => {
    !!onCheck && onCheck(value)
  }

  return (
    <S.Wrapper>
      <S.Input
        id={id}
        name={name}
        type="radio"
        value={value}
        onChange={onChangeHandler}
      />
      <S.Label htmlFor={id} color={color}>
        {label}
      </S.Label>
    </S.Wrapper>
  )
}

export default Radio
