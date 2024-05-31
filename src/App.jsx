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
        <main className='main'>
          <h2 className='main__hello'>Bonjour <span className='main__hello__name'>Thomas</span></h2>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </main>
      </div>
    </div>
  );
}
