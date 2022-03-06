import React from "react";

export const CompleteTodos = (props) => {
  const { todo, onClickBack } = props;
  return (
    <div className="complete-area">
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
