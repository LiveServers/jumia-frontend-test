import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import MainCard from "../../components/Card";
import Filter from "../../components/Filter";
import PaginationComponent from "../../components/Pagination";
import { setPage } from "../../redux/reducers/paginationReducer";

const LeftPageLayout = ({ setImage, isMobileTablet }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const pageHeight = useSelector((state) => state.heightReducer.height);
  const [dimension, setDimension] = React.useState({ width: 0, height: 0 });
  let dimensions = React.useRef(null);
  React.useEffect(() => {
    const width = dimensions.getBoundingClientRect().width || 0;
    const height = dimensions.getBoundingClientRect().height || 0;
    setDimension({
      width,
      height,
    });
  }, [dimensions]);
  const handleChange = (e, page) => {
    dispatch(setPage(page - 1));
  };
  return (
    <Box
      ref={(el) => (dimensions = el)} // eslint-disable-next-line no-return-assign
      sx={{
        flexGrow: 1,
        padding: theme.spacing(3),
        overflow: "auto",
        height: isMobileTablet ? "100%" : pageHeight - 100,
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Filter />
        <MainCard
          isMobileTablet={isMobileTablet}
          setImage={setImage}
          dimension={dimension}
        />
        <PaginationComponent handleChange={handleChange} />
      </Grid>
    </Box>
  );
};

export default React.memo(LeftPageLayout);

LeftPageLayout.propTypes = {
  setImage: PropTypes.func.isRequired,
};
