import React, { useState } from "react";
import "./Questions.css";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleOpen}>
        <h3>{question}</h3>
        <h1 className="vv">{isOpen ? "×" : " +"}</h1>
      </div>
      {isOpen && (
        <div className="faq-answer">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQList = () => {
  const faqs = [
    {
      question: "How does Jpress match me with providers?",
      answer: "Jpress uses AI to recommend the best provi ....",
    },
    {
      question: "How does Jpress match me with providers?",
      answer: "You can install JPress by...",
    },
    {
      question: "How do I get started?",
      answer: "You can install JPress by...",
    },
    {
      question: "Can I read reviews before choosing a provider?",
      answer: "You can install JPress by...",
    },

    {
      question: "What happens if I'm not satisfied with the service?",
      answer: "You can install JPress by...",
    },
    // Add more questions and answers here
  ];

  return (
    <div className="Questions container px-4 md:px-8 lg:px-10 my-20">
      <div className="text_r">
        <h1>Frequently Asked Questions</h1>
        <p>
          Still you have any questions? Contact our Team via support@JPress.com
        </p>
        <img src="img/Questions.png" alt="" />
      </div>
      <div className="faq-list flex-1">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQList;
