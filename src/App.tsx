import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
            Coffee Shop Coming Soon
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}