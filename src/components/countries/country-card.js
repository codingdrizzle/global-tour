import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { FaCity, FaCoins, FaPuzzlePiece } from "react-icons/fa";
import Ghana from '../../assets/ghana.png'

// const [Body, Header, Text] = Card;

const CountryCard = () => {
  return (
    <Card className={"my-3 rounded-3"}>
      <Card.Header>
        <Row>
          <Col xs={12} className={"containerize my-3"}>
            <div
              className={"country-flag"}
              style={{ backgroundImage: `url(${Ghana})` }}
            ></div>
          </Col>

          <Col xs={12} className={"containerize my-3"}>
            <h2 className={"country-name"}>Ghana</h2>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col xs={6}>
            <div className="properties">
              <div className="property my-1">
                <FaCity className="property-icon city" />
                <h4>Capital City</h4>
              </div>
              <div className="property my-1">
                <FaCoins className="property-icon currency"/>
                <h4>Currency</h4>
              </div>
              <div className="property my-1">
                <FaPuzzlePiece className="property-icon puzzle"/>
                <h4>Continent</h4>
              </div>
            </div>
          </Col>
          <Col xs={6}>
            <div className="values">
                <div className={'my-1'}><h4>Accra</h4></div>
                <div className={'my-1'}><h4>Ghana Cedis</h4></div>
                <div className={'my-1'}><h4>Africa</h4></div>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CountryCard;
