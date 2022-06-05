import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useRouter } from "next/router";
import Search from "./Search";

export default function AppHeader({ isMobileTablet }) {
  const router = useRouter();
  const [searchString, setSearchString] = React.useState("");
  const handleBack = () => {
    router.back();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            wrap="nowrap"
            direction="row"
          >
            <Box>
              {isMobileTablet && router.pathname === "/mobile-view" ? (
                <IconButton
                  onClick={() => handleBack()}
                  type="button"
                  aria-label="search"
                >
                  <KeyboardBackspaceIcon />
                </IconButton>
              ) : (
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  NYT NEWS
                </Typography>
              )}
            </Box>
            {router.pathname !== "/mobile-view" && (
              <Box>
                <Search
                  searchString={searchString}
                  setSearchString={setSearchString}
                  isMobileTablet={isMobileTablet}
                />
              </Box>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
