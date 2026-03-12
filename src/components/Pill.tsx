import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PillProps {
  children: React.ReactNode;
  className?: string;
}

export function Pill({ children, className }: PillProps) {
  return (
    <Badge
      variant="outline"
      className={cn(
        "rounded-full border-border bg-accent/50 px-3 py-1 text-xs font-normal text-muted-foreground",
        className
      )}
    >
      {children}
    </Badge>
  );
}
