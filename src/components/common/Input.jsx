import { forwardRef } from "react"
import { cn } from "@/lib"

const Input = forwardRef(({
    rootClassName = "",
    name,
    id,
    label,
    className = "",
    error = "",
    ...rest
}, ref) => {
    return (
        <div className={cn("w-full mb-5", rootClassName)}>
            {label &&
                <div className="mb-1">
                    <label htmlFor={id || name}>{label}</label>
                </div>
            }

            <input
                ref={ref}
                name={name}
                id={id || name}
                className={cn(
                    "form-input w-full rounded-md",
                    {
                        "border-gray-300 focus:border-cyan-600 focus:ring-cyan-600": !error,
                        "border-red-500 focus:border-red-500 focus:ring-red-500": !!error
                    },
                    className
                )}
                {...rest}
            />
            {error &&
                <p className="text-red-500 text-xs mt-0.5">{error}</p>
            }
        </div>
    )
})

export default Input