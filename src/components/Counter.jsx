import plusSign from "../assets/plus.png";
import minusSign from "../assets/minus.png";

const Counter = ({ counter, setCounter }) => {
  return (
    <section>
      <div className="button">
        <div className="minus">
          {counter !== 0 && (
            <button onClick={() => setCounter((counter) => counter - 1)}>
              <img src={minusSign} alt="-" />
            </button>
          )}
        </div>
        <p>{counter}</p>
        <div className="plus">
          {counter !== 10 && (
            <button onClick={() => setCounter((counter) => counter + 1)}>
              <img src={plusSign} alt="+" />
            </button>
          )}
        </div>
      </div>
      <button className="reset" onClick={() => setCounter(0)}>
        Reset
      </button>
    </section>
  );
};
export default Counter;
