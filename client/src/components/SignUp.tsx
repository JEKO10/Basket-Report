import { Form } from "../assets/style/Form.style";

const SignUp = () => {
  return (
    <Form>
      <div>
        <label>Username</label>
        <input type="text" placeholder="Username" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" placeholder="Email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" placeholder="Password" />
      </div>
      <div>
        <label>Password Confirmation</label>
        <input type="password" placeholder="Password Confirmation" />
      </div>
      <button type="submit">Create an account</button>
    </Form>
  );
};

export default SignUp;
