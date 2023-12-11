import { TaskCard } from "../taskCard/TaskCard";
import "./TaskList.css";
export const TaskList = ({ taskList, setTaskList }) => {
  return (
    <div className="main">
      {taskList != "" ? (
        <section className="taskList">
          <div className="head">
            <div>
              <span className="title">To Do</span>
              <span className="count">{taskList.length}</span>
            </div>
            <span onClick={() => setTaskList([])} className="clearAll">
              Clear All
            </span>
          </div>
          <ul>
            {taskList.map((task, index) => (
              <TaskCard
                key={task.id}
                taskList={taskList}
                setTaskList={setTaskList}
                task={task}
                taskCount={index + 1}
              />
            ))}
          </ul>
        </section>
      ) : (
        <h1>You do not have any tasks!</h1>
      )}
    </div>
  );
};
