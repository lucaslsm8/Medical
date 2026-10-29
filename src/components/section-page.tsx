"use client";

import { useFamily } from "@/components/family-context";
import { EmptyState } from "@/components/empty-state";
import type { LucideIcon } from "lucide-react";

type SectionPageProps = {
  title: string;
  description: string;
  emptyTitle: string;
  emptyDescription: string;
  actionLabel: string;
  icon: LucideIcon;
};

export function SectionPage({
  title,
  description,
  emptyTitle,
  emptyDescription,
  actionLabel,
  icon,
}: SectionPageProps) {
  const { activeMember, viewMode } = useFamily();

  const context =
    viewMode === "family"
      ? "Visão da família"
      : `Contexto: ${activeMember.name}`;

  return (
    <div className="animate-enter space-y-6" key={viewMode + activeMember.id}>
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-tertiary">
          {context}
        </p>
        <h1 className="font-display text-3xl tracking-tight text-ink">{title}</h1>
        <p className="max-w-lg text-sm leading-relaxed text-ink-secondary">
          {description}
        </p>
      </header>

      <div className="border-t border-border/80">
        <EmptyState
          icon={icon}
          title={emptyTitle}
          description={emptyDescription}
          actionLabel={actionLabel}
        />
      </div>
    </div>
  );
}
