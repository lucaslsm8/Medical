import {
  CalendarDays,
  FileHeart,
  Home,
  MoreHorizontal,
  Pill,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
  mobilePrimary?: boolean;
};

export const PRIMARY_NAV: NavItem[] = [
  { href: "/", label: "Início", icon: Home, mobilePrimary: true },
  {
    href: "/medicamentos",
    label: "Medicamentos",
    icon: Pill,
    mobilePrimary: true,
  },
  {
    href: "/consultas",
    label: "Consultas",
    icon: CalendarDays,
    mobilePrimary: true,
  },
  {
    href: "/exames",
    label: "Exames",
    icon: FileHeart,
    mobilePrimary: true,
  },
  {
    href: "/plano",
    label: "Plano",
    icon: WalletCards,
    mobilePrimary: false,
  },
  {
    href: "/mais",
    label: "Mais",
    icon: MoreHorizontal,
    mobilePrimary: true,
  },
];

export const MOBILE_NAV = PRIMARY_NAV.filter((item) => item.mobilePrimary);
