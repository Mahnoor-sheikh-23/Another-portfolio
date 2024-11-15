"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "../../lib/utils"

const Tabs = TabsPrimitive.Root
interface TabsListProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
     "border border-transparent md:border-accentColor/40 p-1 rounded-full",
      className
    )}
    {...props} />
))
TabsList.displayName = TabsPrimitive.List.displayName


interface TabsTriggerProps extends React.ComponentPropsWithRef<typeof TabsPrimitive.Trigger> {
  className?: string;
}


const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap h-[40px] rounded-full px-4 text-sm font-medium transition-all outline-none data-[state=active]:bg-accentColor data-[state=active]:text-white",
      className
    )}
    {...props} />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

interface TabsContentProps extends React.ComponentPropsWithRef<typeof TabsPrimitive.Content> {
  className?: string;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props} />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
