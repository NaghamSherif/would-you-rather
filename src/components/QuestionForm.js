import React, { useState } from "react";
import { reduxForm, Field } from "redux-form";

let QuestionForm = (props) => {
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");

  const handleChange1 = (e) => setOption1(e.target.value);

  const handleChange2 = (e) => setOption2(e.target.value);

  const { onSubmit } = props;
  return (
    <form onSubmit={(e) => onSubmit(e, option1, option2)}>
      <div>
        <label>
          <Field
            component="input"
            name="option-one"
            type="text"
            value="optionOne"
            onChange={handleChange1}
          />
        </label>
        <div>or</div>
        <label>
          <Field
            component="input"
            name="option-two"
            type="input"
            value="optionTwo"
            onChange={handleChange2}
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

QuestionForm = reduxForm({
  form: "options-form",
})(QuestionForm);

export default QuestionForm;
