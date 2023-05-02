import React from "react";
let count = 0;
// PascalCasing
const Message = () => {
  console.log("Message called ", count);
  count++;
  // JSX: Javascrip XML
  return <div>Message {count}</div>;
};
export default Message;
