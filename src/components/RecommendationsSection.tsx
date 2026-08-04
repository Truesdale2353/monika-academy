import { useMemo, useState, type ElementType } from "react";
import {
  Box,
  ButtonBase,
  Paper,
  Typography,
  useMediaQuery,
  type SvgIconProps,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Spa } from "@mui/icons-material";

const PRIMARY = "#5F68FF";
const TEXT = "#0F172A";

export type RecommendationItem = {
  quote: string;
  author: string;
};

export type RecommendationCta = {
  icon: ElementType<SvgIconProps>;
  title: string;
  description: string;
  actionText: string;
  onClickLog: string;
};

type RecommendationsSectionProps = {
  title?: string;
  recommendations?: RecommendationItem[];
  cta?: RecommendationCta;
  onCtaClick?: (value: string) => void;
};

export const recommendationItems: RecommendationItem[] = [
  {
    quote:
      "Както и другите преди мен са написали-преподавателите са на много високо професионално ниво. Успяват да увлекат децата и да направят трудното-лесно. Моето дете постигна страхотни резултати с тях. Без да е дете 'математик' постигна много висок резултат по математика след седми клас и беше приет по първо желание в желаната гимназия",
      author: "Vanya Tosheva",
  },
  {
    quote:
      "Преподавателите са много приятни и преподават материала по лесен и интересен начин.",
    author: "Samuil Toshkov",
  },
  {
    quote:
      "Страхотни преподаватели. Математика никога не е била толкова лесна и интересна🙂🥰!",
    author: "presdirsel speed and magia bg dimitrovi",
  },
    {
    quote:
      "Школата е топ. Преподавателите са много коректни и много добри. Препоръчвам!!",
    author: "Stefan",
  },
];

export const recommendationCta: RecommendationCta = {
  icon: Spa,
  title: "Започни уверено още днес",
  description:
    "Заяви безплатна консултация, за да обсъдим нуждите на ученика и да изберем най-добрия план за развитие.",
  actionText: "Запази час",
  onClickLog: "recommendations-book-consultation",
};

export default function RecommendationsSection({
  title = "Какво споделят ученици и родители",
  recommendations = recommendationItems,
  cta = recommendationCta,
  onCtaClick = (value) => console.log(value),
}: RecommendationsSectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const cardsPerPage = isMobile ? 1 : 2;

  const pages = useMemo(() => {
    const result: RecommendationItem[][] = [];

    for (let i = 0; i < recommendations.length; i += cardsPerPage) {
      result.push(recommendations.slice(i, i + cardsPerPage));
    }

    return result;
  }, [recommendations, cardsPerPage]);

  const [activePage, setActivePage] = useState(0);

  const visibleRecommendations = pages[activePage] ?? pages[0] ?? [];
  const CtaIcon = cta.icon;

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          lg: "260px 1fr 420px",
        },
        alignItems: "center",
        gap: {
          xs: 2.5,
          lg: 4,
        },
      }}
    >
      <Typography
        sx={{
          color: TEXT,
          fontWeight: 900,
          lineHeight: 1.12,
          fontSize: {
            xs: 26,
            md: 30,
          },
          textAlign: {
            xs: "center",
            lg: "left",
          },
        }}
      >
        {title}
      </Typography>

      <Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: `repeat(${
                visibleRecommendations.length || 1
              }, minmax(0, 1fr))`,
            },
            gap: 2,
          }}
        >
          {visibleRecommendations.map((item) => (
            <Paper
              key={`${item.author}-${item.quote}`}
              elevation={0}
              sx={{
                minHeight: {
                  xs: 150,
                  md: 130,
                },
                borderRadius: "10px",
                p: {
                  xs: 2.25,
                  md: 2.5,
                },
                backgroundColor: "rgba(245, 246, 255, 0.9)",
                border: "1px solid rgba(95, 104, 255, 0.06)",
                boxShadow: "0 10px 28px rgba(15, 23, 42, 0.05)",
              }}
            >
              <Typography
                aria-hidden
                sx={{
                  color: PRIMARY,
                  opacity: 0.35,
                  fontWeight: 900,
                  fontSize: 30,
                  lineHeight: 0.8,
                  mb: 0.75,
                }}
              >
                “
              </Typography>

              <Typography
                sx={{
                  color: TEXT,
                  opacity: 0.82,
                  fontSize: {
                    xs: 14,
                    md: 15,
                  },
                  lineHeight: 1.5,
                  fontWeight: 500,
                  mb: 1.75,
                }}
              >
                {item.quote}
              </Typography>

              <Typography
                sx={{
                  color: TEXT,
                  fontSize: 14,
                  fontWeight: 800,
                }}
              >
                {item.author}
              </Typography>
            </Paper>
          ))}
        </Box>

        {pages.length > 1 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
              mt: 1.75,
            }}
          >
            {pages.map((_, index) => {
              const isActive = index === activePage;

              return (
                <ButtonBase
                  key={index}
                  onClick={() => setActivePage(index)}
                  aria-label={`Show recommendation page ${index + 1}`}
                  sx={{
                    width: isActive ? 18 : 9,
                    height: 9,
                    borderRadius: 999,
                    backgroundColor: isActive
                      ? PRIMARY
                      : "rgba(15, 23, 42, 0.18)",
                    transition: "all 0.2s ease",
                  }}
                />
              );
            })}
          </Box>
        )}
      </Box>

      <Paper
        elevation={0}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2.5,
          minHeight: 130,
          borderRadius: "10px",
          p: {
            xs: 2.25,
            md: 2.5,
          },
          backgroundColor: "rgba(239, 243, 232, 0.8)",
          border: "1px solid rgba(132, 150, 109, 0.12)",
          boxShadow: "0 10px 28px rgba(15, 23, 42, 0.05)",
        }}
      >
        <Box
          sx={{
            width: {
              xs: 62,
              md: 76,
            },
            height: {
              xs: 62,
              md: 76,
            },
            borderRadius: "50%",
            backgroundColor: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <CtaIcon
            aria-hidden
            sx={{
              width: {
                xs: 34,
                md: 42,
              },
              height: {
                xs: 34,
                md: 42,
              },
              color: PRIMARY,
            }}
          />
        </Box>

        <Box sx={{ minWidth: 0 }}>
          <Typography
            sx={{
              color: TEXT,
              fontWeight: 900,
              fontSize: {
                xs: 16,
                md: 17,
              },
              lineHeight: 1.25,
              mb: 0.75,
            }}
          >
            {cta.title}
          </Typography>

          <Typography
            sx={{
              color: TEXT,
              opacity: 0.75,
              fontSize: {
                xs: 13,
                md: 14,
              },
              lineHeight: 1.45,
              fontWeight: 500,
              mb: 1.25,
            }}
          >
            {cta.description}
          </Typography>

          <ButtonBase
            onClick={() => onCtaClick(cta.onClickLog)}
            sx={{
              color: TEXT,
              fontWeight: 800,
              fontSize: 14,
              borderRadius: 1,
              gap: 1,
              px: 0.5,
              py: 0.25,
              "&:hover": {
                color: PRIMARY,
              },
            }}
          >
            {cta.actionText}

            <Box
              component="span"
              aria-hidden
              sx={{
                fontSize: 20,
              }}
            >
              →
            </Box>
          </ButtonBase>
        </Box>
      </Paper>
    </Box>
  );
}

