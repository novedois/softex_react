import {useEffect, useState} from 'react';

import './App.css';

function Botao() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `você clicou ${count} vezes`;
  });

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}

function App() {
  return (
    Botao()
  );
}

export default App;
