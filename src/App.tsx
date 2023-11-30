import { useState } from "react";
import { InputField } from "./components/InputField";
import { Todo } from "./components/Model";
import TodoList from "./components/TodoList";
import "./App.css";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setList([...list, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <>
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList list={list} setList={setList}/>
    </>
  );
};

export default App;
