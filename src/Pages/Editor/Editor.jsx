import React from 'react'
import "./Editor.css"
export default function Editor({SelectedQuestion}) {
  return (
    <div id = "Editor">
        <center>
            <h3>
                Q.{SelectedQuestion.Question}
            </h3>
            <hr />
            <textarea placeholder='Write Your Code Here'></textarea>
        </center>
    </div>
  )
}
