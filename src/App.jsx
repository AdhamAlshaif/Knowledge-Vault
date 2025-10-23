import React from 'react';
import './App.css';
import 'antd/dist/reset.css'
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import CreateUser from './pages/CreateUser';
import NotePage from './pages/NotesPage/NotePage';
import { useRoutes } from 'react-router-dom';

function App() {

  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/create-user", element: <CreateUser /> },
    { path: "/NotePage", element: <NotePage /> },
  ])

  return (
    <>
      <Navbar />
      <div className="content">{element}</div>
    </>

  );
}

export default App;
