"use client";

import Link from "next/link";
import { useFamily } from "@/components/family-context";
import { ageFromBirthYear } from "@/lib/family";

export default function MaisPage() {
  const { members, setActiveMemberId } = useFamily();

  return (
    <div className="animate-enter space-y-10">
      <header className="space-y-2">
        <h1 className="font-display text-3xl tracking-tight text-ink">Mais</h1>
        <p className="max-w-lg text-sm leading-relaxed text-ink-secondary">
          Perfis da família, privacidade e atalhos que não precisam estar na barra
          principal.
        </p>
      </header>

      <section className="space-y-4" aria-labelledby="familia-heading">
        <h2
          id="familia-heading"
          className="font-display text-xl tracking-tight text-ink"
        >
          Família
        </h2>
        <ul className="divide-y divide-border/80 border-t border-border/80">
          {members.map((member) => (
            <li key={member.id}>
              <button
                type="button"
                onClick={() => setActiveMemberId(member.id)}
                className="flex w-full items-center gap-3 py-3.5 text-left transition-colors hover:bg-bg-muted/50"
              >
                <span
                  className="flex size-10 items-center justify-center rounded-full text-sm font-medium text-primary-foreground"
                  style={{ backgroundColor: member.tone }}
                  aria-hidden
                >
                  {member.initials}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-medium text-ink">{member.name}</span>
                  <span className="block text-sm text-ink-secondary">
                    {member.relationship} · {ageFromBirthYear(member.birthYear)}{" "}
                    anos
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="text-sm text-ink-tertiary">
          Gerenciar família — em breve neste scaffold.
        </p>
      </section>

      <section className="space-y-3" aria-labelledby="atalhos-mais">
        <h2
          id="atalhos-mais"
          className="font-display text-xl tracking-tight text-ink"
        >
          Atalhos
        </h2>
        <ul className="flex flex-col border-t border-border/80 text-sm">
          <li>
            <Link
              href="/plano"
              className="block py-3 text-brand transition-colors hover:text-brand-hover"
            >
              Plano de saúde
            </Link>
          </li>
          <li>
            <span className="block py-3 text-ink-tertiary">
              Alergias e condições — em breve
            </span>
          </li>
          <li>
            <span className="block py-3 text-ink-tertiary">
              Privacidade e bloqueio — em breve
            </span>
          </li>
          <li>
            <span className="block py-3 text-ink-tertiary">
              Exportar dados — em breve
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
