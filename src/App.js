import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  const [questions, setQuestions] = useState(data)


  
  return <main className='container'>
         <h4>Frequently Asked Questions FAQ</h4>
         <section className='info'>
            {
              questions.map((question) =>{
                return <SingleQuestion key={question.id} {...question}></SingleQuestion>
              })
            }
          
           </section>

  </main>
}

export default App;
