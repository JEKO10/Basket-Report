import { Sports as Container } from "../assets/style/Sports.style";
import football from "../assets/images/football.jpg";
import bball from "../assets/images/bball.jpg";
import tennis from "../assets/images/tennis.jpg";
import mma from "../assets/images/mma.jpg";

const Sports = () => {
  return (
    <Container>
      <h2>Pick your sport</h2>
      <article>
        <div>
          <img src={football} alt="image" />
        </div>
        <div>
          <img src={bball} alt="image" />
        </div>
        <div>
          <img src={tennis} alt="image" />
        </div>
        <div>
          <img src={mma} alt="image" />
        </div>
      </article>
    </Container>
  );
};

export default Sports;
