import { v4 } from "uuid";
import "./AddTask.css";
export const AddTask = ({ taskList, setTaskList }) => {
  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: v4(),
      name:
        e.target.taskName.value === ""
          ? "Untitled Task"
          : e.target.taskName.value,
      time: { time: currTime, date: currDate },
      done: false,
      edited: false,
    };

    setTaskList([...taskList, newTask]);

    e.target.taskName.value = "";
  };

  return (
    <section className="addTask">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="Task Name"
            maxLength={1000}
            name="taskName"
            autoFocus
            autoComplete="off"
          />
          <button type="submit">Add</button>
        </form>
      </section>
  );
};
