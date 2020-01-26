import React from "react";
import "./App.css";

import TodoList from "./components/TodoList/TodoList";
import { connect, useSelector } from "react-redux";

function App(props) {

  //using react-redux hooks
  const todoItems = useSelector(state => {
    return state.todoItems;
  });

  return (
    <React.Fragment>
      <div className="appContainer">
        <div className="title">Test todolist</div>
        <div className="App">
          <TodoList todoList={todoItems} />
        </div>
      </div>
    </React.Fragment>
  );
}

// const mapStateToProps = state => {
//   return { todoItems: state.todoItems };
// };

// export default connect(mapStateToProps)(App);

export default App;
