import React from "react";
import { Container, Row, Col, Media, Badge, Alert } from "react-bootstrap";
import "./textResultStyle.css";
const TextResults = ({ confirmed, deaths, recovered, lastUpdate }) => {
  console.log(confirmed, lastUpdate);
  return (
    <Container className="makeWhite">
      <Row>
        <Col>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://live.staticflickr.com/65535/49666506826_52cced31d3_b.jpg"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5 className="bold">INFECTED</h5>
              <div className="large-font eighty-percent-width">
                <h1>
                  <Badge variant="secondary">{confirmed.value}</Badge>
                </h1>

                <Alert variant="danger" className="apply-min-width">
                  Deaths: {deaths.value}
                </Alert>
                <Alert variant="warning" className="apply-min-width">
                  {" "}
                  <svg
                    className="bi bi-x-circle"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"
                      clip-rule="evenodd"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"
                      clip-rule="evenodd"
                    />
                  </svg>{" "}
                  Active: {confirmed.value - deaths.value}
                </Alert>
              </div>
            </Media.Body>
          </Media>
        </Col>
        <Col>
          <Media>
            <img
              width={64}
              height={64}
              className="mr-3"
              src="https://www.orissapost.com/wp-content/uploads/2020/04/coronavirus-negative.jpg"
              alt="Generic placeholder"
            />
            <Media.Body>
              <h5>RECOVERED</h5>
              <div className="large-font eighty-percent-width">
                <Alert variant="success" className="apply-min-width">
                  <svg
                    className="bi bi-shield-lock"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.443 1.991a60.17 60.17 0 00-2.725.802.454.454 0 00-.315.366C1.87 7.056 3.1 9.9 4.567 11.773c.736.94 1.533 1.636 2.197 2.093.333.228.626.394.857.5.116.053.21.089.282.11A.73.73 0 008 14.5c.007-.001.038-.005.097-.023.072-.022.166-.058.282-.111.23-.106.525-.272.857-.5a10.197 10.197 0 002.197-2.093C12.9 9.9 14.13 7.056 13.597 3.159a.454.454 0 00-.315-.366c-.626-.2-1.682-.526-2.725-.802C9.491 1.71 8.51 1.5 8 1.5c-.51 0-1.49.21-2.557.491zm-.256-.966C6.23.749 7.337.5 8 .5c.662 0 1.77.249 2.813.525a61.09 61.09 0 012.772.815c.528.168.926.623 1.003 1.184.573 4.197-.756 7.307-2.367 9.365a11.191 11.191 0 01-2.418 2.3 6.942 6.942 0 01-1.007.586c-.27.124-.558.225-.796.225s-.526-.101-.796-.225a6.908 6.908 0 01-1.007-.586 11.192 11.192 0 01-2.417-2.3C2.167 10.331.839 7.221 1.412 3.024A1.454 1.454 0 012.415 1.84a61.11 61.11 0 012.772-.815z"
                      clip-rule="evenodd"
                    />
                    <path d="M9.5 6.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M7.411 8.034a.5.5 0 01.493-.417h.156a.5.5 0 01.492.414l.347 2a.5.5 0 01-.493.585h-.835a.5.5 0 01-.493-.582l.333-2z" />
                  </svg>{" "}
                  {recovered.value}
                </Alert>
                <h5>
                  Last Updated: <Badge variant="secondary">{lastUpdate}</Badge>
                </h5>
              </div>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </Container>
  );
};

export default TextResults;
