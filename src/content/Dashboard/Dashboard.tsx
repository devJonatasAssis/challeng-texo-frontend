"use client";

import "./styles.css";

import Header from "@/components/Header/Header";
import ListTopThreeStudiosWinners from "./components/ListTopThreeStudiosWinners";
import ListYearsMultipleWinners from "./components/ListYearsMultipleWinners";
import ListProducersLongShortInterval from "./components/ListProducersLongShortInterval";
import ListMovieWinnersByYear from "./components/ListMovieWinnersByYear";
import Grid from "@/components/Grid";
import { Col } from "@/components/Col";

export default function Dashboard() {
  return (
    <div>
      <Header />

      <div className="row-content">
        <Grid>
          <Col>
            <ListYearsMultipleWinners />
          </Col>

          <Col>
            <ListTopThreeStudiosWinners />
          </Col>
        </Grid>
        <Grid>
          <Col>
            <ListProducersLongShortInterval />
          </Col>

          <Col>
            <ListMovieWinnersByYear />
          </Col>
        </Grid>
      </div>
    </div>
  );
}
