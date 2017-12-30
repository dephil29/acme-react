import React, {Component} from 'react';

class Hello extends Component {

    render() {
      return (
        <div className="homeWrapper">
          <div id="titleContainer">
              <a href="/create" className="title">C</a>
              <a href="/read" className="title">R</a>
              <a href="/update" className="title">U</a>
              <a href="/delete" className="title">D</a>
          </div>
          <div className="homeMessage">
            <p>A React app and PHP server.</p><br/>
            <a href="https://github.com/dephil29/acme-react">Here: The App</a><br/>
            <a href="https://github.com/dephil29/acme-products">And Here: The Server</a>
          </div>
        </div>
      );
    }
  }

export default Hello;