import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Image from "../../components/Image";

const RightPageLayout = ({ setImage, image }) => {
  const theme = useTheme();
  const [dimension, setDimension] = React.useState({ width: 0, height: 0 });
  let dimensions = React.useRef(null);
  React.useEffect(() => {
    if (dimensions !== null) {
      const width = dimensions.getBoundingClientRect().width || 0;
      const height = dimensions.getBoundingClientRect().height || 0;
      setDimension({
        width,
        height,
      });
    }
  }, [dimensions]);
  const details = useSelector((state) => state.cardReducer.details);
  return (
    <>
      <Grid
        ref={(el) => (dimensions = el)}
        style={{
          overflow: "auto",
          backgroundColor: theme.palette.secondary.white,
          width: "100%",
          height: "100vh",
          padding: theme.spacing(3),
        }}
        container
        alignItems="flex-start"
        direction="column"
        justifyContent="flex-start"
        wrap="nowrap"
      >
        {Object.keys(details).length > 0 ? (
          <>
            <Typography
              sx={{
                fontSize: 24,
                color: theme.palette.grey[900],
                marginBottom: theme.spacing(1.5),
              }}
              variant="body1"
            >
              {details?.abstract}
            </Typography>
            <Box>
              <Image
                onError={(e) => {
                  e.target.src = "/images/placeholder.png";
                  setImage("/images/placeholder.png");
                }}
                src={
                  !image
                    ? `https://static01.nyt.com/${details?.multimedia[0]?.url}`
                    : image
                }
                alt="Image Content"
                height={dimension.height / 2}
                width={dimension.width}
              />
            </Box>
            <Typography
              sx={{
                fontSize: 18,
                color: theme.palette.grey[900],
                marginTop: theme.spacing(1.5),
              }}
              variant="body1"
            >
              {details?.lead_paragraph}
            </Typography>
          </>
        ) : (
          <Typography variant="subtitle1">
            Please click on a card to view in detail
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default RightPageLayout;

RightPageLayout.propTypes = {
  setImage: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
};
