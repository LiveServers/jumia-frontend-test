import React from "react";
import Proptypes from "prop-types";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import AppHeader from "../components/AppHeader";
// eslint-disable-next-line import/no-named-as-default,import/no-named-as-default-member
import LayoutGrid from "./Grid";
import AlertComponent from "../components/Alert";

const MainLayout = ({ children, isMobileTablet, setImage }) => {
  const theme = useTheme();
  const alertDetails = useSelector((state) => state.alertReducer.details);
  return (
    <Box sx={{ backgroundColor: theme.palette.secondary.main }}>
      <AppHeader isMobileTablet={isMobileTablet} />
      {alertDetails ? (
        <Box sx={{ width: "100%" }}>
          <AlertComponent
            severity="error"
            message="An error occured, please try again later"
          />
        </Box>
      ) : (
        <LayoutGrid setImage={setImage} isMobileTablet={isMobileTablet}>{children}</LayoutGrid>
      )}
    </Box>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node.isRequired,
};
