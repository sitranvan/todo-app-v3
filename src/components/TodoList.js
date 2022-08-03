import {
  faCheck,
  faPenSquare,
  faRotateRight,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function TodoList({ todoList, onRemove, onEdit, onCompleted, updateRef }) {
  return (
    <ul className="list">
      {todoList.map((todo, index) => (
        <li key={todo.id} className="item">
          <span
            style={
              todo.isCompleted
                ? { textDecoration: "line-through", color: todo.color }
                : { color: todo.color }
            }
          >
            {todo.title}
          </span>
          <div className="option">
            <div className="completed" onClick={() => onCompleted(todo.id)}>
              {todo.isCompleted ? (
                <FontAwesomeIcon
                  icon={faRotateRight}
                  className={updateRef.current === -1 ? "icon" : "hidden"}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCheck}
                  className={updateRef.current === -1 ? "icon" : "hidden"}
                />
              )}
            </div>

            <FontAwesomeIcon
              icon={faTimes}
              className="icon"
              onClick={() => onRemove(todo.id)}
              style={todo.isCompleted ? { display: "none" } : null}
            />
            <FontAwesomeIcon
              icon={faPenSquare}
              className="icon"
              onClick={() => onEdit(todo, index)}
              style={todo.isCompleted ? { display: "none" } : null}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
