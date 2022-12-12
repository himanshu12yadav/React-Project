import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [people, setPeople] = useState(data);
  let [index, setIndex] = useState(0);

  const length = people.length-1;
  
  useEffect(() => {
    let slider = setInterval(() => {
      if (index >= length) {
        setIndex(0);
        return;
      } 
      setIndex(index + 1);  

      
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, length]);

  const { id, image, name, title, quote } = people[index];

  
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
                  <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
        <button className="prev" onClick={() => {
          if (index <= 0) {
            setIndex(index);
            return;
          } else {
            setIndex(index - 1);
          }

          
        }
        }>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => {
          if (index >= people.length - 1) {
            setIndex(index);
          } else {
            setIndex(index + 1);
          }
        }}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;