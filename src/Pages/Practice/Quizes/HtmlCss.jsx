import React from 'react'
import "./HtmlQuiz.css"
export default function HtmlCss() {
  // ... Your MCQS array remains the same
  let MCQS = 
  [
      {
          "Question":"Why Is Html?",
          "Options":[
              "It is a Markup Language",
              "It is a Programming Language",
              "It is a Scripting Language",
              "It is a Style Language"
          ],
          "Answer":"It is a Markup Language"
      },
      {
          "Question":"What does CSS stand for?",
          "Options":[
              "Creative Style Sheets",
              "Cascading Style Sheets",
              "Computer Style Sheets",
              "Colorful Style Sheets"
          ],
          "Answer":"Cascading Style Sheets"
      },
      {
          "Question":"Which HTML tag is used to define an internal style sheet?",
          "Options":[
              "<css>",
              "<style>",
              "<script>",
              "<head>"
          ],
          "Answer":"<style>"
      },
      {
          "Question":"Which property is used to change the background color?",
          "Options":[
              "color",
              "background-color",
              "bgcolor",
              "bg-color"
          ],
          "Answer":"background-color"
      },
      {
          "Question":"Which HTML attribute is used to define inline styles?",
          "Options":[
              "style",
              "class",
              "styles",
              "font"
          ],
          "Answer":"style"
      },
      {
          "Question":"Which CSS property is used to change the text color of an element?",
          "Options":[
              "color",
              "text-color",
              "font-color",
              "foreground-color"
          ],
          "Answer":"color"
      },
      {
          "Question":"Which HTML tag is used to define an unordered list?",
          "Options":[
              "<ul>",
              "<ol>",
              "<li>",
              "<list>"
          ],
          "Answer":"<ul>"
      },
      {
          "Question":"Which HTML tag is used to define a hyperlink?",
          "Options":[
              "<link>",
              "<a>",
              "<href>",
              "<hyperlink>"
          ],
          "Answer":"<a>"
      },
      {
          "Question":"Which property is used to change the font of an element?",
          "Options":[
              "font-style",
              "font-weight",
              "font-family",
              "font-size"
          ],
          "Answer":"font-family"
      },
      {
          "Question":"Which HTML tag is used to define a table?",
          "Options":[
              "<table>",
              "<tab>",
              "<tr>",
              "<td>"
          ],
          "Answer":"<table>"
      },
      {
          "Question":"Which attribute is used to provide an alternative text for an image, if the image cannot be displayed?",
          "Options":[
              "title",
              "alt",
              "src",
              "href"
          ],
          "Answer":"alt"
      }
  ];
  
  return (
    <div className="quiz-container">
      {MCQS.map((MCQ, index) => (
        <div key={index} className="quiz-card">
          <h3 className="question">{MCQ.Question}</h3>
          <div className="options">
            {MCQ.Options.map((option, oindex) => (
              <div key={oindex} className="option">
                <input type="radio" id={`option-${index}-${oindex}`} name={`question-${index}`} />
                <label htmlFor={`option-${index}-${oindex}`}>{option}</label>
              </div>
            ))}
          </div>
        </div>
      ))}
      <button className="submit-btn">Submit</button>
    </div>
  )
}