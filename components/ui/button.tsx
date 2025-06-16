import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const baseStyles = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/50"

const buttonVariants = cva(baseStyles, {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/90",
      destructive: "bg-destructive text-white hover:bg-destructive/90",
      outline: "border-2 border-gradient-to-r from-orange-400/40 to-purple-400/40 bg-gradient-to-r from-black/20 to-black/10 backdrop-blur-sm text-white hover:from-orange-400/20 hover:to-purple-400/20 hover:border-orange-400/60 hover:shadow-lg hover:shadow-orange-400/20 hover:text-orange-100",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      ghost: "text-foreground hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      gradient: "bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 hover:from-orange-600 hover:via-red-600 hover:to-purple-700 text-white border-0 shadow-lg shadow-orange-500/30",
      glass: "bg-white/5 backdrop-blur-xl border border-white/20 text-white hover:bg-white/10 hover:border-white/30",
      success: "bg-green-500 text-white hover:bg-green-600",
      warning: "bg-yellow-500 text-black hover:bg-yellow-600",
      info: "bg-blue-500 text-white hover:bg-blue-600",
      cyber: "bg-gradient-to-r from-purple-500/20 to-orange-500/20 border border-purple-400/50 text-purple-100 hover:from-purple-500/30 hover:to-orange-500/30 hover:border-purple-400/80 hover:text-white hover:shadow-lg hover:shadow-purple-500/30 backdrop-blur-sm",
    },
    size: {
      default: "h-9 px-4 py-2",
      sm: "h-8 px-3 text-xs",
      lg: "h-10 px-6",
      xl: "h-12 px-8 text-base",
      icon: "size-9 p-2",
    },
    effect: {
      none: "",
      scale: "hover:scale-105 transform transition-transform duration-300",
      glow: "hover:shadow-lg hover:shadow-primary/20",
      glass: "backdrop-blur-xl bg-white/5",
      gradient: "bg-gradient-to-r from-blue-600 to-purple-600",
      shimmer: "relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
    },
  },
  compoundVariants: [
    {
      variant: ["default", "destructive", "success", "warning", "info"],
      effect: "glow",
      className: "shadow-sm",
    },
    {
      variant: ["gradient", "glass", "cyber"],
      effect: "scale",
      className: "transform transition-transform duration-300",
    },
    {
      variant: "outline",
      effect: "shimmer",
      className: "relative overflow-hidden",
    },
  ],
  defaultVariants: {
    variant: "default",
    size: "default",
    effect: "none",
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, effect, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, effect, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
