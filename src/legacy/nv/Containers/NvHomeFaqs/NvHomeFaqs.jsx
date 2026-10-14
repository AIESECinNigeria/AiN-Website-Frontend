"use client";
import React from 'react';
import HeaderText from '../../Components/HeaderText/HeaderText';
import NvFaqDropdown from '../../Components/NvFaqDropdown/NvFaqDropdown';
import classes from './NvHomePageFaqs.module.css';

const NvHomePageFaqs = () => {
  // Utils
  const faqs = [
    {
      question: 'What is National Volunteer?',
      answer:
        'National Volunteer is a program by AIESEC in Nigeria for youths to work on social impact projects in a cross-cultural environment in Nigeria for two weeks',
    },
    {
      question: 'Which states can I volunteer in?',
      answer:
        'We have carefully curated over 10 projects in 13 destinations across Nigeria to choose from. Find out more about these destinations on the project page. ',
    },
    {
      question: 'Is there a fee for this program?',
      answer:
        'Yes, volunteers are expected to pay Thirty Thousand Naira (N30,000) naira only. While your accommodation is provided, every other expense is covered by the volunteer.',
    },
    {
      question: 'Do I get paid?',
      answer: 'No, it’s a volunteering opportunity.',
    },
    {
      question: 'What do I stand to gain?',
      answer:
        'Make an impact while networking with amazing individuals, building your leadership skills, and sharing new experiences.',
    },
    {
      question: 'Will there be a certificate of participation?',
      answer:
        'Yes, you will receive a digital certificate of participation upon completion.',
    },
    {
      question:
        'Can I include the National Volunteer certificate in my resume?',
      answer:
        'Absolutely! Including a volunteer experience with certification is a great way to make your resume stand out. It shows you are community-minded and gives you the chance to prove your professional skills. Employers love it. ',
    },
    {
      question: 'Who can go for this program?',
      answer: 'Youths (18 - 30 years old)',
    },
    {
      question: 'Is accommodation and feeding provided?',
      answer:
        'Accommodation will be provided and covered. However, feeding may or may not be covered, depending on the opportunity provider.',
    },
    {
      question: 'What is the duration of this program?',
      answer: 'Two (2) Weeks',
    },
    {
      question: 'How can I be a part of this program?',
      answer:
        'Sign Up for any of the projects in any destination of your choice.',
    },
    {
      question: 'What should I expect after I sign up?',
      answer:
        'You will be contacted by a representative via mail within 1 - 5 days.',
    },
  ];

  return (
    <div className={classes.container}>
      <HeaderText
        title={
          <>
            Detailed
            <br /> Information
          </>
        }
        caption="FAQS"
        captionFirst
        titleStyle={{ color: '#007A33' }}
      />
      <div className={classes.questionSection}>
        {faqs.map((data, i) => {
          return (
            <React.Fragment key={i}>
              <NvFaqDropdown title={data.question} answer={data.answer} />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default NvHomePageFaqs;
