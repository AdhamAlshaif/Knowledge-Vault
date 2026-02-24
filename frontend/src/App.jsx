import React from "react";
import "./App.css";
import "antd/dist/reset.css";
import Navbar from "./components/NavBar";
import HomePage from "./pages/WebsitePages/HomePage";
//import About from "./pages/About";
//import Contact from "./pages/Contact";
//import LoginPage from "./pages/LoginPage";
//import CreateUser from "./pages/CreateUser";
import CreateNoteContainer from "./pages/NotesPages/CreateNotePages";
import ReadNotePages from "./pages/NotesPages/ReadNotePages";
import EditNotes from "./pages/NotesPages/EditNotes";
import { useRoutes } from "react-router-dom";

function App() {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    // { path: "/about", element: <About /> },
    // { path: "/contact", element: <Contact /> },
    // { path: "/login", element: <LoginPage /> },
    // { path: "/create-user", element: <CreateUser /> },
    { path: "/create-note", element: <CreateNoteContainer /> },
    { path: "/notes-list", element: <ReadNotePages /> },
    { path: "/note/view/:id", element: <EditNotes /> },
  ]);

  return (
    <>
      <Navbar />
      <div className="content">{element}</div>
    </>
  );
}

export default App;
