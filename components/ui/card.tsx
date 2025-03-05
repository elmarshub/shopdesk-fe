import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const cardVariants = cva(
  "rounded-xl border shadow-sm", 
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        outlined: "bg-white border-2",
        elevated: "bg-white shadow-md",
        ghost: "bg-transparent border-none shadow-none"
      },
      size: {
        default: "w-full",
        sm: "w-64",
        md: "w-80",
        lg: "w-96"
      },
      highlight: {
        true: "border-primary border-2",
        false: ""
      },
      layout: {
        col: "flex flex-col gap-6",
        row: "flex flex-row items-center gap-6"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      highlight: false,
      layout: "col"
    }
  }
)

interface CardProps 
  extends React.HTMLAttributes<HTMLDivElement>, 
  VariantProps<typeof cardVariants> {
  children?: React.ReactNode
}

function Card({ 
  className, 
  variant, 
  size, 
  highlight, 
  layout,
  children, 
  ...props 
}: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant, size, highlight, layout, className }))}
      {...props}
    >
      {children}
    </div>
  )
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex flex-col gap-1.5 px-6", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-xl leading-none font-semibold", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6 flex-grow", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 mt-auto", className)}
      {...props}
    />
  )
}

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
}