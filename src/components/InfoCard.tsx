import {
  Box,
  Button,
  ButtonBase,
  Card,
  Divider,
  Typography,
} from "@mui/material";

import type { InfoCardProps } from "./interfaces/InfoCards";

const PRIMARY = "#5F68FF";
const TEXT = "#0F172A";

export default function InfoCard({
  icon: Icon,
  title,
  price,
  bulletPoints = [],
  shortText,
  onClick,
  primaryButtonText = "Научи повече",
  secondaryButtonText,
  variant = "default",
}: InfoCardProps) {
  const isSoft = variant === "soft";

  return (
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: 335,
          md: 360,
        },
        maxWidth: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "18px",
        p: {
          xs: 2.5,
          sm: 3,
        },
        backgroundColor: isSoft ? "rgba(95, 104, 255, 0.06)" : "#fff",
        boxShadow: isSoft
          ? "0 12px 36px rgba(95, 104, 255, 0.14)"
          : "0 12px 36px rgba(15, 23, 42, 0.12)",
        border: isSoft
          ? "1px solid rgba(95, 104, 255, 0.18)"
          : "1px solid rgba(15, 23, 42, 0.06)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 2,
          mb: 2.5,
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
            backgroundColor: isSoft
              ? "rgba(95, 104, 255, 0.14)"
              : "rgba(95, 104, 255, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon
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

        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography
            variant="h5"
            sx={{
              color: TEXT,
              fontWeight: 800,
              lineHeight: 1.25,
              fontSize: {
                xs: 23,
                sm: 26,
                md: 28,
              },
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              mt: 2,
              color: PRIMARY,
              fontWeight: 800,
              lineHeight: 1.2,
              fontSize: {
                xs: 18,
                sm: 20,
              },
            }}
          >
            {price}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "grid",
          gap: 1.35,
          mb: 2.5,
        }}
      >
        {bulletPoints.map((point, index) => (
          <Box
            key={`${point}-${index}`}
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1.4,
            }}
          >
            <Box
              aria-hidden
              sx={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                backgroundColor: PRIMARY,
                flexShrink: 0,
                mt: "8px",
              }}
            />

            <Typography
              sx={{
                color: TEXT,
                fontSize: {
                  xs: 15,
                  sm: 16,
                },
                lineHeight: 1.35,
                fontWeight: 500,
              }}
            >
              {point}
            </Typography>
          </Box>
        ))}
      </Box>

      <Divider
        sx={{
          borderColor: "rgba(15, 23, 42, 0.1)",
          mb: 2,
        }}
      />

      <Typography
        sx={{
          color: TEXT,
          fontSize: {
            xs: 15,
            sm: 16,
          },
          lineHeight: 1.45,
          fontWeight: 500,
          mb: 3,
        }}
      >
        {shortText}
      </Typography>

      <Box sx={{ mt: "auto" }}>
        <Button
          fullWidth
          onClick={onClick}
          variant="contained"
          sx={{
            minHeight: 50,
            borderRadius: "9px",
            backgroundColor: PRIMARY,
            color: "#fff",
            textTransform: "none",
            fontWeight: 800,
            fontSize: 16,
            boxShadow: "none",
            gap: 1.5,
            px: 2,
            "&:hover": {
              backgroundColor: PRIMARY,
              boxShadow: "0 10px 24px rgba(95, 104, 255, 0.35)",
            },
          }}
        >
          {primaryButtonText}

          <Box
            component="span"
            aria-hidden
            sx={{
              fontSize: 26,
              lineHeight: 1,
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            →
          </Box>
        </Button>

        {secondaryButtonText && (
          <ButtonBase
            onClick={onClick}
            sx={{
              display: "flex",
              mx: "auto",
              mt: 2.2,
              color: PRIMARY,
              fontWeight: 800,
              fontSize: 16,
              borderRadius: 1,
              px: 1,
              py: 0.5,
              textAlign: "center",
            }}
          >
            {secondaryButtonText}
          </ButtonBase>
        )}
      </Box>
    </Card>
  );
}
