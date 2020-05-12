import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";

import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import MessageBox from "../../components/MessageBox";

export default function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [renderAmount, setRenderAmount] = useState(0);

  useEffect(() => {
    if (renderAmount === 1) history.push("/");
    setRenderAmount(renderAmount + 1);
  }, [token, history]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(username, password));

    setUsername("");
    setPassword("");
  }

  return (
    <>
      <MessageBox />
      <Container>
        <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
          <h1 className="mt-5 mb-5">Signup</h1>

          <Form.Group controlId="formBasicUsernam">
            <Form.Label>Username</Form.Label>
            <Form.Control
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              type="username"
              placeholder="Enter username"
              required
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mt-5">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Sign up
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
}
