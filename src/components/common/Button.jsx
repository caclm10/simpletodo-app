import { forwardRef } from 'react'
import { buttonVariants } from '@/styles/button.style'
import { cn } from '@/lib'

const Button = forwardRef(({
    type = "button",
    variant = "contained",
    color = "primary",
    isIconOnly = false,
    size = 'md',
    className = "",
    children,
    ...rest
}, ref) => {
    return (
        <button
            ref={ref}
            type={type}
            className={cn(buttonVariants({
                variant,
                color,
                isIconOnly,
                size
            }), className)}
            {...rest}
        >
            {children}
        </button>
    )
})

export default Button