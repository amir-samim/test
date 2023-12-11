import { useState } from "react";
import "./TaskCard.css";

export const TaskCard = ({ taskList, setTaskList, task, taskCount }) => {
  const [isInput, setIsInput] = useState(false);

  const currDate = new Date().toLocaleDateString();
  const currTime = new Date().toLocaleTimeString();

  const handleDone = (id) => {
    setTaskList(() =>
      taskList.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTaskList(() => taskList.filter((task) => task.id !== id));
  };

  const handleSubmit = (e, id, done) => {
    e.preventDefault();
    let newTask = {};
    const newName = e.target.taskName.value;

    if (newName !== "" && newName !== task.name) {

      newTask = {
        id: id,
        name: newName,
        time: {
          time: currTime,
          date: currDate,
        },

        done: done,
        edited: true
      };
    } else {
      newTask = {
        id: id,
        name: task.name,
        time: task.time,
        done: done,
        edited: false
      };
    }

    setTaskList((prevTaskList) =>
      prevTaskList.map((task) => (task.id === id ? newTask : task))
    );

    e.target.taskName.value = "";
    setIsInput(false);
  };

  return (
    <div className="taskCard">
      <li className={task.done ? "done" : "undone"}>
        <div
          className={`wrapperTaskCount ${task.done ? "are" : "na"}`}
          onClick={() => handleDone(task.id)}
        >
          <span className={`taskCount ${task.done ? "yes" : "no"}`}>
            {taskCount}
          </span>
        </div>

        <div className="wrapper">
          {isInput ? (
            <form
              onSubmit={(e) => {
                handleSubmit(e, task.id, task.done);
              }}
            >
              <div className="inputWrapper">
                <input
                  type="text"
                  maxLength={1000}
                  name="taskName"
                  className="nameInput"
                  placeholder={task.name}
                  autoFocus
                  autoComplete="off"
                  onDoubleClick={() => {
                    setIsInput(!isInput);
                  }}
                  // onBlur={() => {
                  //   setIsInput(false);
                  // }}
                />
              </div>
            </form>
          ) : (
            <p onClick={() => handleDone(task.id)}>
              <span
                className="name"
                onDoubleClick={() => {
                  setIsInput(!isInput);
                }}
              >
                {task.name}
              </span>
            </p>
          )}
          <p onClick={() => handleDone(task.id)}>
            <span className="time">
              {task.time.date}-{task.time.time}
              {task.edited && "-edited"}
            </span>
          </p>
        </div>

        {!isInput ? (
          <i
            onClick={() => {
              setIsInput(true);
            }}
            className="bi bi-pencil-square"
          ></i>
        ) : (
          <i
            className="bi bi-x-lg"
            onClick={() => {
              setIsInput(false);
            }}
          ></i>
        )}
        <i onClick={() => handleDelete(task.id)} className="bi bi-trash3"></i>
      </li>
    </div>
  );
};
