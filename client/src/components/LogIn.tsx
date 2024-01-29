import { Form } from "../assets/style/Form.style";

const LogIn = () => {
  return (
    <Form>
      <div>
        <label>Username or email</label>
        <input type="text" placeholder="Username or email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </div>
      <button type="submit">Log in</button>
    </Form>
  );
};

export default LogIn;
