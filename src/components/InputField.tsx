import { useRef } from "react";
import './input.css'

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form className="input" onSubmit={(e) => {
      handleAdd(e)
      inputRef.current?.blur()
      }}>
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter a task"
        className="input-box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="button" type="submit">
        Go
      </button>
    </form>
  );
};
