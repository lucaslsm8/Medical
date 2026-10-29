"use client";

import { SectionPage } from "@/components/section-page";
import { CalendarDays } from "lucide-react";

export default function ConsultasPage() {
  return (
    <SectionPage
      title="Consultas"
      description="Agenda e histórico de visitas — próximas e passadas, com local e especialidade."
      emptyTitle="Nenhuma consulta na agenda"
      emptyDescription="Registre a próxima consulta para ela não se perder no WhatsApp ou no papel."
      actionLabel="Marcar consulta"
      icon={CalendarDays}
    />
  );
}
