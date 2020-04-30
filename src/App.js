import React from "react";

import Firebase from "firebase";
import config from "./config";
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import Post from './containers/Post';
import AboutUS from './containers/AboutUS';
import Form1 from './components/Form1';



class App extends React.Component {
  constructor(props) {
    super(props);
    Firebase.initializeApp(config);

    this.state = {
      locations: []
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      this.writeUserData();
    }
  }

  writeUserData = () => {
    Firebase.database()
      .ref("/")
      .set(this.state);
    console.log("DATA SAVED");
  };

  getUserData = () => {
    let ref = Firebase.database().ref("/");
    ref.on("value", snapshot => {
      const state = snapshot.val();
      this.setState(state);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    let name = this.refs.name.value;
    let state = this.refs.state.value;
    let uid = this.refs.uid.value;

    if (uid && name && state) {
      const { locations } = this.state;
      const devIndex = locations.findIndex(data => {
        return data.uid === uid;
      });
      locations[devIndex].name = name;
      locations[devIndex].state = state;
      this.setState({ locations });
    } else if (name && state) { //Adding new records
      const uid = new Date().getTime().toString();
      const { locations } = this.state;
      locations.push({ uid, name, state });
      this.setState({ locations });
    }

    this.refs.name.value = "";
    this.refs.state.value = "";
    this.refs.uid.value = "";
  };

  removeData = location => {
    const { locations } = this.state;
    const newState = locations.filter(data => {
      return data.uid !== location.uid;
    });
    this.setState({ locations: newState });
  };

  updateData = location => {
    this.refs.uid.value = location.uid;
    this.refs.name.value = location.name;
    this.refs.state.value = location.state;
  };

  render() {
    const { locations } = this.state;
    return (
      
      <React.Fragment>
        <Router>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <h1>Welcome</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              {locations.map(location => (
                <div
                  key={location.uid}
                  className="card float-left"
                  style={{ width: "18rem", marginRight: "1rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <p className="card-text">{location.state}</p>
                    <button
                      onClick={() => this.removeData(location)}
                      className="btn btn-link"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => this.updateData(location)}
                      className="btn btn-link"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <h1>Add new location here</h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-row">
                  <input type="hidden" ref="uid" />
                  <div className="form-group col-md-6">
                    <label>Name</label>
                    <input
                      type="text"
                      ref="name"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label>state</label>
                    <input
                      type="text"
                      ref="state"
                      className="form-control"
                      placeholder="State"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="App">
          <Header />
          <Hero />
          <Form1 />

          <Route path="/" exact component={Home} />
          <Route path="/contact-us"  component={ContactUS}/>
          <Route path="/post/:slug" component={Post} />
          <Route path="/about-us"  component={AboutUS}/>

          
        </div>
        </Router>
      </React.Fragment>
      
    );
  }
  
}

export default App;
