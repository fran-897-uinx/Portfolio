import React from "react";
import "./component2/Contact.css";

const Contact = () => {
  class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = { value: "" };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setStates({ value: event.target.value });
    }
    handleSubmit(event) {
      alert("submited: " + this.state.value);
      event.preventDefault();
    }
  }
  return (
    <div className="contact">
      <div className="contactname">
        <h1> CONTACT </h1>
        <hr />
        <p>
          Feel free to contact me by submiting the form below and i will get
          back to you as soon as poosible
        </p>
      </div>
      <form action="submit" method="get">
        <label htmlFor="">
          Name:
          <input type="text" placeholder="Enter your name" />
        </label>
        <label htmlFor="">
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label htmlFor="">
          Message:
          <textarea
            name=""
            id=""
            cols="50"
            rows="10"
            placeholder="Enter your message"
          ></textarea>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
