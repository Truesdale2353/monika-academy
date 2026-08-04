import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Dialog,
  DialogContent,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import type { CommonPopupData, CoursePopupConfig } from "./interfaces/LearnMoreInfo";

const PRIMARY = "#5F68FF";
const TEXT = "#0F172A";

type CoursePopupProps = {
  open: boolean;
  popup: CoursePopupConfig | null;
  commonData?: CommonPopupData;
  onClose: () => void;
  onPrimaryClick: (popupId: string) => void;
  onSecondaryClick: (popupId: string) => void;
};

function BulletList({ items }: { items: string[] }) {
  return (
    <Box sx={{ display: "grid", gap: 1 }}>
      {items.map((item) => (
        <Box
          key={item}
          sx={{
            display: "flex",
            gap: 1.25,
            alignItems: "flex-start",
          }}
        >
          <Box
            sx={{
              width: 7,
              height: 7,
              mt: "8px",
              borderRadius: "50%",
              bgcolor: PRIMARY,
              flexShrink: 0,
            }}
          />
          <Typography sx={{ color: TEXT, fontSize: 15, lineHeight: 1.45 }}>
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Typography
      sx={{
        color: TEXT,
        fontWeight: 800,
        fontSize: 18,
        mb: 1.5,
      }}
    >
      {children}
    </Typography>
  );
}

export default function CoursePopup({
  open,
  popup,
  commonData,
  onClose,
  onPrimaryClick,
  onSecondaryClick,
}: CoursePopupProps) {
  if (!popup) return null;

  const includes = popup.includes ?? commonData?.includes ?? [];

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: {
            xs: 0,
            sm: "22px",
          },
          m: {
            xs: 0,
            sm: 2,
          },
          maxHeight: {
            xs: "100%",
            sm: "calc(100% - 64px)",
          },
        },
      }}
    >
      <DialogContent
        sx={{
          p: {
            xs: 2.25,
            sm: 4,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 2,
            mb: 2,
          }}
        >
          <Box>
            {popup.badge && (
              <Chip
                label={popup.badge}
                sx={{
                  mb: 1.5,
                  color: PRIMARY,
                  bgcolor: "rgba(95, 104, 255, 0.1)",
                  fontWeight: 800,
                }}
              />
            )}

            <Typography
              variant="h4"
              sx={{
                color: TEXT,
                fontWeight: 900,
                fontSize: {
                  xs: 26,
                  sm: 34,
                },
                lineHeight: 1.15,
              }}
            >
              {popup.title}
            </Typography>
          </Box>

          <IconButton
            onClick={onClose}
            aria-label="Close dialog"
            sx={{
              color: TEXT,
              fontWeight: 800,
              fontSize: 24,
            }}
          >
            ×
          </IconButton>
        </Box>

        <Typography
          sx={{
            color: TEXT,
            opacity: 0.85,
            fontSize: 16,
            lineHeight: 1.55,
            maxWidth: 760,
            mb: 3,
          }}
        >
          {popup.description}
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.15fr 0.85fr",
            },
            gap: 3,
          }}
        >
          <Box>
            <Box sx={{ mb: 3 }}>
              <SectionTitle>За кого е подходящо</SectionTitle>
              <BulletList items={popup.suitableFor} />
            </Box>

            <Box sx={{ mb: 3 }}>
              <SectionTitle>{popup.processTitle ?? "Как протичат занятията"}</SectionTitle>
              <Typography
                sx={{
                  color: TEXT,
                  fontSize: 15,
                  lineHeight: 1.55,
                }}
              >
                {popup.processText}
              </Typography>
            </Box>

            {includes.length > 0 && (
              <Box sx={{ mb: 3 }}>
                <SectionTitle>Какво включва курсът</SectionTitle>
                <BulletList items={includes} />
              </Box>
            )}

            {popup.reassuranceText && (
              <Box
                sx={{
                  p: 2,
                  mb:3,
                  borderRadius: 3,
                  bgcolor: "rgba(95, 104, 255, 0.07)",
                  border: "1px solid rgba(95, 104, 255, 0.14)",
                }}
              >
                <Typography
                  sx={{
                    color: TEXT,
                    fontSize: 15,
                    lineHeight: 1.5,
                    fontWeight: 600,
                  }}
                >
                  {popup.reassuranceText}
                </Typography>
              </Box>
            )}

            <Box
                sx={{
                  p: 2,
                  borderRadius: 3,
                  bgcolor: "rgba(95, 104, 255, 0.07)",
                  border: "1px solid rgba(95, 104, 255, 0.14)",
                }}
              >
                <Typography
                  sx={{
                    color: TEXT,
                    fontSize: 15,
                    lineHeight: 1.5,
                    fontWeight: 600,
                  }}
                >
                  "Цената е посочена за едно занятие. Учебната година е планирана за 34 учебни седмици. Графикът, свободните места и организацията се уточняват според конкретната група."
                </Typography>
              </Box>
          </Box>

          <Box>
            <Box
              sx={{
                p: 2.25,
                borderRadius: 3,
                bgcolor: "rgba(95, 104, 255, 0.07)",
                border: "1px solid rgba(95, 104, 255, 0.14)",
                mb: 2,
              }}
            >
              <SectionTitle>Детайли</SectionTitle>

              <Box sx={{ display: "grid", gap: 1.25 }}>
                {popup.details.map((detail) => (
                  <Box
                    key={detail.label}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 2,
                      borderBottom: "1px solid rgba(15, 23, 42, 0.08)",
                      pb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        color: TEXT,
                        opacity: 0.7,
                        fontSize: 14,
                      }}
                    >
                      {detail.label}
                    </Typography>

                    <Typography
                      sx={{
                        color: TEXT,
                        fontSize: 14,
                        fontWeight: 800,
                        textAlign: "right",
                      }}
                    >
                      {detail.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Button
              fullWidth
              variant="contained"
              onClick={() => onPrimaryClick(popup.id)}
              sx={{
                minHeight: 48,
                borderRadius: 2,
                bgcolor: PRIMARY,
                textTransform: "none",
                fontWeight: 800,
                fontSize: 16,
                boxShadow: "none",
                mb: 1.25,
                "&:hover": {
                  bgcolor: PRIMARY,
                  boxShadow: "0 10px 24px rgba(95, 104, 255, 0.35)",
                },
              }}
            >
              {popup.primaryButtonText}
            </Button>

            {commonData?.faqs?.length ? (
              <>
                <Divider sx={{ my: 2.5 }} />

                <SectionTitle>Често задавани въпроси</SectionTitle>

                {commonData.faqs.map((faq) => (
                  <Accordion
                    key={faq.question}
                    disableGutters
                    elevation={0}
                    sx={{
                      border: "1px solid rgba(15, 23, 42, 0.08)",
                      borderRadius: "10px !important",
                      mb: 1,
                      "&:before": {
                        display: "none",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <Box
                          component="span"
                          sx={{
                            color: PRIMARY,
                            fontWeight: 900,
                            fontSize: 20,
                          }}
                        >
                          +
                        </Box>
                      }
                    >
                      <Typography
                        sx={{
                          color: TEXT,
                          fontWeight: 800,
                          fontSize: 14,
                        }}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography
                        sx={{
                          color: TEXT,
                          opacity: 0.85,
                          fontSize: 14,
                          lineHeight: 1.45,
                        }}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </>
            ) : null}
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}