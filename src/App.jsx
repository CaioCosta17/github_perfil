import { useState } from 'react';

import Perfil from './components/Perfil';
import ReposList from './components/ReposList';
import Formulario from './components/Formulario';

function App() {
  const [usernameInput, setUsernameInput] = useState('');
  const [submitUsername, setSubmitUsername] = useState('');

  const searchSubmit = (e) => {
    e.preventDefault();
    if (usernameInput.trim()){
      setSubmitUsername(usernameInput.trim());
    }
  };

  const resetSearch = () => {
    setUsernameInput('');
    setSubmitUsername('');
  };

  return (
    <>
      {!submitUsername ? (
        <div className='container-principal'>
          <div className='container-search'>
            <form onSubmit={searchSubmit}>
              <label className='label-search'>Escreva o nome do usuário aqui:</label>
                <input type="text" className='user-search' value={usernameInput} onChange={(e) => setUsernameInput(e.target.value)}/>
                <button type="submit">Pesquisar</button>
            </form>
          </div>
        </div>
      ) : (
        <>
          <button type="button" onClick={resetSearch} className='btn-nova-busca'>
            Nova Pesquisa
          </button>
          <Perfil nomeUsuario={submitUsername}/>
          <ReposList nomeUsuario={submitUsername}/>
        </>
      )}
    </>
  )
}

export default App
