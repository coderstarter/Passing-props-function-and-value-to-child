import React from "react";
// import { ReactDOM } from "react";
// import { useState } from "react";

const App = (props) =>  {
    return(
        <div style={{"display": "flex"}}>
            <button onClick={() => props.update(props.value + 1)}>Increment</button>
            <h4>{props.value}</h4>
            <button onClick={()=> props.update(props.value-1)}>Decrement</button>
        </div>
    )
}
export default App;