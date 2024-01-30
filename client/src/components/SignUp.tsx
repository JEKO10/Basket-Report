import { useState } from "react";
import { Form } from "../assets/style/Form.style";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  const addUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== passConfirm) {
      alert("Password and Password Confirmation do not match");
      return;
    }

    axios
      .post("http://localhost:3001/register", {
        username,
        email,
        password,
      })
      .then(() => {
        alert("Success!");
      })
      .catch(() => {
        alert("Something went wrong!");
      });
  };

  return (
    <Form onSubmit={addUser}>
      <div>
        <label>Username</label>
        <input
          type="text"
          placeholder="Username"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
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
      <div>
        <label>Password Confirmation</label>
        <input
          type="password"
          placeholder="Password Confirmation"
          onChange={(event) => setPassConfirm(event.target.value)}
        />
      </div>
      <button type="submit">Create an account</button>
    </Form>
  );
};

export default SignUp;
