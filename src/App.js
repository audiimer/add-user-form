import Users from "./components/Users";
import styled from "./styled.module.css"


function App() {
  return (
    <div className={styled.app}>

      <div className={styled.container}>

      <Users/>
      </div>
    </div>
  );
}

export default App;
