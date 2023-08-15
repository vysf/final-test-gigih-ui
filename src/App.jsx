import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './styles/App.css';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="container">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/watch/:id" element={<VideoPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
