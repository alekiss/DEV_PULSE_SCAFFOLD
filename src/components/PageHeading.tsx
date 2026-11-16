import { Stack, Typography } from "@mui/material";

type PageHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHeading({
  eyebrow,
  title,
  description,
}: PageHeadingProps) {
  return (
    <Stack spacing={1} sx={{ mb: 3 }}>
      {eyebrow && (
        <Typography
          variant="overline"
          color="primary.main"
          sx={{ fontWeight: 800, letterSpacing: "0.14em" }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h3" component="h1">
        {title}
      </Typography>
      {description && (
        <Typography color="text.secondary" sx={{ maxWidth: 720 }}>
          {description}
        </Typography>
      )}
    </Stack>
  );
}
