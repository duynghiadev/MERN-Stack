import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const About = () => {
  return (
    <Row className="mt-5" style={{ marginRight: 0 }}>
      <Col className="text-center">
        <Button
          variant="primary"
          href="https://github.com/duynghiadev"
          size="lg"
        >
          Visit my github for more project
        </Button>
      </Col>
    </Row>
  );
};

export default About;
