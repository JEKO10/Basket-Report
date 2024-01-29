import { GlobalStyles } from "./assets/style/GlobalStyles";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import Sports from "./components/Sports";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Sports />
      <SignUp />
    </>
  );
}

export default App;
