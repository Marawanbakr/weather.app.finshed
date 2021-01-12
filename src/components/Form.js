import React from 'react';

const Form = (props) => {
  
    React.useEffect(() => {
       
        //make focus on input

       window.onload = (e) =>{
        e.preventDefault()
           document.getElementById('input').focus();
       }

       onclick = () =>{
        document.getElementById('input2').focus();
    }
       //when onclick makr focus on 2input  

     }
    );        
        return (
        <form onSubmit={props.nemProps}>
                <input 
                    id="input"
                    type="text"
                    name="city"
                    placeholder='Enter your City..'
                />
                <input
                    id='input2'
                    type="text"
                    name="country"
                    placeholder="Enter your Country.."
                />
                <button>
                    Get Weather
                </button>
                
        </form>
   )
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






