import type { ElementType } from "react";
import { Box, Typography, type SvgIconProps } from "@mui/material";
import {
  People as PeopleIcon,
  School,
  Groups,
  EmojiEvents,
} from "@mui/icons-material";

const PRIMARY = "#5F68FF";
const TEXT = "#0F172A";

export type FeatureItem = {
  icon: ElementType<SvgIconProps>;
  title: string;
  description: string;
};

type FeatureStripProps = {
  items?: FeatureItem[];
  decorationImage?: string;
};

export const featureItems: FeatureItem[] = [
  {
    icon: PeopleIcon,
    title: "Опитни преподаватели",
    description: "Професионален подход и индивидуално внимание.",
  },
  {
    icon: School,
    title: "Малки групи",
    description: "До 6 ученици за ефективна работа и участие.",
  },
  {
    icon: Groups,
    title: "Проследим напредък",
    description: "Редовна обратна връзка и ясни цели за развитие.",
  },
  {
    icon: EmojiEvents,
    title: "Доказани резултати",
    description: "Високи постижения на НВО, ДЗИ и приемни изпити.",
  },
];

export default function FeatureStrip({
  items = featureItems,
  decorationImage = "/images/leaf-decoration.svg",
}: FeatureStripProps) {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        borderRadius: {
          xs: "20px",
          md: "18px",
        },
        border: "1px solid rgba(15, 23, 42, 0.08)",
        backgroundColor: "rgba(255, 255, 255, 0.78)",
        boxShadow: "0 10px 32px rgba(15, 23, 42, 0.06)",
        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },
        py: {
          xs: 2.5,
          md: 2.25,
        },
      }}
    >
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            lg: "repeat(4, 1fr)",
          },
          gap: {
            xs: 2.5,
            sm: 2,
            lg: 0,
          },
          pr: {
            xs: 0,
            lg: decorationImage ? 10 : 0,
          },
        }}
      >
        {items.map((item, index) => {
          const ItemIcon = item.icon;

          return (
            <Box
              key={item.title}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                gap: 2,
                px: {
                  xs: 0,
                  lg: 2.75,
                },
                py: {
                  xs: 0,
                  sm: 1,
                  lg: 0.5,
                },
                borderBottom: {
                  xs:
                    index !== items.length - 1
                      ? "1px solid rgba(15, 23, 42, 0.08)"
                      : "none",
                  sm: "none",
                },
                pb: {
                  xs: index !== items.length - 1 ? 2.5 : 0,
                  sm: 1,
                },
                "&:not(:last-of-type)::after": {
                  content: {
                    xs: "none",
                    lg: '""',
                  },
                  position: "absolute",
                  right: 0,
                  top: "12%",
                  height: "76%",
                  width: "1px",
                  backgroundColor: "rgba(15, 23, 42, 0.12)",
                },
              }}
            >
              <Box
                sx={{
                  width: {
                    xs: 66,
                    sm: 76,
                  },
                  height: {
                    xs: 66,
                    sm: 76,
                  },
                  borderRadius: "50%",
                  backgroundColor: "rgba(95, 104, 255, 0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ItemIcon
                  aria-hidden
                  sx={{
                    width: {
                      xs: 34,
                      sm: 40,
                    },
                    height: {
                      xs: 34,
                      sm: 40,
                    },
                    color: PRIMARY,
                  }}
                />
              </Box>

              <Box sx={{ minWidth: 0 }}>
                <Typography
                  sx={{
                    color: TEXT,
                    fontWeight: 800,
                    fontSize: {
                      xs: 15,
                      md: 16,
                    },
                    lineHeight: 1.25,
                    mb: 0.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: TEXT,
                    opacity: 0.75,
                    fontWeight: 500,
                    fontSize: {
                      xs: 13,
                      md: 14,
                    },
                    lineHeight: 1.35,
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>

      {decorationImage && (
        <Box
          component="img"
          src={decorationImage}
          alt=""
          aria-hidden
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
            position: "absolute",
            right: 0,
            bottom: -4,
            width: 92,
            height: "auto",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      )}
    </Box>
  );
}