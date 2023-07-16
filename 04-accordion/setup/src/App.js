import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
import Question from './Question';
function App() {
  const [questions , setQuestions ] = useState(data);
  return (
    <div className="container">
      <h3>Questions and Answers About Login</h3>
      <section className="info">
        {
          questions.map((questions) => {
            return <SingleQuestion key={questions.id}{...questions}/>;
          })
        }
      </section>
    </div>
  );
}

export default App;
