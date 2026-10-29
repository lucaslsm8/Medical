"use client";

import { SectionPage } from "@/components/section-page";
import { WalletCards } from "lucide-react";

export default function PlanoPage() {
  return (
    <SectionPage
      title="Plano de saúde"
      description="Carteirinha, operadora, contatos úteis e guias manuais — no jeito brasileiro."
      emptyTitle="Nenhum plano cadastrado"
      emptyDescription="Cadastre a operadora e a carteirinha do núcleo para ter o número à mão, com máscara de privacidade."
      actionLabel="Adicionar plano"
      icon={WalletCards}
    />
  );
}
