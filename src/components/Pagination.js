import React from "react";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { PaginationShimmers } from "./Shimmers";

const PaginationComponent = ({ handleChange }) => {
  const loading = useSelector((state) => state.loadingReducer.loading);
  const page = useSelector((state) => state.paginationReducer.page);
  return (
    <>
      {loading ? (
        <Grid sx={{ position: "fixed", bottom: 10 }}>
          <PaginationShimmers />
        </Grid>
      ) : (
        <Grid sx={{ position: "fixed", bottom: 10 }}>
          <Pagination
            page={page + 1}
            count={10}
            size="large"
            variant="outlined"
            color="primary"
            hidePrevButton
            hideNextButton
            onChange={handleChange}
          />
        </Grid>
      )}
    </>
  );
};

export default PaginationComponent;

PaginationComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
