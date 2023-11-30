import React from "react";
import { Todo } from "./Model";
import SingleTodo from "./SingleTodo";

interface Props {
  list: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ list, setList }: Props) => {
  return (
    <div>
      {list.map((todo) => (
        <SingleTodo todo={todo} key={todo.id} list={list} setList={setList} />
      ))}
    </div>
  );
};

export default TodoList;
