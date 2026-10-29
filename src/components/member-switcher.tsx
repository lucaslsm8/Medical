"use client";

import { useFamily } from "@/components/family-context";
import { cn } from "@/lib/utils";

type MemberSwitcherProps = {
  compact?: boolean;
};

export function MemberSwitcher({ compact = false }: MemberSwitcherProps) {
  const { members, activeMember, setActiveMemberId, viewMode, setViewMode } =
    useFamily();

  return (
    <div className={cn("flex flex-col gap-2", compact && "gap-1.5")}>
      {!compact ? (
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink-tertiary">
          Núcleo familiar
        </p>
      ) : null}

      <div className="flex flex-wrap items-center gap-1.5">
        <button
          type="button"
          onClick={() => setViewMode("family")}
          className={cn(
            "inline-flex h-10 items-center gap-2 rounded-xl px-3 text-sm transition-colors",
            viewMode === "family"
              ? "bg-brand-soft text-ink"
              : "text-ink-secondary hover:bg-bg-muted",
          )}
          aria-pressed={viewMode === "family"}
        >
          <span
            className="flex size-7 items-center justify-center rounded-full bg-brand text-[0.65rem] font-medium text-primary-foreground"
            aria-hidden
          >
            Fam
          </span>
          <span className="font-medium">Família</span>
        </button>

        {members.map((member) => {
          const active =
            viewMode === "member" && activeMember.id === member.id;
          return (
            <button
              key={member.id}
              type="button"
              onClick={() => setActiveMemberId(member.id)}
              className={cn(
                "inline-flex h-10 items-center gap-2 rounded-xl px-2.5 text-sm transition-colors",
                active
                  ? "bg-brand-soft text-ink"
                  : "text-ink-secondary hover:bg-bg-muted",
              )}
              aria-pressed={active}
              aria-label={`${member.name}, ${member.relationship}`}
            >
              <span
                className="flex size-7 items-center justify-center rounded-full text-[0.7rem] font-medium text-primary-foreground"
                style={{ backgroundColor: member.tone }}
                aria-hidden
              >
                {member.initials}
              </span>
              {!compact ? (
                <span className="hidden font-medium sm:inline">{member.name}</span>
              ) : (
                <span className="font-medium">{member.name}</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
