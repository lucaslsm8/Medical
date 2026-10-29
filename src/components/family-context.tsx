"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { FAMILY_MEMBERS, type FamilyMember } from "@/lib/family";

type FamilyContextValue = {
  members: FamilyMember[];
  activeMember: FamilyMember;
  setActiveMemberId: (id: string) => void;
  viewMode: "member" | "family";
  setViewMode: (mode: "member" | "family") => void;
};

const FamilyContext = createContext<FamilyContextValue | null>(null);

export function FamilyProvider({ children }: { children: ReactNode }) {
  const [activeMemberId, setActiveMemberId] = useState(FAMILY_MEMBERS[0].id);
  const [viewMode, setViewMode] = useState<"member" | "family">("family");

  const activeMember = useMemo(
    () =>
      FAMILY_MEMBERS.find((m) => m.id === activeMemberId) ?? FAMILY_MEMBERS[0],
    [activeMemberId],
  );

  const handleSetMember = useCallback((id: string) => {
    setActiveMemberId(id);
    setViewMode("member");
  }, []);

  const value = useMemo(
    () => ({
      members: FAMILY_MEMBERS,
      activeMember,
      setActiveMemberId: handleSetMember,
      viewMode,
      setViewMode,
    }),
    [activeMember, handleSetMember, viewMode],
  );

  return (
    <FamilyContext.Provider value={value}>{children}</FamilyContext.Provider>
  );
}

export function useFamily() {
  const ctx = useContext(FamilyContext);
  if (!ctx) {
    throw new Error("useFamily deve ser usado dentro de FamilyProvider");
  }
  return ctx;
}
