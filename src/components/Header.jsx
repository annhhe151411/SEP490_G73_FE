import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";

const defaultTheme = createTheme();

const Header = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="" sx={{ height: "100vh" }}>
        <CssBaseline />
      </Grid>
    </ThemeProvider>
  );
};

export default Header;
