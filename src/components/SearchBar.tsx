import { Box, Button, TextField } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
  loading?: boolean;
};

export default function SearchBar({
  value,
  onChange,
  onSearch,
  loading = false,
}: SearchBarProps) {

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", gap: 1, mb: 3 }}
    >
      <TextField
        fullWidth
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Pesquise IA, agentes, React..."
        size="medium"
      />

      <Button
        type="submit"
        variant="contained"
        disabled={loading || !value.trim()}
        startIcon={<SearchRoundedIcon />}
      >
        Buscar
      </Button>
    </Box>
  );
}