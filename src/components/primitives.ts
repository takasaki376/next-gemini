import { tv } from "tailwind-variants";

export const title = tv({
  base: "tracking-tight inline",
  variants: {
    color: {
      foreground: "dark:from-[#FFFFFF] dark:to-[#000000]",
    },
    size: {
      sm: "text-3xl lg:text-4xl",
      md: "text-[2.3rem] lg:text-5xl",
      lg: "text-4xl lg:text-6xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
