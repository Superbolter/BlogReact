import React, { Component } from 'react';
// import {BrowserRouter, Route} from 'react-router-dom';
import Articles from "./components/Articles";
import "./css/bootstrap.css";
import "./css/bootstrap-grid.css";
import "./css/bootstrap-grid.min.css";
import "./css/bootstrap-reboot.min.css";

// const API_URL = 'http://localhost:8000/api/v1';
const API_URL = `https://react-blogapi.herokuapp.com/api/v1`;
class App extends Component {
    state = {
      articles: [],
    }
    componentDidMount(){
      return fetch(`${API_URL}/articles`)
      .then((Response) => Response.json())
      .then((responseJson) => {
        this.setState({
          articles: responseJson
        })
      })
    }

  render() {
    return (
       <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <a className="navbar-brand" href="">Blog</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="">Home
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        <Articles articles = {this.state.articles}/>
       </div>
    );
  }
}

export default App;
