
import { Link } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <header className="App-header">

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/ConnectComp">Список лиг/соревнований</Link> |{" "}
        <Link to="/ConnectCompDate">Календарь лиги </Link> |{" "}
        <Link to="/ConnectTeam">Список команд</Link> |{" "}
        <Link to="/ConnectTeamDate">Календарь одной команды </Link>
      </nav>



       
      </header>
    </div>
  );
}

export default App;
