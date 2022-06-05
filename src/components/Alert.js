import React from "react";
import Alert from "@mui/material/Alert";
import PropTypes from "prop-types";

const AlertComponent = ({ message, severity }) => {
  return (
    <>
      <Alert severity={severity}>{message}</Alert>
    </>
  );
};
export default AlertComponent;

AlertComponent.propTypes = {
  message: PropTypes.string.isRequired,
  severity: PropTypes.string.isRequired,
};
