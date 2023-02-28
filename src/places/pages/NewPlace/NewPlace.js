import React from "react";
import Input from "../../../shared/components/FormElements/Input/Input";
import "./NewPlace.css";

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        errorText="Please enter valid title"
      />
    </form>
  );
};

export default NewPlace;
