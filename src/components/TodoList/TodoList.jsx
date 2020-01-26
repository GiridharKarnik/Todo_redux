import React from "react";
import "./TodoList.scss";

import TodoItem from "../TodoItem/TodoItem";
import { connect, useDispatch } from "react-redux";
import { checkTodoItem } from "../../actions";

function TodoList({todoList}) {
    const dispatch = useDispatch();
  return (
      <div>
        {todoList.map(item => {
          return (
            <TodoItem
              todo={item}
              key={item.itemNo}
              onCheck={() => {
                dispatch(checkTodoItem({ itemNo: item.itemNo }));
              }}
            />
          );
        })}
      </div>
  )
}

export default TodoList;

// function mapDispatchToProps(dispatch) {
//   return {
//     checkTodoItem: itemNo => dispatch(checkTodoItem({ itemNo }))
//   };
// }

// export default connect(null, mapDispatchToProps)(TodoList);
