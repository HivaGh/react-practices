import { TodoItem } from "./TodoItem";

export const List = ({ todos, onDelete }) => {

  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            title={todo.title}
            status={todo.status}
            onDelete={() => onDelete(todo.id)}
          />
        );
      })}
    </div>
  );
};
