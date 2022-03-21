import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Col, Row, Form } from "react-bootstrap";
import { FaMoon } from "react-icons/fa";
import { HiSun } from "react-icons/hi";
import { BsFilterLeft } from "react-icons/bs";
import Logo from "../commons/logo";

const HeaderStyles = {};

const Header = () => {
  const [isLightTheme, setThemeIcon] = useState(true);
  const changeTheme = () => {
    setThemeIcon(!isLightTheme);
    const body = document.querySelector("body");

    body.classList.toggle("dark-theme");
  };
  return (
    <>
      <Navbar bg="light" variant="" className="py-3">
        <Container>
          <Link to="/" style={{ cursor: "pointer", textDecoration: "none" }}>
            <Navbar.Brand>
              <Logo />
              Global Tour
            </Navbar.Brand>
          </Link>
          <div>
            {isLightTheme ? (
              <div onClick={changeTheme} className="light-theme-moon">
                <FaMoon size={"1.5em"} />
              </div>
            ) : (
              <div onClick={changeTheme} className="dark-theme-sun">
                <HiSun size={"1.5em"} />
              </div>
            )}
          </div>
        </Container>
      </Navbar>
      <Container className="my-4">
        <Row>
          <Col xs={12} md={6}>
            <Form.Group
              className="mb-3 search-color"
              controlId="formBasicSearch"
            >
              <Form.Control
                type="text"
                placeholder="Search..."
                className="search-color"
              />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Row>
              <Col
                xs={12}
                md={6}
             className={'label'}
              >
                <Form.Label>
                  <BsFilterLeft size={'1.5rem'} className="mr-4"/>
                  Filtered by
                </Form.Label>
              </Col>
              <Col xs={6} md={6}>
                <Form.Select className="search-color">
                  <option value={"worlwide"}>Worlwide</option>
                  <option value={"asia"}>Asia</option>
                  <option value={"africa"}>Africa</option>
                  <option value={"europe"}>Europe</option>
                  <option value={"north-america"}>North-America</option>
                  <option value={"sout-america"}>South America</option>
                  <option value={"australia"}> Australia/Oceania</option>
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Header;
