import React, { Component } from 'react';
// import {BrowserRouter, Route} from 'react-router-dom';

import Articles from "./components/Articles";


class App extends Component {

    // const = responseJson;
    state = {
      title: undefined,
      body: undefined,
      error: undefined
    }
    componentDidMount(){
      return fetch('http://localhost:8000/api/v1/articles/2')
      .then((Response) => Response.json())
      .then((responseJson) => {
         console.log(responseJson.title)
        this.setState({
                title: responseJson.title,
                body: responseJson.body,
                error: ""
        });
         return responseJson;
      })
    }

  render() {
    return (
     <div>
        <Articles title={this.state.title}
                  body = {this.state.body}
                  error = {this.state.error}/>
     </div>
    );
  }
}

export default App;
