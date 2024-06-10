import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

// Hint: TodoItem 컴포넌트는 props 를 받습니다.
export default function TodoItem({ id, title, content, isDone }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };
  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {title}</p>
        <p>내용: {content}</p>
      </section>
      <section>
        <button onClick={handleToggle}>{isDone ? "취소" : "완료"}</button>
        <button onClick={handleDelete}>삭제</button>
      </section>
    </li>
  );
}
