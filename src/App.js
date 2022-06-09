import "./App.css";
import { Switch, Route } from "react-router-dom";
import Cadastro from "./pages/Cadastro/cadastro";
import Logado from "./pages/Logado/logado";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [usuario, setUsuario] = useState([]);

  return (
    <div className="App">
      <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Cadastro setUsuario={setUsuario} />
        </Route>

        <Route exact path="/Logado">
          <Logado usuario={usuario} />
        </Route>
      </Switch>

      </AnimatePresence>
    </div>
  );
}

export default App;
