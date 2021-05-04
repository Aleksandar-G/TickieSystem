import React from "react";
import GridTickets from "../Reusable/GridTickets";
import { Grid } from "@material-ui/core";
import NavBar from "../Reusable/NavBar";

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
