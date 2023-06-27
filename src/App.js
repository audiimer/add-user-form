import React from "react";
import Users from "./components/Users";
import styled from "./styled.module.css"


function App() {
  return (
    <React.Fragment>
    <div className={styled.app}>
      <div className={styled.container}>
      <Users/>
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
