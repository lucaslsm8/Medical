import { Button } from "@/components/ui/button";
import type { LucideIcon } from "lucide-react";

type EmptyStateProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
};

export function EmptyState({
  icon: Icon,
  title,
  description,
  actionLabel,
  onAction,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-start gap-4 py-10 animate-enter">
      <div
        className="flex size-12 items-center justify-center rounded-2xl bg-brand-soft/60 text-brand"
        aria-hidden
      >
        <Icon className="size-5" strokeWidth={1.75} />
      </div>
      <div className="max-w-md space-y-2">
        <h2 className="font-display text-xl text-ink tracking-tight">{title}</h2>
        <p className="text-sm leading-relaxed text-ink-secondary">{description}</p>
      </div>
      {actionLabel ? (
        <Button type="button" onClick={onAction} className="mt-1">
          {actionLabel}
        </Button>
      ) : null}
    </div>
  );
}
