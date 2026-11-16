import { CircularProgress, Stack, Typography } from "@mui/material";
type LoadingStateProps = { message?: string };
export default function LoadingState({
  message = "Carregando notícias...",
}: LoadingStateProps) {
  return (
    <Stack sx={{ py: 7, alignItems: "center", gap: 2 }}>
      <CircularProgress color="primary" />
      <Typography color="text.secondary">{message}</Typography>
    </Stack>
  );
}
