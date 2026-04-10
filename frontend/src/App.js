import { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const API = "http://localhost:5000/tasks";

  const fetchTasks = async () => {
    const res = await axios.get(API);
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async () => {
    if (!title) return;

    if (editingId) {
      await axios.patch(`${API}/${editingId}`, { title });
      setEditingId(null);
    } else {
      await axios.post(API, { title });
    }

    setTitle("");
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await axios.patch(`${API}/${id}`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`${API}/${id}`);
    fetchTasks();
  };

  const startEdit = (task) => {
    setTitle(task.title);
    setEditingId(task.id);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          width: "520px",          // ✅ increased width
          minHeight: "620px",      // ✅ increased height
          backdropFilter: "blur(15px)",
          background: darkMode
            ? "rgba(30,30,30,0.7)"
            : "rgba(255,255,255,0.7)",
          borderRadius: "15px",
          padding: "35px",         // ✅ more spacing
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          color: darkMode ? "#fff" : "#000",
        }}
      >
        <h2 style={{ textAlign: "center" }}>🚀 Task Manager</h2>

        <p style={{ textAlign: "center" }}>Total: {tasks.length}</p>

        {/* Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            width: "100%",
            marginBottom: "15px",
            padding: "10px",       // ✅ bigger button
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: "#222",
            color: "#fff",
          }}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>

        {/* Input */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter task..."
            style={{
              flex: 1,
              padding: "12px",     // ✅ bigger input
              borderRadius: "8px",
              border: "none",
              outline: "none",
              fontSize: "15px",
            }}
          />
          <button
            onClick={addTask}
            style={{
              padding: "12px 16px",  // ✅ bigger button
              borderRadius: "8px",
              border: "none",
              background: "#4CAF50",
              color: "#fff",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            {editingId ? "Update" : "Add"}
          </button>
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "12px", marginBottom: "20px" }}>
          <button onClick={() => setFilter("all")}>All</button>
          <button onClick={() => setFilter("completed")}>✅</button>
          <button onClick={() => setFilter("pending")}>⏳</button>
        </div>

        {/* Tasks */}
        <div style={{ maxHeight: "350px", overflowY: "auto" }}>
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "14px",        // ✅ bigger task card
                marginBottom: "12px",
                borderRadius: "12px",
                background: darkMode ? "#2a2a2a" : "#ffffff",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <span
                onClick={() => toggleTask(task.id)}
                style={{
                  textDecoration: task.completed
                    ? "line-through"
                    : "none",
                  cursor: "pointer",
                  fontSize: "15px",
                }}
              >
                {task.title}
              </span>

              <div style={{ display: "flex", gap: "20px" }}>
                <button
                  onClick={() => startEdit(task)}
                  style={{
                    background: "#ffc107",
                    border: "none",
                    padding: "10px",   // ✅ bigger icon button
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  <FaEdit />
                </button>

                <button
                  onClick={() => deleteTask(task.id)}
                  style={{
                    background: "#e74c3c",
                    border: "none",
                    padding: "10px",   // ✅ bigger icon button
                    borderRadius: "8px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;