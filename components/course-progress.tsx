import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface CourseProgressProps {
  value: number;
  variant?: "default" | "success",
  size?: "default" | "sm";
};

const colorByVariant = {
  default: "text-primary/40 dark:text-primary",
  success: "text-primary/40",
}

const sizeByVariant = {
  default: "text-sm",
  sm: "text-xs",
}

export const CourseProgress = ({
  value,
  variant,
  size,
}: CourseProgressProps) => {
  return (
    <div className="pb-3 w-full">
      <Progress
        className="mb-2"
        value={value}
        variant={variant}
      />
        <p className={cn(
          "font-medium mt-2 text-secondary",
          colorByVariant[variant || "default"],
          sizeByVariant[size || "default"],
        )}>
          {Math.round(value)}% Complete
        </p>
    </div>
  )
}