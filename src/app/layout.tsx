import type { Metadata } from "next";
import { Fraunces, Outfit, Geist_Mono } from "next/font/google";
import { FamilyProvider } from "@/components/family-context";
import { AppShell } from "@/components/app-shell";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cuidário — saúde da família",
  description:
    "Arquivo pessoal de cuidados da família: remédios, consultas, exames e plano de saúde.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${outfit.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full font-sans text-foreground">
        <FamilyProvider>
          <AppShell>{children}</AppShell>
        </FamilyProvider>
      </body>
    </html>
  );
}
