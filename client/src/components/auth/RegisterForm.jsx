import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <>
      <Form className="my-4">
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            required
          />
        </Form.Group>
      </Form>

      <Button variant="success" type="submit">
        Register
      </Button>

      <p>
        Already have an account?
        <Link to="/login">
          <Button variant="info" size="sm" className="ml-2 my-4">
            Login
          </Button>
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
