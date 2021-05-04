import React from "react";
import GridTickets from "./GridTickets";
import { Grid } from "@material-ui/core";
import NavBar from "./NavBar";

function Home() {
  return (
    <div className="main">
      <NavBar />
      <Grid container spacing={2}>
        <GridTickets />
      </Grid>
    </div>
  );
}

export default Home;
