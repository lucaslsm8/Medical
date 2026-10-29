"use client";

import Link from "next/link";
import { useFamily } from "@/components/family-context";
import { buttonVariants } from "@/components/ui/button";
import { ageFromBirthYear } from "@/lib/family";
import { cn } from "@/lib/utils";

export function HomeHub() {
  const { activeMember, viewMode, members } = useFamily();

  const greeting =
    viewMode === "family"
      ? "Hoje na família"
      : `Hoje com ${activeMember.name}`;

  const contextLine =
    viewMode === "family"
      ? "Saúde da família, no seu ritmo."
      : `${activeMember.relationship} · ${ageFromBirthYear(activeMember.birthYear)} anos`;

  return (
    <div className="animate-enter space-y-12" key={viewMode + activeMember.id}>
      <section className="space-y-6" aria-labelledby="home-hero">
        <div className="space-y-3">
          <p className="font-display text-4xl tracking-tight text-brand sm:text-5xl">
            Cuidário
          </p>
          <h1
            id="home-hero"
            className="max-w-xl font-display text-2xl leading-snug tracking-tight text-ink sm:text-3xl"
          >
            {greeting}
          </h1>
          <p className="max-w-md text-base leading-relaxed text-ink-secondary">
            {contextLine}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="#proximo"
            className={cn(buttonVariants({ size: "lg" }), "px-4")}
          >
            Ver hoje
          </Link>
          <Link
            href="/consultas"
            className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "px-4")}
          >
            Marcar consulta
          </Link>
        </div>

        <div
          className="flex flex-wrap items-end gap-3 pt-2"
          aria-label="Membros do núcleo"
        >
          {(viewMode === "family" ? members : [activeMember]).map((member) => (
            <div key={member.id} className="flex flex-col items-center gap-1.5">
              <span
                className="flex size-14 items-center justify-center rounded-full text-lg font-medium text-primary-foreground shadow-[0_0_0_3px_var(--bg-elevated)] sm:size-16 sm:text-xl"
                style={{ backgroundColor: member.tone }}
                aria-hidden
              >
                {member.initials}
              </span>
              <span className="text-xs text-ink-secondary">{member.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="proximo"
        className="space-y-4 scroll-mt-24"
        aria-labelledby="proximo-heading"
      >
        <div className="space-y-1">
          <h2
            id="proximo-heading"
            className="font-display text-xl tracking-tight text-ink"
          >
            Próximo
          </h2>
          <p className="text-sm text-ink-secondary">
            Consultas, doses e exames a buscar — quando houver.
          </p>
        </div>

        <div className="border-t border-border/80 pt-6">
          <p className="max-w-lg text-sm leading-relaxed text-ink-secondary">
            Nada previsto nos próximos dias. Que tal registrar a próxima
            consulta?
          </p>
          <div className="mt-4">
            <Link
              href="/consultas"
              className={cn(buttonVariants({ variant: "outline" }), "px-3")}
            >
              Adicionar consulta
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-3" aria-labelledby="atalhos-heading">
        <h2
          id="atalhos-heading"
          className="font-display text-xl tracking-tight text-ink"
        >
          Atalhos
        </h2>
        <ul className="flex flex-col gap-1 border-t border-border/80 pt-3 text-sm">
          <li>
            <Link
              href="/medicamentos"
              className="block py-2.5 text-brand transition-colors hover:text-brand-hover"
            >
              Adicionar remédio
            </Link>
          </li>
          <li>
            <Link
              href="/consultas"
              className="block py-2.5 text-brand transition-colors hover:text-brand-hover"
            >
              Marcar consulta
            </Link>
          </li>
          <li>
            <Link
              href="/exames"
              className="block py-2.5 text-brand transition-colors hover:text-brand-hover"
            >
              Anexar exame
            </Link>
          </li>
          <li>
            <Link
              href="/plano"
              className="block py-2.5 text-brand transition-colors hover:text-brand-hover"
            >
              Ver plano
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
