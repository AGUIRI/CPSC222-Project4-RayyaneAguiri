mport React from 'react';
import config from './config';

class Home extends React.Component {

  logout() {
    config.auth().signOut();
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>You Are Logged In</h1>
        <button onClick = {this.logout}>Logout</button>
      </div>
    )
  }
}

export default Home;