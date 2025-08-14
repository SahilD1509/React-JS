/* import React, { useState } from 'react';

const Message = () => {
  const [msg, setMsg] = useState("Hello!...");

  const gmHandler = () => {
    setMsg("Good Morning");
  };

  const gaHandler = () => {
    setMsg("Good Afternoon");
  };

  const geHandler = () => {
    setMsg("Good Evening");
  };

  const gnHandler = () => {
    setMsg("Good Night");
  };

  return (
    <>
      <h3>Message: {msg}</h3>
      <button onClick={gmHandler}>Good Morning</button>
      <button onClick={gaHandler}>Good Afternoon</button>
      <button onClick={geHandler}>Good Evening</button>
      <button onClick={gnHandler}>Good Night</button>
    </>
  );
};

export default Message;
 */

import React, { useState } from 'react';

const Message = () => {
  const [msg, setMsg] = useState("Hello!.....");

  const updateMessage = (newMsg) => {
    setMsg(newMsg);
  };

  return (
    <>
      <h3>Message: {msg}</h3>

      <button onClick={updateMessage.bind(null, "Good Morning")}>GM</button>
      <button onClick={updateMessage.bind(null, "Good Afternoon")}>GA</button>
      <button onClick={updateMessage.bind(null, "Good Evening")}>GE</button>
      <button onClick={updateMessage.bind(null, "Good Night")}>GN</button>
    </>
  );
};

export default Message;

