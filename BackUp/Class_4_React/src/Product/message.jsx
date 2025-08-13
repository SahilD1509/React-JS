import React, { useState, Fragment } from "react";

let Message = () => {
    const [msg, setMsg] = useState("Hello!...");

    const gmHandler = () => {
        setMsg("Good Morning!");
    };

    const gnHandler = () => {
        setMsg("Good Night!");
    };

    return (
        <Fragment>
            <h3>Message Component</h3>
            <h3>Msg value: {msg}</h3>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
        </Fragment>
    );
};

export default Message;
