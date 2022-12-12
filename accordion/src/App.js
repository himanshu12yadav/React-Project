import './App.css';
import Question from './components/Question.components';
import questions from './data';

function App() {
  
  return (
    <main>
      <div className='container'>
        <h3>
          Questions And Answers About Login
        </h3>
        <ul>
        {questions.map(question => <li  key={question.id}><Question {...question}/></li> ) }
        </ul>
        
      </div>
   
    </main>
     
    )
}

export default App;
