import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import './styles/global.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home.jsx';
import { Dashboard } from './pages/Dashboard/Dashboard.jsx';
import { ErrorPage } from './pages/Error/Error.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/user/:id" element={<Dashboard />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
