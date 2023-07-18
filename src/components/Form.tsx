import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // Accessing form values using Ref Hook
  //   const nameRef = useRef<HTMLInputElement>(null);
  //   const ageRef = useRef<HTMLInputElement>(null);
  //   const person = {
  //     name: "",
  //     age: 0,
  //   };

  const [person, setPerson] = useState({
    name: "",
    age: 0,
  });
  return (
    <form
      onSubmit={handleSubmit((data) => console.log(data))}
      // Ref Hook onsubmit
      //   onSubmit={(event) => {
      //     event.preventDefault();
      //     if (nameRef.current !== null && ageRef.current !== null) {
      //       person.name = nameRef.current.value;
      //       person.age = Number(ageRef.current.value);
      //     }
      //     console.log(person);
      //   }}
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...(register("name"), { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age")}
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
