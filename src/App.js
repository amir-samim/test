import { useEffect, useState } from "react";
import { AddTask } from "./components/addTask/AddTask";
import { Header } from "./components/header/Header";
import { TaskList } from "./components/taskList/TaskList";

import "./App.css";

function App() {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem("taskList")) || []
  );

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <div className="app">
      <Header />
      <AddTask taskList={taskList} setTaskList={setTaskList} />
      <TaskList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
