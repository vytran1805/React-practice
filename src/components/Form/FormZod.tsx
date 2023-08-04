import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { isValid, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

/**
 * Define the shape or schema of our form at all the validation rules
 * This will return a schema object
 */
const schema = z.object({
  name: z.string().min(3),
  age: z.number({ invalid_type_error: "Age field is required" }).min(18),
});
/**
 * Extract a type from the schema object
 */
type FormData = z.infer<typeof schema>;

// interface FormData {
//   name: string;
//   age: number;
// }
const Form = () => {
  /*****************************************************
   * use react-hook-form lib                           *
   ****************************************************/
  // add property called formState to show an error message to the users
  const {
    register,
    handleSubmit,
    formState: { errors }, //destructure and grab register method of useForm()
  } = useForm<FormData>({ resolver: zodResolver(schema) }); //pass the interface that represents the shape of this form

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
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          // onChange={(event) =>
          //   setPerson({ ...person, age: parseInt(event.target.value) })
          // }
          // value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
