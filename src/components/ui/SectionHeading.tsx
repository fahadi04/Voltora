import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 mb-8",
        align === "center" ? "items-center text-center mx-auto" : "items-start text-left",
        className
      )}
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base text-foreground/75 max-w-[640px] leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
