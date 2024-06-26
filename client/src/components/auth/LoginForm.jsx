import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const LoginForm = () => {
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
      </Form>

      <Button variant="success" type="submit">
        Login
      </Button>

      <p>
        Don't have an account?
        <Link to="/register">
          <Button variant="info" size="sm" className="ml-2 my-4">
            Register
          </Button>
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
