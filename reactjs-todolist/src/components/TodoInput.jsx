import { useState } from "react";

export default function TodoInput(props) {
  const { handleTodos, todoValue, setTodoValue } = props;
  return (
    <header>
      <input
        type="text"
        placeholder="Enter todo..."
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleTodos(todoValue);
          setTodoValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
