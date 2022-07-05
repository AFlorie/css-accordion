import React from "react";
import "./App.css";

const faq: { id: string; color: string; question: string; answer: string }[] = [
  {
    id: "01",
    color: "turquoise",
    question: "How do I apply ?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate maxime vel praesentium at dolor doloremque temporibus impedit, consequatur distinctio necessitatibus reiciendis delectus adipisci nemo, explicabo tenetur eaque aut sequi perferendis.",
  },
  {
    id: "02",
    color: "blue",
    question: "Lost or forgotten your password ?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate maxime vel praesentium at dolor doloremque temporibus impedit, consequatur distinctio necessitatibus reiciendis delectus adipisci nemo, explicabo tenetur eaque aut sequi perferendis.",
  },
  {
    id: "03",
    color: "purple",
    question: "How to change my username ?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate maxime vel praesentium at dolor doloremque temporibus impedit, consequatur distinctio necessitatibus reiciendis delectus adipisci nemo, explicabo tenetur eaque aut sequi perferendis.",
  },
  {
    id: "04",
    color: "pink",
    question: "How to delete my account ?",
    answer:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate maxime vel praesentium at dolor doloremque temporibus impedit, consequatur distinctio necessitatibus reiciendis delectus adipisci nemo, explicabo tenetur eaque aut sequi perferendis.",
  },
];

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Frequently asked questions</h1>
        {faq.map((tab, i) => {
          return (
            <div className="tab" key={i}>
              <input type="radio" name="faq" id={tab.id} />
              <label htmlFor={tab.id}>
                <h2 className={tab.color}>{tab.id}</h2>
                <h3>{tab.question}</h3>
              </label>
              <div className="content">
                <p>{tab.answer}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
