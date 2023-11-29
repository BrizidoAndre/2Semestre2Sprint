import { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Rotas from './routes';


// importando o themeContext
import ThemeContext from "./context/ThemeContext"

function App() {

  const [theme, setTheme] = useState("Light");

  useEffect(() => {
    const tmlS =localStorage.getItem("theme")

    if (tmlS !== null) {
      setTheme(tmlS)
    }
  })

  // Verifica se o tema está no localStorage ou assume o tema light
  function getThemeLocalStorage() {
    setTheme(localStorage.getItem("theme") !== null
      ? localStorage.getItem("theme")
      : "Light")
  }

  return (
    // Essa tag permite a manipulação dos parametros através apenas dos componentes que ela engloba
    < ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme==="Dark" ? "App-dark" : "" }`}>
        <Rotas />
      </div>
    </ThemeContext.Provider >
  );
}

export default App;
