import React from 'react';
import './Quiz.css'; // Import the CSS file
import { Link } from 'react-router-dom';
const placeholderImageURL = 'https://placehold.co/600x400';

const Quiz = () => {
  return (
    <div>
      <center>
        <h1>Quiz Page</h1>
      </center>
      <div className="quiz-card-container">

        
        <Link to={"/Practice/Quiz/HtmlCss"}>
            <div className="quiz-card">
              <img className="quiz-card-image" src={placeholderImageURL} alt="HTML-CSS" />
              <h3 className="quiz-card-title">HTML-CSS</h3>
            </div>
        </Link>

        <Link to={"/Practice/Quiz/JavaScript"}>
            <div className="quiz-card">
              <img className="quiz-card-image" src={placeholderImageURL} alt="JavaScript" />
              <h3 className="quiz-card-title">JavaScript</h3>
            </div>
        </Link>


        <Link to={"/Practice/Quiz/React"}>
            <div className="quiz-card">
              <img className="quiz-card-image" src={placeholderImageURL} alt="React" />
              <h3 className="quiz-card-title">React</h3>
            </div>
        </Link>



      </div>
    </div>
  );
};

export default Quiz;