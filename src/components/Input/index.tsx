import { InputHTMLAttributes, useState, ChangeEvent } from 'react'
import * as S from './styles'

export type InputProps = {
  id?: string
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
          id={id}
          value={inputValue}
          onChange={onChangeHandler}
          iconPosition={iconPosition}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      {hasError && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Input
