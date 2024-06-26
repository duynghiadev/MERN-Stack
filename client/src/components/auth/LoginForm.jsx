import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const LoginForm = () => {
  // Context
  const { loginUser } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });

  const { password, username } = loginForm;

  const onChangeLoginForm = (event) =>
    setLoginForm({
      ...loginForm,
      [event.target.name]: event.target.value,
    });

  const login = async (event) => {
    event.preventDefault();

    try {
      const loginData = await loginUser(loginForm);
      console.log("loginData:", loginData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form className="my-4" onSubmit={login}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={username}
            onChange={onChangeLoginForm}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            value={password}
            onChange={onChangeLoginForm}
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
