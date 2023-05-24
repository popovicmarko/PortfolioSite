import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 style={{ paddingBottom: "20px" }} data-aos="fade-right">
        My <span className="primary-header">GitHub Calendar</span>
      </h1>
      <div className="gitContainer" data-aos="fade-up">
        <GitHubCalendar
          username="popovicmarko"
          color="#1872B6"
          blockSize={15}
          blockMargin={5}
          fontSize={16}
        />
      </div>
    </Row>
  );
}

export default Github;
