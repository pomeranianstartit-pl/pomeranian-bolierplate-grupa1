import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { NotFound } from '../Components/NotFound/NotFound';

import './styles.css';

export function FAQ() {
  return (
    <Routes>
      <Route path="" element={<FAQLayout />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

function FAQLayout() {
  return (
    <>
      <div className="faq-main-container"></div>
      <h1>FAQ</h1>
      <h5>Tutaj znajdź odpowiedzi na najczęściej zadawane pytania.</h5>
      <div className="question-container">
        <span>&lt;</span>
        <span>Jak mogę zapisać się na szkolenie?</span>
      </div>
    </>
  );
}
