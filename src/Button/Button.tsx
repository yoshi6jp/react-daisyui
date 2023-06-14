import React, { forwardRef, ReactNode } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentShape,
  ComponentSize,
} from '../types'

export type ButtonProps<T extends HTMLElement = HTMLButtonElement> = Omit<
  React.ButtonHTMLAttributes<T>,
  'color'
> &
  IComponentBaseProps & {
    href?: string
    shape?: ComponentShape
    size?: ComponentSize
    variant?: 'outline' | 'link'
    color?: ComponentColor
    glass?: boolean
    wide?: boolean
    fullWidth?: boolean
    responsive?: boolean
    animation?: boolean
    loading?: boolean
    active?: boolean
    startIcon?: ReactNode
    endIcon?: ReactNode
  }
export const classesFn = ({
  className,
  size,
  startIcon,
  loading,
  endIcon,
  shape,
  variant,
  color,
  glass,
  wide,
  fullWidth,
  responsive,
  animation,
  active,
  disabled,
}: Pick<
  ButtonProps,
  | 'className'
  | 'startIcon'
  | 'loading'
  | 'endIcon'
  | 'size'
  | 'shape'
  | 'color'
  | 'variant'
  | 'glass'
  | 'wide'
  | 'fullWidth'
  | 'responsive'
  | 'animation'
  | 'active'
  | 'disabled'
>) =>
  twMerge(
    'btn',
    className,
    clsx(((startIcon && !loading) || endIcon) && 'gap-2', {
      'btn-lg': size === 'lg',
      'btn-md': size === 'md',
      'btn-sm': size === 'sm',
      'btn-xs': size === 'xs',
      'btn-circle': shape === 'circle',
      'btn-square': shape === 'square',
      'btn-outline': variant === 'outline',
      'btn-link': variant === 'link',
      'btn-neutral': color === 'neutral',
      'btn-primary': color === 'primary',
      'btn-secondary': color === 'secondary',
      'btn-accent': color === 'accent',
      'btn-info': color === 'info',
      'btn-success': color === 'success',
      'btn-warning': color === 'warning',
      'btn-error': color === 'error',
      'btn-ghost': color === 'ghost',
      glass: glass,
      'btn-wide': wide,
      'btn-block': fullWidth,
      'btn-xs md:btn-sm lg:btn-md xl:btn-lg': responsive,
      'no-animation': !animation,
      'btn-active': active,
      'btn-disabled': disabled,
      loading: loading,
    })
  )

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      href,
      shape,
      size,
      variant,
      color,
      glass,
      startIcon,
      endIcon,
      wide,
      fullWidth,
      responsive,
      animation = true,
      loading,
      active,
      disabled,
      dataTheme,
      className,
      style,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = classesFn({
      className,
      startIcon,
      loading,
      endIcon,
      shape,
      size,
      variant,
      color,
      glass,
      wide,
      fullWidth,
      responsive,
      animation,
      active,
      disabled,
    })

    if (href) {
      return (
        <a className={classes} style={style} href={href}>
          {startIcon && startIcon}
          {children}
          {endIcon && endIcon}
        </a>
      )
    } else {
      return (
        <button
          {...props}
          ref={ref}
          data-theme={dataTheme}
          className={classes}
          style={style}
          disabled={disabled}
        >
          {startIcon && !loading && startIcon}
          {children}
          {endIcon && endIcon}
        </button>
      )
    }
  }
)

Button.displayName = 'Button'

export default Button
