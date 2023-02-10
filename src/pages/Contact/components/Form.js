import React from "react";
import "../ContactStyle.css";

const Form = () => {
  return (
    <>
      
      <section className="container">
    
        <form>
        <h1 className="heading">Form</h1>
          <div className="field">
            <p>Name</p>
            <input type="text" />
          </div>
          <div className="field">
            <p>Email</p>
            <input type="email" />
          </div>
          <div className="field">
            <p>Phone Number</p>
            <input type="tel" />
          </div>
          <div className="form-button">
            <button>Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Form;
