import React, { forwardRef } from 'react'

import { ComponentColor, ComponentSize, IComponentBaseProps } from '../types'

import Button, { ButtonProps, btnClassesFn } from '../Button'

export type DropdownToggleProps = Omit<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  'color'
> &
  IComponentBaseProps & {
    color?: ComponentColor
    size?: ComponentSize
    button?: boolean
    disabled?: boolean
  }

const DropdownToggle = ({
  children,
  color,
  size,
  button = true,
  dataTheme,
  className,
  disabled,
  ...props
}: DropdownToggleProps) => {
  return (
    <label tabIndex={0} className={className} {...props}>
      {button ? (
        <Button
          type="button"
          dataTheme={dataTheme}
          color={color}
          size={size}
          disabled={disabled}
        >
          {children}
        </Button>
      ) : (
        children
      )}
    </label>
  )
}
export type SummaryProps = ButtonProps<HTMLElement>
export const Summary = forwardRef<HTMLElement, SummaryProps>(
  (
    { children, style, dataTheme, startIcon, loading, endIcon, ...props },
    ref
  ): JSX.Element => {
    return (
      <summary
        {...props}
        ref={ref}
        data-theme={dataTheme}
        className={btnClassesFn({ ...props, startIcon, loading, endIcon })}
        style={style}
      >
        {startIcon && !loading && startIcon}
        {children}
        {endIcon && endIcon}
      </summary>
    )
  }
)

export default DropdownToggle
