import { InputHTMLAttributes, useState, ChangeEvent } from 'react'
import * as S from './styles'

export type InputProps = {
  id?: string
  label?: string
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  hasError?: boolean
  error?: string
  onInput?: (value: string) => void
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({
  id,
  label,
  icon,
  onInput,
  iconPosition = 'left',
  disabled = false,
  hasError = false,
  error,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState('')

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setInputValue(value)
    !!onInput && onInput(value)
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
