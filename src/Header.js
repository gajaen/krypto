import React from "react";
import {
  AppBar,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { blue } from "@material-ui/core/colors";

const styles = {
  menuButton: {},
  title: {},
  appBarStyle: {
    backgroundColor: "#000000",
  },
};

function Header(props) {
  return (
    <div>
      <Grid container direction="row" justify="center" alignItems="center">
        <AppBar color="transparent" elevation={0}>
          <Toolbar justify="flex-end">
            <Grid container item justify="flex-end" xs={12} spacing={1}>
              <Button size={"medium"}>
                <MenuIcon style={{ color: "#9ca9b3" }} fontSize={"default"} />
              </Button>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </div>
  );
}

export default Header;
