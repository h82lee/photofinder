import { Button, TextField, Container, Grid } from "@mui/material";
import { useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    props.onSubmit(searchTerm);
    setSearchTerm("");
  };

  return (
    <Container>
      <form onSubmit={onFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
            {" "}
            <TextField
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" sx={{ mt: 1 }} type="submit">
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default SearchBar;
