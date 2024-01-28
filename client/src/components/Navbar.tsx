import image from "../assets/images/image.jpg";
import { Navbar as Nav } from "../assets/style/Navbar.style";

const Navbar = () => {
  return (
    <Nav>
      <img src={image} alt="Logo" />
      <article>
        <button>Log in</button>
        <button>Sign up</button>
      </article>
    </Nav>
  );
};

export default Navbar;
