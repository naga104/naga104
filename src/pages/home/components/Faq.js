import React, { useState } from "react";

const Faq = () => {
  const data = [
    {
      question: "Question 1",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facere cumque saepe recusandae.",
    },
    {
      question: "Question 2",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facere cumque saepe recusandae.",
    },
    {
      question: "Question 3",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facere cumque saepe recusandae.",
    },
    {
      question: "Question 4",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos facere cumque saepe recusandae.",
    },
  ];

  const [selected, setSelected] = useState(null);
  const handleSelect = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <>
      <h1 className="heading">FAQ</h1>
      <section className="faq">
        <div className="item">
          {data.map((item, i) => {
            return (
              <div className="wrapper" key={i} onClick={() => handleSelect(i)}>
                <div className="question">
                  <h3>{item.question}</h3>
                  <img
                    src={require("../../../assests/upIcon.png")}
                    alt=""
                    className={selected === i ? "reverse" : ""}
                  />
                </div>
                <div className={selected === i ? "answers show" : "answers"}>
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;
