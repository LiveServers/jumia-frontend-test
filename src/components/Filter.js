import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { FilterShimmers } from "./Shimmers";
import { setFilter } from "../redux/reducers/filterReducer";

const FilterCard = ({ text, theme, onClick, active, filter }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: "pointer",
        marginRight: 3,
        borderRadius: 10,
        backgroundColor:
          active === filter
            ? theme.palette.primary.main
            : theme.palette.secondary.secondaryGrey,
        padding: theme.spacing(1),
        width: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="body1">{text}</Typography>
    </Box>
  );
};
FilterCard.propTypes = {
  text: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.string,
  filter: PropTypes.string.isRequired,
};

const Filter = () => {
  const theme = useTheme();
  const [active, setActive] = React.useState("");
  const loading = useSelector((state) => state.loadingReducer.loading);
  const dispatch = useDispatch();
  const filterObjectArray = [
    {
      text: "Source",
      filter: "source",
    },
    {
      text: "Subject",
      filter: "subject",
    },
    {
      text: "Headline",
      filter: "headline",
    },
    {
      text: "Persons",
      filter: "persons",
    },
  ];

  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
    setActive(filter);
  };
  return (
    <>
      {loading ? (
        <FilterShimmers />
      ) : (
        <>
          <Grid
            sx={{ marginBottom: 3 }}
            container
            direction="column"
            alignItems="flex-start"
            justifyContent="center"
            wrap="nowrap"
          >
            <Typography
              variant="subtitle1"
              sx={{ marginBottom: theme.spacing(1) }}
            >
              Filter By:
            </Typography>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="flex-start"
              wrap="nowrap"
            >
              {filterObjectArray.map(({ text, filter }) => (
                <FilterCard
                  filter={filter}
                  active={active}
                  onClick={() => handleFilter(filter)}
                  key={nanoid()}
                  text={text}
                  theme={theme}
                />
              ))}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default Filter;
