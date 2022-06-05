import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import Box from "@mui/material/Box";
import { CardShimmers } from "./Shimmers";
import reduceText from "../utils/reduceText";
import { setResults } from "../redux/reducers/cardReducer";
import AlertComponent from "./Alert";

const MainCard = ({ dimension, setImage, isMobileTablet }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const theme = useTheme();
  const loading = useSelector((state) => state.loadingReducer.loading);
  const data = useSelector((state) => state.dataReducer.result);
  const handleClick = (item) => {
    if (isMobileTablet) {
      dispatch(setResults(item));
      setImage("");
      router.push("/mobile-view");
    } else {
      dispatch(setResults(item));
      setImage("");
    }
  };

  return (
    <>
      {loading ? (
        <>
          {/* eslint-disable-next-line no-unused-vars */}
          {[1, 2, 3, 4, 5].map((_) => (
            <CardShimmers key={nanoid()} dimension={dimension} />
          ))}
        </>
      ) : (
        <>
          {data && Array.isArray(data) && data.length > 0 ? (
            data.map((item) => (
              <Card
                onClick={() => handleClick(item)}
                key={nanoid()}
                sx={{ marginBottom: 2 }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  wrap="nowrap"
                  sx={{ height: 95 }}
                >
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="center"
                    sx={{ width: 82, height: 95, marginRight: 2 }}
                  >
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img
                      onError={(e) =>
                        (e.target.src = "/images/placeholder.png")
                      }
                      src={`https://static01.nyt.com/${item?.multimedia[0]?.url}`}
                      alt="image placeholder"
                      height={95}
                      width={81}
                    />
                  </Grid>
                  <Grid
                    container
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    wrap="nowrap"
                    sx={{
                      height: 95,
                      padding: "18px 16px 3px 0",
                    }}
                  >
                    <Typography variant="subtitle1">
                      {reduceText(item?.abstract)}
                    </Typography>
                    <Typography
                      sx={{ color: theme.palette.grey[600] }}
                      variant="body1"
                    >
                      {reduceText(item?.lead_paragraph)}
                    </Typography>
                    <Typography
                      sx={{ color: theme.palette.grey[600] }}
                      variant="body1"
                    >
                      {reduceText(item?.source)}
                    </Typography>
                  </Grid>
                </Grid>
              </Card>
            ))
          ) : (
            <>
              <Box sx={{ width: "100%" }}>
                <AlertComponent
                  severity="warning"
                  message="There were no results found for your query"
                />
              </Box>
            </>
          )}
        </>
      )}
    </>
  );
};

export default React.memo(MainCard);
