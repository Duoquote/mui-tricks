import React from "react";

import { Box, Container, Typography, Grid, Paper, Divider, Stack } from "@mui/material";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { themes } from "prism-react-renderer";
import components from "./components";

const Editor = ({ name, code, scope, editorWidth = 6 }) => {
  return (
    <Paper variant="outlined" id={name}>
      <Typography variant="h6" sx={{ px: 2, py: 1 }}>
        {name}
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
              name={component.name}
              code={component.code}
              scope={component.scope}
              editorWidth={component.editorWidth}
            />
          ))
        }
      </Stack>
    </Container>
  )
};

export default App;