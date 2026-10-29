"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MemberSwitcher } from "@/components/member-switcher";
import { PRIMARY_NAV, MOBILE_NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative z-0 flex min-h-dvh flex-col md:flex-row">
      <aside className="hidden w-56 shrink-0 flex-col border-r border-border/70 bg-sidebar/80 px-3 py-5 backdrop-blur-sm md:flex lg:w-60">
        <Link href="/" className="mb-8 px-2">
          <span className="font-display text-2xl tracking-tight text-brand">
            Cuidário
          </span>
          <span className="mt-1 block text-xs text-ink-tertiary">
            Saúde da família
          </span>
        </Link>

        <nav className="flex flex-1 flex-col gap-1" aria-label="Principal">
          {PRIMARY_NAV.filter((item) => item.href !== "/mais").map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex h-11 items-center gap-3 rounded-xl px-3 text-sm transition-colors",
                  active
                    ? "bg-brand-soft font-medium text-ink"
                    : "text-ink-secondary hover:bg-bg-muted hover:text-ink",
                )}
                aria-current={active ? "page" : undefined}
              >
                <Icon className="size-[1.15rem]" strokeWidth={1.75} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto space-y-4 border-t border-border/70 pt-4">
          <MemberSwitcher />
          <Link
            href="/mais"
            className="block px-2 text-xs text-ink-tertiary transition-colors hover:text-ink-secondary"
          >
            Gerenciar família · Privacidade
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 border-b border-border/60 bg-bg-elevated/85 px-4 py-3 backdrop-blur-md md:px-8">
          <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 md:hidden">
            <Link href="/">
              <span className="font-display text-xl tracking-tight text-brand">
                Cuidário
              </span>
            </Link>
          </div>
          <div className="mx-auto mt-3 max-w-3xl md:mt-0">
            <div className="md:hidden">
              <MemberSwitcher compact />
            </div>
            <div className="hidden md:block">
              <MemberSwitcher compact />
            </div>
          </div>
        </header>

        <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-28 pt-6 md:px-8 md:pb-12 md:pt-8">
          {children}
        </main>
      </div>

      <nav
        className="fixed inset-x-0 bottom-0 z-30 border-t border-border/70 bg-bg-elevated/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-1.5 backdrop-blur-md md:hidden"
        aria-label="Navegação móvel"
      >
        <ul className="mx-auto flex max-w-lg items-stretch justify-between gap-0.5">
          {MOBILE_NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : item.href === "/mais"
                  ? pathname.startsWith("/mais") || pathname.startsWith("/plano")
                  : pathname.startsWith(item.href);
            const Icon = item.icon;
            return (
              <li key={item.href} className="flex-1">
                <Link
                  href={item.href}
                  className={cn(
                    "flex min-h-12 flex-col items-center justify-center gap-0.5 rounded-lg px-1 text-[0.65rem] transition-colors",
                    active
                      ? "text-brand"
                      : "text-ink-tertiary hover:text-ink-secondary",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon
                    className={cn("size-5", active && "text-brand")}
                    strokeWidth={active ? 2 : 1.75}
                  />
                  <span className={cn(active && "font-medium")}>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
