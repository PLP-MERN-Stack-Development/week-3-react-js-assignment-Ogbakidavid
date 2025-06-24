import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/layout';
import TaskManager from './pages/TaskManager';
import Posts from './pages/Posts';
import Home from './pages/Home';
// import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks" element={<TaskManager />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
