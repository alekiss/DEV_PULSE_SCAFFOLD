import { Paper, Stack, Typography } from "@mui/material";
import SearchOffRoundedIcon from "@mui/icons-material/SearchOffRounded";

type EmptyStateProps = { title: string; description: string };

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <Paper variant="outlined" sx={{ p: 4, textAlign: "center" }}>
      <Stack sx={{ alignItems: "center", gap: 1 }}>
        <SearchOffRoundedIcon color="disabled" sx={{ fontSize: 42 }} />
        <Typography variant="h6">{title}</Typography>
        <Typography color="text.secondary">{description}</Typography>
      </Stack>
    </Paper>
  );
}
