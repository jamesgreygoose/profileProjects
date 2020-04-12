import React from "react";
import "./App.css";
import ToDoList from "./ToDoList";

// const array = [
//   {
//     Priority: 3,
//     Task: "Clean near the bin",
//     Complete: true
//   },
//   {
//     Priority: 3,
//     Task: "Wipe the Table",
//     Complete: false
//   },
//   {
//     Priority: 2,
//     Task: "Vacuum the Floor",
//     Complete: false
//   }
// ];

function App() {
  return (
    <div className="App">
      <ToDoList />
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <ToDoList todos={array} />
//     </div>
//   );
// }
export default App;
