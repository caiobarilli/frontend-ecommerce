import { InputHTMLAttributes, useState, ChangeEvent } from 'react'
import * as S from './styles'

export type InputProps = {
  id?: string
  name?: string
  label?: string
  initialValue?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  hasError?: boolean
  error?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onInputChange?: (event: any) => void
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({
  id,
  name,
  label,
  icon,
  onInputChange,
  initialValue = '',
  iconPosition = 'left',
  disabled = false,
  hasError = false,
  error,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState(initialValue)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setInputValue(value)
    !!onInputChange && onInputChange(value)
  }

  return (
    <S.Wrapper disabled={disabled} hasError={hasError}>
      {!!label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.InputWrapper>
        {!!icon && (
          <S.Icon htmlFor={id} iconPosition={iconPosition}>
            {icon}
          </S.Icon>
        )}
        <S.Input
          name={name}
          value={inputValue}
          onChange={onChangeHandler}
          iconPosition={iconPosition}
          disabled={disabled}
          {...(label ? { id: name } : {})}
          {...props}
        />
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Input
