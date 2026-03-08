import { useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header />
      <Counter counter={counter} setCounter={setCounter} />
      <Footer />
    </>
  );
}

export default App;
