//BREAK IT DOWN INTO THE SMALLER PARTS!

import React from "react";
import "./toDoListItem.css";

function ToDoListItem({ Priority, Task, Complete, Delete, Alert }) {
  return (
    <li id="toDoListItem">
      <h2>{Task}</h2>
      <p>Priority Level: {Priority}</p>
      <p>{Complete ? "It's complete!" : "Do it now!"}</p>
      <button className="clickButton" onClick={Delete}>
        Delete!
      </button>
    </li>
  );
}

// function ToDoListItem({ Priority, Task, Complete }) {
//     return (
//       <li id="toDoListItem">
//         <h2>{Task}</h2>
//         <p>Priority Level: {Priority}</p>
//         <p>{Complete ? "It's complete!" : "Do it now!"}</p>
//       </li>
//     );
//   }
export default ToDoListItem;
