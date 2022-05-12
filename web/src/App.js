// 3 conceitos principais do React
// Componente : Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
// Estado : Informações mantida pelo componente (Imutabilidade)
// Propriedade : informações que um componente "pai" passar para o componente filho.

import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import api from './services/api';
import { useEffect, useState } from 'react';

import DevItem from './components/DevItem/Index';
import DevForm from './components/DevForm/Index';

function App() {

  const [devs, setDevs] = useState([]);




  useEffect(() => {
    async function loadDevs(){
      const response = await api.get('./devs');

      setDevs(response.data);

    }

    loadDevs();

  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);
    setDevs([...devs, response.data]);

  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>
          ))}

        </ul>
      </main>
    </div>
  );
}

export default App;
