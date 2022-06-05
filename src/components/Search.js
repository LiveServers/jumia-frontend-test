import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setKeyword } from "../redux/reducers/searchReducer";

const SearchComponent = React.memo(({ isMobileTablet, setSearchString, searchString }) => {
  const dispatch = useDispatch();
  const handleChange = React.useCallback((e) => {
    setSearchString(e.target.value);
  }, []);

  const handleSearch = React.useCallback(() => {
    if (searchString) {
      dispatch(setKeyword(searchString));
      setSearchString("");
    }
  }, [searchString]);

  return (
    <>
      <Paper
        id="paper"
        component="form"
        onSubmit={(e) => e.preventDefault()}
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: isMobileTablet ? 200 : 400,
        }}
      >
        <InputBase
          id="input"
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search ... "
          inputProps={{ "aria-label": "search api" }}
          value={searchString}
          type="text"
          onChange={(e) => handleChange(e)}
        />
        <IconButton
          id="icon"
          onClick={() => handleSearch()}
          type="button"
          sx={{ p: "10px" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
});

export default SearchComponent;
