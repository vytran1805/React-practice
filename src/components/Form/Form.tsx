import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface FormData{
  name:string;
  age: number;
}
const Form = () => {
  /*****************************************************
   * use react-hook-form lib                           *
   ****************************************************/
  // add property called formState to show an error message to the users
  const {
    register,
    handleSubmit,
    formState: { errors },  //destructure and grab register method of useForm()
  } = useForm<FormData>(); //pass the interface that represents the shape of this form

  // console.log(register("name" )); //give it an argument, which is the name of an input field: here either 'name' or 'age'

  /*****************************************************
   * use useState to get value of the form             *
   ****************************************************/
  // const [person, setPerson] = useState({
  //   name: "",
  //   age: 0,
  // });
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();

  //   console.log(person);
  // };
  /*****************************************************
   * use useRef to get value of the form               *
   ****************************************************/
  // // to target the value of nameRef, we need to tell TypeScript compiler
  // // that we are referencing the HTML Input Element
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  // const person = { name: "", age: 0 };
  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   //this nameRef has a single property 'current'. This will return the DOM element that we are referencing
  //   if (nameRef.current != null) person.name = nameRef.current.value; //get the value of the DOM element that we are referencing
  //   if (ageRef.current != null) person.age = parseInt(ageRef.current.value);
  //   console.log(person);
  // };

  /*****************************************************************************
   * use react-hook-form lib: Implement Form submission logic in real world    *
   *****************************************************************************/
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* copy/spread over the person obj, get the value of the input field and assign to the name of that person */}
        <input
          {...register("name", { required: true, minLength: 3 })} //validate the input field
          // onChange={(event) =>
          //   setPerson({ ...person, name: event.target.value })
          // }
          // value={person.name} // single source of truth: now this input field always relies on the value in our state variable => we have only one source to store name of the person
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && (
          <p className="text-danger">The name field is required!</p>
        )}
        {errors.name?.type === "minLength" && (
          <p className="text-danger">
            The name must be at least 3 characters!
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
          // onChange={(event) =>
          //   setPerson({ ...person, age: parseInt(event.target.value) })
          // }
          // value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
