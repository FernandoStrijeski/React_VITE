import { X } from "react-feather";
import Modal from "react-modal";
import styles from "./styles.module.css";

export function CreateTaskModal(isOpen) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ovelayClassName="react-modal-overlay"
    >
      <button
        type="button"
        onClick={() => onRequestClose()}
        className={styles.closeButton}
      >
        <X size={16} />
      </button>
      <h1>Adicionar tarefa</h1>
      <form onSubmit={handleCreateNewTask}>
        <label htmlFor="task">Título da tarefa</label>
        <input
          type="text"
          name="task"
          placeholder="Digite aqui..."
          value={newTask}
        />
        <button type="submit" className={styles.button}>
          Adicionar
        </button>
      </form>
    </Modal>
  );
}
