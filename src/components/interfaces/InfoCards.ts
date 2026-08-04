import type { ElementType } from "react";
import type { SvgIconProps } from "@mui/material/SvgIcon";
export type InfoCardVariant = "default" | "soft";


export type InfoCardProps = {
  icon: ElementType<SvgIconProps>;
  title: string;
  price: string;
  bulletPoints: string[];
  shortText: string;
  onClick: () => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  variant?: InfoCardVariant;
};

export type CourseCard = {
  icon: ElementType<SvgIconProps>;
  title: string;
  price: string;
  bulletPoints: string[];
  shortText: string;
  onClickLog: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  variant?: "default" | "soft";
};

export type CourseSection = {
  id: string;
  label: string;
  title?: string;
  subtitle?: string;
  infoText?: string;
  cards: CourseCard[];
};