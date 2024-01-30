import { useState } from "react";
import { Form } from "../assets/style/Form.style";
import axios from "axios";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginstatus, setLoginstatus] = useState("");

  const loginUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .post("http://localhost:3001/login", { email, password })
      .then((response) => {
        if (response.data.message) {
          setLoginstatus(response.data.message);
        } else {
          setLoginstatus("Welcome " + response.data[0].username);
        }
      });
  };

  return (
    <Form onSubmit={loginUser}>
      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Log in</button>
      <p>{loginstatus}</p>
    </Form>
  );
};

export default LogIn;
