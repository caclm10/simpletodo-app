import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export const cn = (...classValue) => twMerge(cx(classValue))