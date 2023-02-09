import React, { useState } from "react";

const Faq = () => {
  const data = [
    {
      question: "What is telecommunications (telecom)?",
      answer:
        "Telecommunications, also known as telecom, is the exchange of information over significant distances by electronic means and refers to all types of voice, data and video transmission."
    },
    {
      question: "What is Banking, financial services and insurance (BFSI) ?",
      answer:
        "Banking, financial services and insurance (BFSI) is the industry's umbrella term for companies that provide a range of such financial products or services. This includes universal banks that provide a range of financial services or companies that operate in one or more of these financial sectors",
    },
    {
      question: "What is core network in 5G?",
      answer:
        "What is 5G Core? 5G Core (5GC) is the heart of a 5G network, controlling data and control plane operations. The 5G core aggregates data traffic, communicates with UE, delivers essential network services and provides extra layers of security, among other functions",
    },
    {
      question: "What is meant by integration service?",
      answer:
        "An integration service is a specialized application with a defined interface and structure that acts as a container for a web services solution. You can integrate applications by using a service-oriented architecture (SOA",
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
