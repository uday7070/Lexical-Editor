import logo from "./logo.svg";
import "./App.css";
import Editor from "./components/Editor";
import { ThemeProvider } from "@emotion/react";
import theme from "./theme";
import { CssBaseline, Grid, Typography } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        sx={{
          minHeight: "100vh",
          mt: 10,
          alignItems: "center",
        }}
        flexDirection="column"
      >
        <Grid item>
          <Typography variant="h3">Lexical Editor</Typography>
        </Grid>
        <Grid item sx={{ width: "80%", mt: 5 }}>
          <Editor />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
