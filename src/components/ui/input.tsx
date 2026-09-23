import * as React from "react";
import { cn } from "@/lib/utils";

export function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-md bg-surface px-3 text-sm text-fg shadow-border outline-none transition-[box-shadow] duration-150 placeholder:text-muted/80 focus-visible:ring-2 focus-visible:ring-primary/35 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full rounded-lg bg-surface px-3 py-2.5 text-sm text-fg shadow-border outline-none transition-[box-shadow] duration-150 placeholder:text-muted/80 focus-visible:ring-2 focus-visible:ring-primary/35",
        className,
      )}
      {...props}
    />
  );
}

export function NativeSelect({ className, ...props }: React.ComponentProps<"select">) {
  return (
    <select
      className={cn(
        "flex h-11 w-full rounded-md bg-surface px-3 text-sm text-fg shadow-border outline-none transition-[box-shadow] duration-150 focus-visible:ring-2 focus-visible:ring-primary/35",
        className,
      )}
      {...props}
    />
  );
}

export function FieldLabel({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      className={cn("mb-1.5 block text-sm font-medium text-fg", className)}
      {...props}
    />
  );
}
