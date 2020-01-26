import React from "react";

import "./TodoItem.scss";

export default class TodoItem extends React.Component {

  onCheck = () => {
    this.props.onCheck(this.props.todo.itemNo);
  }

  render() {
    return (
      <div className="listItem">
        <div>{this.props.todo.todoText}</div>
        <input type="checkbox" onChange={this.onCheck}></input>
      </div>
    );
  }
}
