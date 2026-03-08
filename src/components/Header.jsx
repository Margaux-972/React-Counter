import calculator from "../assets/calc.png";

const Header = () => {
  return (
    <header>
      <img src={calculator} alt="calc" />
      <h1>React Counter</h1>
    </header>
  );
};
export default Header;
