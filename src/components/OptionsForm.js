import React from "react";
import { reduxForm, Field } from "redux-form";

class OptionsForm extends React.Component {
  state = {
    value: "",
  };
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  render() {
    const { optionOne, optionTwo, onSubmit } = this.props;
    return (
      <form onSubmit={(e) => onSubmit(e, this.state.value)}>
        <div>
          <label>
            <Field
              component="input"
              name="option-one"
              type="radio"
              value="optionOne"
              checked={this.state.value === "optionOne"}
              onChange={this.onChange}
            />{" "}
            {optionOne}
          </label>
          <label>
            <Field
              component="input"
              name="option-two"
              type="radio"
              value="optionTwo"
              checked={this.state.value === "optionTwo"}
              onChange={this.onChange}
            />
            {optionTwo}{" "}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

OptionsForm = reduxForm({
  form: "options-form",
})(OptionsForm);

export default OptionsForm;
