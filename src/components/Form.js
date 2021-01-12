import React from "react";

const Form = (props) => {
  const [input1, setInput1] = React.useState("");
  const [input1Done, setInput1Done] = React.useState(false);
  const [input2, setInput2] = React.useState("");

  React.useEffect(() => {
    //make focus on input
    if (!input1Done) {
      window.onload = (e) => {
        e.preventDefault();
        document.getElementById("input1").focus();
      };
    } else if (input1Done) {
      onclick = () => {
        document.getElementById("input2").focus();
      };
      //when onclick makr focus on 2input
    }
  }, [input1Done]);
  const handleSubmit1 = (e) => {
    e.preventDefault();
    console.log("fff");
    setInput1Done(!input1Done);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    const info = {
      input1,
      input2,
    };
    props.nemProps(e, info);
  };
  return (
    <>
      <form onSubmit={handleSubmit1}>
        <input
          id="input1"
          type="text"
          name="city"
          placeholder="Enter your City.."
          value={input1}
          onChange={(e) => {
            setInput1(e.target.value);
          }}
          disabled={input1Done}
        />
        <button type="submit">Enter City</button>
      </form>

      {input1Done && (
        <form onSubmit={handleSubmit2}>
          <input
            id="input2"
            type="text"
            name="country"
            placeholder="Enter your Country.."
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
          <button id="input2" type="submit">
            Get Weather
          </button>
        </form>
      )}
    </>
  );
};
export default Form;

// react-dom.development.js:14169 Uncaught Error: Form(...): Nothing was returned from render. This usually means a return statement is missing. Or, to render nothing, return null.
//     at reconcileChildFibers (react-dom.development.js:14169)

// Failed to compile
// src/components/Form.js
//   Line 8:12:  Expected an assignment or function call and instead saw an expression  no-unused-expressions

// Search for the keywords to learn more about each error.
// This error occurred during the build time and cannot be dismissed.

// index.js:1 src/components/Form.js
//   Line 8:12:  Expected an assignment or function call and instead saw an expression  no-unused-expressions

// Search for the keywords to learn more about each error.
// console.<computed> @ index.js:1
// handleErrors @ webpackHotDevClient.js:174
// push../node_modules/react-dev-utils/webpackHotDevClient.js.connection.onmessage @ webpackHotDevClient.js:213
