import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./styles/global.css";
import { Plus } from "react-feather";
import styles from "./styles/pages/home.module.css";
import { Task } from "./components/Task";
import { CreateTaskModal } from "./components/CreateTaskModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

function App() {
  const isCreatedTaskModalOpen = false;

  return (
    <div className="App">
      <section className={styles.container}>
        <header className={styles.header}>
          <h1>Minhas tarefas</h1>
          <button type="button" className={styles.addTaskButton}>
            Adicionar tarefa
            <Plus />
          </button>
        </header>

        <div className={styles.tasks}>
          <Task />
        </div>
      </section>

      <CreateTaskModal isOpen={isCreatedTaskModalOpen} />
    </div>
  );
}

export default App;
