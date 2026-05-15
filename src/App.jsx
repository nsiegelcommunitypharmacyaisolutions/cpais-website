import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Method from './pages/Method.jsx';
import Engage from './pages/Engage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/method" element={<Method />} />
        <Route path="/engage" element={<Engage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
