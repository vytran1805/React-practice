import React, { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

// const handleClick = ({ children }: Props) => {
//   setExpand(true);
//   <p>{children}</p>;
// };
const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);
  // if the length of the children is less than maxChars, display the text
  if (children.length <= maxChars) return <p>{children}</p>;
  // otherwise, declare a text const, set it to substring of children from index 0 to index maxChars
  const text = isExpanded ? children : children.substring(0, maxChars);
  // return the text with three dots to show that this text is summarized
  return (
    <p>
      {text}...
      <button
        onClick={() => {
          setExpanded(!isExpanded);
        }}
      >
        {isExpanded ? "Less" : "More"}
      </button>
    </p>
  );
};

export default ExpandableText;
