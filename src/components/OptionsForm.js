import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";

let OptionsForm = (props) => {
  const [value, setValue] = useState("");

  const onChange = (e) => setValue(e.target.value);

  const { optionOne, optionTwo, onSubmit } = props;
  return (
    <form onSubmit={(e) => onSubmit(e, value)}>
      <div>
        <label>
          <Field
            component="input"
            name="option-one"
            type="radio"
            value="optionOne"
            checked={value === "optionOne"}
            onChange={onChange}
          />{" "}
          {optionOne}
        </label>
        <label>
          <Field
            component="input"
            name="option-two"
            type="radio"
            value="optionTwo"
            checked={value === "optionTwo"}
            onChange={onChange}
          />
          {optionTwo}{" "}
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

OptionsForm = reduxForm({
  form: "options-form",
})(OptionsForm);

export default OptionsForm;
