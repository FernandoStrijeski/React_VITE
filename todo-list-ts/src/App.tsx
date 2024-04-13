import "./styles/global.css";
import { Plus } from "react-feather";
import styles from "./styles/pages/home.module.css";
import { Task } from "./components/Task";
import { CreateTaskModal } from "./components/CreateTaskModal";
import Modal from "react-modal";
import { useState } from "react";
import { ITaskProps } from "./components/Task/types";

Modal.setAppElement("#root");

function App() {
  const [tasks, setTasks] = useState<ITaskProps[]>(() => {
    const taskFromLocalStorage = localStorage.getItem("tasks");

    if (!taskFromLocalStorage) {
      return [];
    }

    return JSON.parse(taskFromLocalStorage);
  });

  const [isCreatedTaskModalOpen, setIsCreatedTaskModalOpen] = useState(false);

  function handleToggleTask(clickedTask: ITaskProps) {
    setTasks((prevState) => {
      return prevState.map((task) => {
        if (task.id === clickedTask.id) {
          return {
            ...task,
            isCompleted: !task.isCompleted,
          };
        }

        return task;
      });
    });
  }

  function handleRemoveTask(taskId: number) {
    setTasks((prevState) => {
      return prevState.filter((task) => {
        return task.id !== taskId;
      });
    });
  }

  function handleRequestCloseCreatedTaskModal() {
    setIsCreatedTaskModalOpen(false);
  }

  return (
    <div className="App">
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>Minhas tarefas</h1>
          <button
            type="button"
            className={styles.addTaskButton}
            onClick={() => setIsCreatedTaskModalOpen(true)}
          >
            Adicionar tarefa
            <Plus />
          </button>
        </header>

        <div className={styles.tasks}>
          {tasks.map((task) => (
            <Task key={task.id}
            task={task}
            handleToggleTask={handleToggleTask}
            handleRemoveTask={handleRemoveTask} />
          ))}
        </div>
      </section>

      <CreateTaskModal
        isOpen={isCreatedTaskModalOpen}
        onRequestClose={handleRequestCloseCreatedTaskModal}
      />
    </div>
  );
}

export default App;
