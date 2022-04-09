import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CountryCard from "./country-card";
import axios from "axios";

export default function Countries() {
  var names = ["Kwaku", "Aba"];
  for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
  }

  // API KEY - f5ee74f725fc90e2ce5ae10315c06a42
  // Countries Data fetch
  useEffect(() => {
    const fetchCountries = () => {
      const url = "https://api.countrylayer.com/v2/all";

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      // Add baseURL
      axios.defaults.baseURL = "https://api.countrylayer.com/v2/all";
      // Add Your Key Here!!!
      axios.defaults.headers.common["Authorization"] = "f5ee74f725fc90e2ce5ae10315c06a42";

      axios({ method: "get", url: url, config })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.err("Theres an error somewhere" + err));
    };
    fetchCountries();
  }, []);

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
