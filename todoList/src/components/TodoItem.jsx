import { useState } from "react";
import Card from "./Card";

export const TodoItem = ({ title, status, onDelete }) => {
  const [ifDone, setIfDone] = useState(status);
  return (
    <div>
      <Card close={onDelete}>
        <div className={`txt ${ifDone === "done" ? "done" : "todo"}`}>
          {title}
        </div>
        <button
          className="btn"
          onClick={() => {
            setIfDone(ifDone === "done" ? "todo" : "done");
          }}
        >
          {ifDone !== "done" ? "Done" : "Not Done"}
        </button>
      </Card>
    </div>
  );
};
