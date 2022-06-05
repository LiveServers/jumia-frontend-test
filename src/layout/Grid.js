import React from "react";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { increment } from "../redux/reducers/heightReducer";
import LeftPageLayout from "./leftpage/LeftPageLayout";

const LayoutGrid = ({ children, isMobileTablet, setImage }) => {
  let dimensions = React.useRef(null);
  const dispatch = useDispatch();
  React.useEffect(() => {
    const height = dimensions.getBoundingClientRect().height || 0;
    dispatch(increment(height));
  }, [dimensions]);
  return (
    <Box
      ref={(el) => (dimensions = el)} // eslint-disable-next-line no-return-assign
      sx={{
        display: "grid",
        gridTemplateColumns: isMobileTablet ? "1fr" : "30% 70%",
        gridTemplateRows: "1fr",
        width: "100%",
        overflow: "hidden",
      }}
    >
      {isMobileTablet ? (
        <LeftPageLayout isMobileTablet={isMobileTablet} setImage={setImage} />
      ) : (
        <>{children}</>
      )}
    </Box>
  );
};

export default LayoutGrid;

LayoutGrid.propTypes = {
  children: PropTypes.node.isRequired,
};
