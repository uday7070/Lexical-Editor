import { Grid, withTheme } from "@mui/material";
import React from "react";
import pluginsList from "./ToolbarIcon";
import UseListener from "./UseListener";

const Toolbar = () => {
  const { onClick } = UseListener();
  return (
    <Grid
      container
      sx={{ background: "white", py: 1, px: 1 }}
      justifyContent={"space-between"}
    >
      {pluginsList.map((plugin) => (
        <Grid item key={plugin.id}>
          <plugin.Icon onClick={() => onClick(plugin.event)} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Toolbar;
