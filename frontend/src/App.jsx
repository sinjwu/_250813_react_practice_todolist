import { useEffect } from "react";
import { todoApi } from "./services/api";
import { useState } from "react";
import Header from "./components/Header";
import StatsCard from "./components/StatsCard";
import useTodos from "./hooks/useTodos";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  /*  useEffect(() => {
    const test = async () => {
      const data = await todoApi.getTodosByCompleted(true);
      console.log(data);
    };
    test();
  }, []); */
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);
  const { todos, stats, toggleTodo, updateTodo } = useTodos();
  const handleUpdateTodo = async (todoData) => {
    await updateTodo(editingTodo.id, todoData);
  };
  const handleEditTodo = (todo) => {
    setEditingTodo(todo);
    setIsFormOpen(true);
  };
  const handleFormClose = () => {
    setIsFormOpen(false);
  };
  return (
    <div className="bg-yellow-100 min-h-screen">
      <div className="bg-yellow-200 max-w-4xl mx-auto px-4 py-8">
        <Header />
        <StatsCard stats={stats} />
        <ul className="space-y-3">
          <TodoList
            todos={todos}
            onToggle={toggleTodo}
            onEdit={handleEditTodo}
          />
        </ul>
        <TodoForm
          isOpen={isFormOpen}
          onClose={handleFormClose}
          editingTodo={editingTodo}
          onSubmit={handleUpdateTodo}
        />
      </div>
    </div>
  );
};
export default App;
