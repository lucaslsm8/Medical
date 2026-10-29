"use client";

import { SectionPage } from "@/components/section-page";
import { Pill } from "lucide-react";

export default function MedicamentosPage() {
  return (
    <SectionPage
      title="Medicamentos"
      description="Remédios em uso, doses e estoque simples — sempre no contexto de um membro."
      emptyTitle="Nenhum medicamento cadastrado"
      emptyDescription="Adicione o primeiro remédio para acompanhar doses e renovação sem perder o fio."
      actionLabel="Adicionar medicamento"
      icon={Pill}
    />
  );
}
