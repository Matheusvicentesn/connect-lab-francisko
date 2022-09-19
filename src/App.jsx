import { useNavigate } from "react-router-dom";
import { Router } from "@router";
import { useAuth } from "@hooks";
function App() {
  const navigate = useNavigate();
  const { token, signOut } = useAuth();

  return (
    <>
      <header>
        {token ? "Tá logado" : "Não tá ligado"}
        <button onClick={() => navigate("/")}>ir pra home</button>
        {token && <button onClick={signOut}>Deslogar</button>}

        <nav>
          <h1>Título</h1>
        </nav>
      </header>
      <main>
        <Router />
      </main>
      <footer>
        <p>Feito com 😠 por Francisko</p>
      </footer>
    </>
  );
}

export default App;
