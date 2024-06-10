import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

export default function TodoList({ isDone }) {
  const todos = useSelector((state) =>
    state.todos.filter((todo) => todo.isDone === isDone)
  );
  return (
    <section>
      <h2>{isDone ? "Done" : "Working..."}</h2>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </section>
  );
}
