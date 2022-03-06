import React from "react";

const style = {
  margin: "8px",
  backgroundColor: "#ffffe0",
  width: "400px",
  minHeight: "200px",
  padding: "8px",
  borderRadius: "8px"
};

export const CompleteTodos = (props) => {
  const { todo, onClickBack } = props;
  return (
    <div style={style}>
      <p className="title">完了のTODO</p>
      <ul className="todo-list">
        {todo.map((todo, index) => {
          return (
            <li key={todo}>
              <span>{todo}</span>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
