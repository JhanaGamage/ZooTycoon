import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

class App extends React.Component{

    constructor(){
        super();
    }


    render(){
      return (    
        <div>
        <h1>Zoo des fous</h1>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="signin">Connexion</Link> |{" "}
          <Link to="signup">Inscription</Link> |{" "}

        </nav>
      </div>      ); 
    }
  
}

export default App;