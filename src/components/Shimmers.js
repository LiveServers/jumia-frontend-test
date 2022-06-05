import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { nanoid } from "nanoid";

export const CardShimmers = ({ dimension }) => {
  return (
    <Grid
      sx={{ width: "100%", height: 95, marginBottom: 1 }}
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      wrap="nowrap"
    >
      <Skeleton
        variant="rectangular"
        width={Math.floor(dimension.width / 2)}
        height={95}
      />
      <Grid
        sx={{ width: "100%" }}
        container
        direction="column"
        alignItems="flex-start"
        justifyContent="center"
        wrap="nowrap"
      >
        {/* eslint-disable-next-line no-unused-vars */}
        {[1, 2, 3, 4].map((_) => (
          <Box key={nanoid()} sx={{ marginBottom: 0.5 }}>
            <Skeleton width={dimension.width / 2} variant="text" />
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export const FilterShimmers = ({ dimension }) => {
  return (
    <Grid
      sx={{ width: "100%", height: 95 }}
      container
      direction="column"
      alignItems="flex-start"
      justifyContent="center"
      wrap="nowrap"
    >
      <Box sx={{ width: 80 }}>
        <Skeleton variant="text" width={Math.floor(dimension / 10)} />
      </Box>
      <Grid
        sx={{ width: "100%" }}
        container
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        wrap="nowrap"
      >
        {/* eslint-disable-next-line no-unused-vars */}
        {[1, 2, 3, 4].map((_) => (
          <Box key={nanoid()} sx={{ marginRight: 0.5 }}>
            <Skeleton width={80} height={24} variant="rectangular" />
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export const PaginationShimmers = () => {
  return (
    <Grid
      sx={{ width: "100%" }}
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
      wrap="nowrap"
    >
      {/* eslint-disable-next-line no-unused-vars */}
      {[1, 2, 3, 4, 5, 6, 7].map((_) => (
        <Box key={nanoid()} sx={{ marginRight: 0.5 }}>
          <Skeleton variant="circular" width={40} height={40} />
        </Box>
      ))}
    </Grid>
  );
};
