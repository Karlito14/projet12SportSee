import { Outlet } from 'react-router-dom';
import { NavHorizontal } from './components/NavHorizontal/NavHorizontal';
import { NavVertical } from './components/NavVertical/NavVertical';

export function App() {
  return (
    <div className="container">
      <header>
        <NavHorizontal />
      </header>
      <div className="content">
        <NavVertical />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
