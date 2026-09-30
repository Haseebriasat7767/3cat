import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

/**
 * shadcn/ui-style button. Adapted to the Vigne design language:
 * square corners, Cormorant Garamond 300, champagne treatments.
 */
const buttonVariants = cva(
  'inline-flex cursor-pointer items-center justify-center whitespace-nowrap font-serif font-light text-[15px] tracking-[0.08em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'rounded-none bg-primary px-9 py-[13px] text-primary-foreground hover:bg-primary/90',
        outline:
          'rounded-none border-[0.5px] border-primary bg-transparent px-9 py-[13px] text-primary hover:bg-primary/10',
        ghost: 'rounded-none px-5 py-2 text-[13px] text-primary hover:bg-primary/10',
      },
      size: {
        default: '',
        sm: '',
        lg: 'px-11 py-4',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size, className }))} {...props} />
  ),
)
Button.displayName = 'Button'

export { Button, buttonVariants }
