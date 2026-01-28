import * as React from "react"
import { cn } from "@/lib/utils"

export interface NavigationMenuProps
  extends React.HTMLAttributes<HTMLElement> {}

function NavigationMenu({
  className,
  ...props
}: NavigationMenuProps) {
  return (
    <nav
      className={cn("flex items-center", className)}
      {...props}
    />
  )
}

export interface NavigationMenuListProps
  extends React.HTMLAttributes<HTMLUListElement> {}

function NavigationMenuList({
  className,
  ...props
}: NavigationMenuListProps) {
  return (
    <ul
      className={cn("flex items-center gap-4", className)}
      {...props}
    />
  )
}

export interface NavigationMenuItemProps
  extends React.LiHTMLAttributes<HTMLLIElement> {}

function NavigationMenuItem({
  className,
  ...props
}: NavigationMenuItemProps) {
  return (
    <li
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
}

