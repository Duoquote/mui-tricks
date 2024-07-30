import React from "react";

import { Box, Container, Typography, Grid, Paper, Divider, Stack, Link } from "@mui/material";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import components from "./components";

const Editor = ({ id, name, code, scope, editorWidth = 6 }) => {
  return (
    <Paper variant="outlined" id={id}>
      <Typography variant="h6" sx={{ px: 2, py: 1 }}>
        <Link href={`#${id}`} color="inherit" underline="none">
          {name}
        </Link>
      </Typography>
      <Divider />
      <Box sx={{ p: 2 }}>
        <LiveProvider code={code} scope={scope} noInline>
          <Grid container spacing={2}>
            <Grid item xs={editorWidth}>
              <Box sx={{ maxHeight: 500, overflowY: "auto", borderRadius: 1 }}>
                <LiveEditor theme={themes.vsDark} className="font-mono" />
              </Box>
            </Grid>
            <Grid item xs={12 - editorWidth}>
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
                <LiveError />
                <LivePreview />
              </Box>
            </Grid>
          </Grid>
        </LiveProvider>
      </Box>
    </Paper>
  )
};

const App = () => {

  return (
    <Container maxWidth="lg">
      <Typography sx={{ pt: 6, pb: 4 }} variant="h4" align="center">
        <b>Mui Tricks</b> /w Live Editor
      </Typography>
      <Stack spacing={2}>
        {
          components.map((component, i) => (
            <Editor
              key={i}
              {...component}
            />
          ))
        }
      </Stack>
    </Container>
  )
};

export default App;