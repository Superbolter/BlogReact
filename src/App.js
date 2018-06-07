import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
// import {BrowserRouter, Route} from 'react-router-dom';
// import Article from "./components/Articles";
import Articles from "./components/Articles";
import "./css/bootstrap.css";
import "./css/bootstrap-grid.css";
import "./css/bootstrap-grid.min.css";
import "./css/bootstrap-reboot.min.css";

class App extends Component {

    // const = responseJson;
    state = {
      articles: [],
      // title: undefined,
      // body: undefined,
      // error: undefined
    }
    componentDidMount(){
      return fetch('http://localhost:8000/api/v1/articles/')
      .then((Response) => Response.json())
      .then((responseJson) => {
        console.log(responseJson)
        this.setState({
          articles: responseJson
        })
      })
    }

  render() {
    return (
     <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div class="container">
            <a class="navbar-brand" href="#">Blog</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home
                    <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
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
