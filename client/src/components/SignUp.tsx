import { useState } from "react";
import { Form } from "../assets/style/Form.style";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passConfirm, setPassConfirm] = useState("");
  const [signupStatus, setSignupStatus] = useState("");

  const addUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!username || !email || !password || !passConfirm) {
      setSignupStatus("All fields are required");
      return;
    }

    if (password !== passConfirm) {
      setSignupStatus("Password and Password Confirmation do not match");
      return;
    }

    axios
      .post("http://localhost:3001/register", {
        username,
        email,
        password,
      })
      .then((response) => {
        if (response.data.message) {
          let message = response.data.message;

          if (typeof message === "string") {
            if (message.includes("username") || message.includes("email")) {
              setSignupStatus("Username or Email is already taken");
            } else {
              setSignupStatus(message);
            }
          } else {
            setSignupStatus("Success!");
          }
        } else {
          setSignupStatus("Success!");
        }
      })
      .catch((err) => {
        console.log(err);
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
      <p>{signupStatus}</p>
    </Form>
  );
};

export default SignUp;
