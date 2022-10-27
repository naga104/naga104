import React, { useState } from "react";
import Model from "./Model";

const CallToAction = () => {
  const [modal, setModal] = useState(false);
  const handleClick = () => {
    setModal(!modal);
  };
  return (
    <>
      <section className="call-to-action">
        <h2>Hurry Up Book Your Ticket</h2>
        <button to="/pricing" onClick={handleClick}>
          Know More!
        </button>
      </section>
      {modal && <Model handleClick={handleClick} />}
    </>
  );
};

export default CallToAction;
