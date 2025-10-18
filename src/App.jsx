import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import LoginPage from './pages/LoginPage';
import CreateUser from './pages/CreateUser';
import { useRoutes } from 'react-router-dom';

function App() {

  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/create-user", element: <CreateUser /> }
  ])

  return (
    <>
      <Navbar />
      <div className="content">{element}</div>
    </>

  );
}

export default App;
