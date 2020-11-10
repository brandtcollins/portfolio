import React from "react";
import Col from "../../../Layout/Col/Col";
import Row from "../../../Layout/Row/Row";
import styles from "./ProjectDetails.module.scss";

const ProjectDetails = (props) => {
  const { demo, site, stack, code } = props;
  return (
    <Row style={styles.row}>
      <Col>
        <h4>Stack</h4>
        <p>{stack}</p>
      </Col>
      {code ? (
        <Col>
          <h4>Code</h4>
          <p>
            <a href={code} target="_blank" rel="noopener noreferrer">
              GitHub Repository
            </a>
          </p>
        </Col>
      ) : null}
      <Col>
        <h4>Live Site</h4>
        <p>
          <a
            href={demo ? demo : site}
            target="_blank"
            rel="noopener noreferrer"
          >
            View {demo ? `demo` : `site`}
          </a>
        </p>
      </Col>
    </Row>
  );
};

export default ProjectDetails;
