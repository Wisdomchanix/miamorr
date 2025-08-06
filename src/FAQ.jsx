import React, { useState } from 'react';


const faqData = [
  {
    question: "How Do You Earn?",
    answer: "On MiAmor, you earn up to $2.5 every time you match or get matched thereby turning simple swipes into real income. Imagine getting rewarded while discovering the love of your life. THIS ISN’T JUST ABOUT FINDING YOUR TRUE PARTNER, IT IS CONNECTION THAT ACTUALLY PAYS"
  },
  {
    question: "Is referrals compulsory on MiAmor?",
    answer: "No"
  },
  {
    question: "Do I need a foreign bank account before I can withdraw?",
    answer: "No"
  },
  {
    question: "How is withdrawal?",
    answer: "3 days a week"
  },
  {
    question: "Is there a minimum withdrawal on MiAmor?",
    answer: "No"
  },
  {
    question: "Is there any other payment aside from the registration fee?",
    answer: "No"
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq">
      <div className="faq_container container">
        <h2 className="section_title">Frequently Asked Questions</h2>

        {faqData.map((item, index) => (
          <div key={index} className="faq_item">
            <div className="faq_question" onClick={() => toggleFAQ(index)}>
              <span className="question">{item.question}</span>
              <i>{activeIndex === index ? '▲' : '▼'}</i>
            </div>

            <div
              className={`faq_answer ${activeIndex === index ? 'open' : ''}`}
            >
              <p className="answer">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
