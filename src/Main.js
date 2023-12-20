import { useEffect, useState } from "react";

const Main = () => {
  let numRenders = 0;
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [count, setCount] = useState(0);

  const updateRenderCount = () => {
    numRenders += 1;
    console.log("Render or re-render-- render no is", numRenders);
  };

  useEffect(() => {
    console.log("useEffect1 ran");
  }, []);

  useEffect(() => {
    console.log("look at count effect ran");
  }, [count]);

  useEffect(() => {
    console.log("useEFfect2 ran");
    if (toggleTwo) {
      console.log("This statement is logging cuz toggleTwo is currently true");
    }
  }, [toggleTwo]);

  // useEffect(() => {}, [count]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log(`UseEffect3 with interval number ${count} is running!`);
    }, 1000);
    return () => {
      console.log(
        `UseEffect3 cleanup ran.\nsetInterval number ${count} is being clear`,
      );
      clearInterval(myInterval);
    };
  }, [count]);

  return (
    <div>
      {console.log("render or re-render")}

      <h1>Main Cddddomponent</h1>
      {/* <h2>Toggle one state is: {toggleOne.toString()}</h2> */}
      {/* <h2>Toggle two state is: {toggleTwo.toString()}</h2> */}

      <button onClick={() => setToggleOne(!toggleOne)}>Set Toggle One</button>
      <button onClick={() => setToggleTwo(!toggleTwo)}>Set Toggle Two</button>
      <button
        onClick={() =>
          setCount((prevCount) => {
            console.log("count is", count);
            return prevCount + 1;
          })
        }
      >
        Increment Count
      </button>
    </div>
  );
};

export default Main;
