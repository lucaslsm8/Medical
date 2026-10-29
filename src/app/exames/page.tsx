"use client";

import { SectionPage } from "@/components/section-page";
import { FileHeart } from "lucide-react";

export default function ExamesPage() {
  return (
    <SectionPage
      title="Exames"
      description="Labs, laudos e anexos em ordem cronológica — PDF ou imagem."
      emptyTitle="Nenhum exame anexado"
      emptyDescription="Anexe o próximo laudo para não perder no WhatsApp."
      actionLabel="Anexar exame"
      icon={FileHeart}
    />
  );
}
