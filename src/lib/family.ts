export type FamilyMember = {
  id: string;
  name: string;
  relationship: string;
  initials: string;
  birthYear: number;
  tone: string;
};

export const FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: "lucas",
    name: "Lucas",
    relationship: "Você",
    initials: "L",
    birthYear: 1990,
    tone: "#2f5d50",
  },
  {
    id: "ana",
    name: "Ana",
    relationship: "Cônjuge",
    initials: "A",
    birthYear: 1992,
    tone: "#3d6a7a",
  },
  {
    id: "sofia",
    name: "Sofia",
    relationship: "Filha",
    initials: "S",
    birthYear: 2018,
    tone: "#5a7a62",
  },
  {
    id: "helena",
    name: "Helena",
    relationship: "Mãe",
    initials: "H",
    birthYear: 1962,
    tone: "#6b5c4a",
  },
];

export function ageFromBirthYear(birthYear: number, year = 2026): number {
  return year - birthYear;
}
