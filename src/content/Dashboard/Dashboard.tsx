"use client";

import "./styles.css";

import Header from "@/components/Header";
import ListTopThreeStudiosWinners from "./components/ListTopThreeStudiosWinners";
import ListYearsMultipleWinners from "./components/ListYearsMultipleWinners";
import ListProducersLongShortInterval from "./components/ListProducersLongShortInterval";
import ListMovieWinnersByYear from "./components/ListMovieWinnersByYear";
import { Col, Row } from "react-flexbox-grid";

export default function Dashboard() {
  return (
    <div>
      <Header />

      <Row className="row-content">
        <Col xs={12} md={6}>
          <ListYearsMultipleWinners />
        </Col>
        <Col xs={12} md={6}>
          <ListTopThreeStudiosWinners />
        </Col>
        <Col xs={12} md={6}>
          <ListProducersLongShortInterval />
        </Col>
        <Col xs={12} md={6}>
          <ListMovieWinnersByYear />
        </Col>
      </Row>
    </div>
  );
}
