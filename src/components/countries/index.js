import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountryCard from "./country-card";
import axios from "axios";

export default function Countries() {
  // Data fetch 
  useEffect( () => {
    const fetchCountries = () => {
      var options = {
        method: "GET",
        url: "https://wft-geo-db.p.rapidapi.com/v1/geo/countries",
        headers: {
          "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
          "x-rapidapi-key":
            "99b4bdad24msh7cfd8730f2d7f32p13be94jsn57aac7cab2c1",
        },
      };
      axios
        .request(options)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
    fetchCountries()
  }
  ,[])
// Data fetch
  return (
    <Container>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <CountryCard />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CountryCard />
        </Col>
        <Col xs={12} md={6} lg={4}>
          <CountryCard />
        </Col>
      </Row>
    </Container>
  );
}
