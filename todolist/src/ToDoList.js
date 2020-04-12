import React, { useState } from "react";
import ToDoListItem from "./ToDoListItem";
import "./toDoList.css";

const array = [
  {
    Priority: 3,
    Task: "Clean near the bin",
    Complete: true
  },
  {
    Priority: 3,
    Task: "Wipe the Table", //Need to be in same file or it will be read only.
    Complete: false
  },
  {
    Priority: 2,
    Task: "Vacuum the Floor",
    Complete: false
  }
];

function ToDoList() {
  const [todos, Settodos] = useState(array); //useState is original state... linked to todos

  function Delete(index) {
    console.log("Clicked", index);
    const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];

    Settodos(newTodos);
  }

  function Alert(index) {
    alert(`Are you sure that you want to delete this?`);
  }
  return (
    <ul id="toDoList">
      {todos.map(({ Priority, Task, Complete }, i) => (
        <ToDoListItem
          key={Task} //Individual key for each item.
          Priority={Priority} //Broken into the UL.
          Task={Task}
          Complete={Complete}
          Delete={function() {
            Delete(i);
          }}
        />
      ))}
    </ul>
  );
}

//Paste in list.
// Set usestate in top.

// function ToDoList({ todos }) {
//   return (
//     <ul id="toDoList">
//       {todos.map(({ Priority, Task, Complete }) => (
//         <ToDoListItem Priority={Priority} Task={Task} Complete={Complete} />
//       ))}
//     </ul>
//   );
// }

export default ToDoList;
