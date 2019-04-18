import React, { Component } from 'react';
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: []
    };
  }

  // componentDidMount() {
  //   axios.get('https://wx.wearebraid.com/stations').then(res => {
  //     this.setState({ stations:
  //     res })
  //     console.log(this.state.stations)
  //   })
  // }
  componentDidMount() {
    axios.get('http://localhost:3001/station').then(res => {
      this.setState({ stations:
      res })
      console.log(this.state.stations)
    })
  }

  render() {
    // if(this.state.stations) {
    //   let list = this.state.projects.map(cv => {
    //     return (
    //       <div key={cv.Station}>
    //         <Link to={'/stations/' + cv._id}>
    //         <h1>{cv.Station}</h1>
    //         </Link>
    //         <h3>{cv.City}</h3>
    //         <h3>{cv.State}</h3>
    //       </div>
    //     )
    //   })
      return (
        <div className="App">
          {/* {list} */}
          {JSON.stringify(this.state.stations)}
        </div>
      )}
  
}

export default App;
