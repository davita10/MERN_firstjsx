import React from "react";

const Main = () => {
  return (
    // JSX
    // JSX IS TRANSPILED INTO ES5 JavaScript via Babel
    <div>
      <h1>Hello Dojo!</h1>
      <>
        <h2 className="my-class">Things I need to do:</h2>
        <ul className="my-class">
          <li>Learn React</li>
          <li>Climb Mt. Everest</li>
          <li>Run a marathon</li>
          <li>Feed the dogs</li>
        </ul>
      </>
    </div>
  );
};

export default Main;
