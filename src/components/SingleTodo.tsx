import { useState, useRef, useEffect } from "react";
import { Todo } from "./Model";
import { PencilSimpleLine, TrashSimple, Check } from "@phosphor-icons/react";
import "./singleTodo.css";

type Props = {
  todo: Todo;
  list: Todo[];
  setList: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, list, setList }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setList(
      list.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setList(list.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setList(
      list.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus()
  },[edit])

  return (
    <form className="todo-single" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="edit-todo"
        />
      ) : todo.isDone ? (
        <s className="todos-single-text">{todo.todo}</s>
      ) : (
        <span className="todos-single-text">{todo.todo}</span>
      )}

      <div className="div-icons">
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <PencilSimpleLine size={20} style={{ color: "rgb(123, 205, 0)" }} />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <TrashSimple size={20} style={{ color: "rgb(123, 205, 0)" }} />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <Check size={20} style={{ color: "rgb(123, 205, 0)" }} />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
