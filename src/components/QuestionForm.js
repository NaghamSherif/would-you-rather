import React from "react";
import { reduxForm, Field } from "redux-form";

class QuestionForm extends React.Component {
  state = {
    option1: "",
    option2: "",
  };
  handleChange1 = (e) => {
    this.setState({
      option1: e.target.value,
    });
  };
  handleChange2 = (e) => {
    this.setState({
      option2: e.target.value,
    });
  };
  render() {
    const { onSubmit } = this.props;
    return (
      <form
        onSubmit={(e) => onSubmit(e, this.state.option1, this.state.option2)}
      >
        <div>
          <label>
            <Field
              component="input"
              name="option-one"
              type="text"
              value="optionOne"
              onChange={this.handleChange1}
            />
          </label>
          <div>or</div>
          <label>
            <Field
              component="input"
              name="option-two"
              type="input"
              value="optionTwo"
              onChange={this.handleChange2}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

QuestionForm = reduxForm({
  form: "options-form",
})(QuestionForm);

export default QuestionForm;
