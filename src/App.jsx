import { NavHorizontal } from './components/NavHorizontal/NavHorizontal';
import { NavVertical } from './components/NavVertical/NavVertical';

export function App() {
  return (
    <div className='container'>
      <header>
        <NavHorizontal />
      </header>
      <div className='content'>
        <NavVertical />
        <main></main>
      </div>
    </div>
  );
}
