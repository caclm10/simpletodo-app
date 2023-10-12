import { cva } from "class-variance-authority";

export const buttonVariants = cva([
    "inline-flex items-center justify-center",
    "border rounded-md",
    "font-semibold leading-[19.2px]",
    "cursor-pointer select-none disabled:cursor-not-allowed",
    "transition"
], {
    variants: {
        variant: {
            "contained": "border-transparent",
            "outline": "",
            "ghost": "border-transparent",
        },
        color: {
            "primary": "",
            "neutral": "text-gray-900",
            "danger": "",
        },
        isIconOnly: {
            true: "p-0",
            false: "px-4"
        },
        size: {
            "xs": "",
            "sm": "h-8 min-w-[2rem]",
            "md": "h-10 min-w-[2.5rem]",
            "lg": "h-12 min-w-[3rem]",
        }
    },
    compoundVariants: [
        {
            variant: "contained",
            color: "primary",
            className: "text-white bg-cyan-600 hover:bg-cyan-700 active:bg-cyan-800"
        },
        {
            variant: "ghost",
            color: "primary",
            className: "text-cyan-600 hover:bg-cyan-50 active:bg-cyan-100"
        },
        {
            variant: "contained",
            color: "danger",
            className: "text-white bg-red-600 hover:bg-red-700 active:bg-red-800"
        },
        {
            variant: "ghost",
            color: "danger",
            className: "text-red-600 hover:bg-red-50 active:bg-red-100"
        },
        {
            variant: "contained",
            color: "neutral",
            className: "bg-gray-100 hover:bg-gray-200 active:bg-gray-300"
        },
        {
            variant: "ghost",
            color: "neutral",
            className: "hover:bg-gray-100 active:bg-gray-200"
        },
    ]
})