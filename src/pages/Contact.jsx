import React, { useEffect, useState } from "react";
import axios from "axios";





function Contact(){ 
    const api = axios.create({
  baseURL: "http://localhost:8080",
});


  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    setError("");
    try {
      const res = await api.get("/users");
      setUsers(res.data);
    } catch (e) {
      setError(e.message || "Failed to load users");
    } finally {
      setLoading(false);
    }
  }

  async function createUser(e) {
    e.preventDefault();
    setError("");
    try {
      await api.post("/save", form);
      setForm({ firstName: "", lastName: "", email: "" });
      fetchUsers();
    } catch (e) {
      setError(e.message || "Create failed");
    }
  }

  async function deleteUser(id) {
    setError("");
    try {
      await api.delete(`/delete/${id}`);
      setUsers(users.filter(u => u.id !== id));
    } catch (e) {
      setError(e.message || "Delete failed");
    }
  }

  async function updateUser(id) {
    const newFirst = prompt("New first name:");
    if (newFirst == null) return;
    try {
      await api.put(`/update/${id}`, { firstName: newFirst, lastName: "unchanged", email: "unchanged@example.com" });
      fetchUsers();
    } catch (e) {
      setError(e.message || "Update failed");
    }
  }

  return (
    <div>
      <h2>Users</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={createUser}>
        <input placeholder="First" value={form.firstName} onChange={e => setForm({...form, firstName: e.target.value})} />
        <input placeholder="Last" value={form.lastName} onChange={e => setForm({...form, lastName: e.target.value})} />
        <input placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
        <button type="submit">Create</button>
      </form>

      {loading ? <div>Loading...</div> : (
        <ul>
          {users.map(u => (
            <li key={u.id}>
              {u.id} — {u.firstName} {u.lastName} ({u.email})
              <button onClick={() => updateUser(u.id)}>Update</button>
              <button onClick={() => deleteUser(u.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Contact;