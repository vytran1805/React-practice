import React, { FormEvent, useRef } from "react";

const Form = () => {
  // to target the value of nameRef, we need to tell TypeScript compiler
  // that we are referencing the HTML Input Element
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person = { name: "", age: 0 };
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    //this nameRef has a single property 'current'. This will return the DOM element that we are referencing
    if (nameRef.current != null) person.name = nameRef.current.value; //get the value of the DOM element that we are referencing
    if (ageRef.current != null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
